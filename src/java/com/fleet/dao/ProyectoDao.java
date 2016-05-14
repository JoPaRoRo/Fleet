/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fleet.dao;

import com.fleet.entidades.DateFormat;
import com.fleet.entidades.Proyecto;
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
public class ProyectoDao {

    private final Connection conexion;

    public ProyectoDao() throws SQLException, ClassNotFoundException {
        this.conexion = ConexionBD.getConnectionFleet();
    }
    
    public List getAllByCon(String contrato) throws SQLException{
            String query = "EXEC PROYECTO_POR_CONTRATO @CONTRATO=?";
            CallableStatement cs = conexion.prepareCall(query);
            cs.setString(1, contrato);
            ResultSet rs = cs.executeQuery();
            List<Proyecto> proyectos = new ArrayList<>();
            while (rs.next()) {
                String codigo = rs.getString(1);
                String nombre = rs.getString(2);
                proyectos.add(new Proyecto(nombre, codigo));
            }
            
            return proyectos;
    }
    
    public void insert(String nombre, String codigo,String contrato) throws SQLException{
            DateFormat df = new DateFormat();
            String query = "EXEC INSPRO @XNOMBRE =?, @XCODIGO=?, @CONTRATO=?";
            CallableStatement cs = conexion.prepareCall(query);
            cs.setString(1, nombre);
            cs.setString(2, codigo);
            cs.setString(3, contrato);
            cs.execute();
        }

}
