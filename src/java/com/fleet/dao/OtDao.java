/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fleet.dao;

import com.fleet.entidades.Insumo;
import com.fleet.entidades.Mantenimiento;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import java.lang.reflect.Type;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Stack;

/**
 *
 * @author Alvaro Lopez
 */
public class OtDao {

    private final Connection conexion;

    public OtDao() throws SQLException, ClassNotFoundException {
        this.conexion = ConexionBD.getConnectionFleet();
    }

    public void insert(String ot) throws SQLException {
        String query = "EXEC INSOT @XOT=?";
        CallableStatement cs = conexion.prepareCall(query);
        cs.setString(1, ot);
        cs.execute();
    }

    public boolean precesada(String ot) throws SQLException {
        String query = "{CALL DBO.BUSCA_OT(?,?)}";
        CallableStatement cs = conexion.prepareCall(query);
        cs.setString(1, ot);
        cs.registerOutParameter(2, java.sql.Types.BIT);
        cs.execute();
        return cs.getByte("Result") == 1;
    }

    public String procesar(String insumosOtWeb) throws SQLException, ClassNotFoundException {

        Gson gson = new Gson();
        String json = null;
        Map<String, String> respuesta = new LinkedHashMap<>();

        try {
            Type listType = new TypeToken<ArrayList<Insumo>>() {
            }.getType();
            ArrayList<Insumo> insumosOt = new Gson().fromJson(insumosOtWeb, listType);

            boolean procesada = false;
            for (Insumo in : insumosOt) {
                if (precesada(in.getNumero_Orden_Trabajo())) {
                    procesada = true;
                }
            }
            if (!procesada) {

                //CREAMOS LOS DAO NECESARIOS
                MantenimientoDao md = new MantenimientoDao();
                AlertasDao ad = new AlertasDao();
                
                //CARGAMOS LOS MANTENIMIENTOS ABIERTOS
                List<Mantenimiento> MantenimientosAbiertos = md.getOpen();

                //CARGARMOS LOS INSUMOS A LOS MANTENIMIENTOS
                for (Mantenimiento mt : MantenimientosAbiertos) {
                    mt.setInsumos(md.getInsumos(mt.getId()));
                }
                Stack ots = new Stack();

                // REVISAMOS INSUMOS Y ELIMINAMOS
                for (Mantenimiento mt : MantenimientosAbiertos) {
                    for (Insumo isumoMant : mt.getInsumos()) {
                        for (int i = 0; i < insumosOt.size(); i++) {
                            Insumo ins = insumosOt.get(i);
                            if (ots.isEmpty()) {
                                ots.push(ins.getNumero_Orden_Trabajo());
                            } else if (!ots.contains(ins.getNumero_Orden_Trabajo())) {
                                ots.push(ins.getNumero_Orden_Trabajo());
                            }
                            if (ins.getNumero_de_articulo().equals(isumoMant.getNum())
                                    && ins.getCantidad() == isumoMant.getCantidad() 
                                    ) {
                                md.updateCheck(mt.getId(), isumoMant.getNum(), isumoMant.getCantidad());
                                insumosOt.remove(i);
                            }
                        }
                    } 
                    md.close(mt.getId());
                }
                //INSERTAMOS LAS OT PROCESADAS EN LA BD
                
                while(!ots.isEmpty()){
                insert((String) ots.pop());
                }
                
                //REVISAMOS SI QUEDO ALGUN MANTENIMIENTO CON INSUMOS SIN REVISAR 
                for (Mantenimiento mt : MantenimientosAbiertos) {
                        ArrayList<Insumo> insumos = md.getInsumosSinRevisar(mt.getId());
                        if(!insumos.isEmpty()){
                          for(Insumo i: insumos){
                            String msj = "No se encontro el insumo "+i.getDescripcion_articulo()+
                                    " para el mantenimiento "+mt.getId()+" de "
                                    +mt.getTipo()+" horas para el montacargas"+mt.getMontacargas();            
                            ad.insert("alertaI",msj, Integer.parseInt(mt.getTipo()),mt.getMontacargas());
                          }
                        }
                        
                }
                
                

                json = gson.toJson(insumosOt);
            } else {
                respuesta.put("Error", "Este archivo contiene una OT ya procesada");
                json = gson.toJson(respuesta);
            }

        } catch (SQLException e) {
            respuesta.put("Error", "Error desconocido "+e);
            json = gson.toJson(respuesta);
        } finally {
            return json;
        }
    }
}
