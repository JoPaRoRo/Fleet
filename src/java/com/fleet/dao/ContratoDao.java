/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fleet.dao;

import com.fleet.entidades.Contrato;
import com.fleet.entidades.DateFormat;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author nanoj
 */
public class ContratoDao {
    private final Connection conexion;

    public ContratoDao() throws SQLException, ClassNotFoundException {
        this.conexion = ConexionBD.getConnectionFleet();
    }
    
        public List getAll() throws SQLException{
           String query = "EXEC CONTRS";
            CallableStatement cs = conexion.prepareCall(query);
            ResultSet rs = cs.executeQuery();
            List<Contrato> contratos = new ArrayList<>();
            while (rs.next()) {
                String nombre = rs.getString(1);
                String codigo = rs.getString(2);
                contratos.add(new Contrato(nombre, codigo));
            }
            
            return contratos;
    }
        
        public void insert(String nombre, String codigo, String fechaIni, String fechaFin) throws SQLException{
            DateFormat df = new DateFormat();
            String query = "EXEC INSCON @XNOMBRE =?, @XCODIGO=?, @XFECHA_INICIO=?, @XFECHA_FINAL=?";
            CallableStatement cs = conexion.prepareCall(query);
            cs.setString(1, nombre);
            cs.setString(2, codigo);
            cs.setString(3, df.format(fechaIni));
            cs.setString(4, df.format(fechaFin));
            cs.execute();
        }
    
}
