/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fleet.dao;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;

/**
 *
 * @author nanoj
 */
public class HorimetroDao {
        private final Connection conexion;

    public HorimetroDao() throws SQLException, ClassNotFoundException {
        this.conexion = ConexionBD.getConnectionFleet();
    }
    
    public void ingHorimetro(String m,String fecha,String horas) throws SQLException{
          String query = "EXEC INSHOR ?,?,?";
            CallableStatement cs = conexion.prepareCall(query);
            cs.setString(1, fecha);
            cs.setFloat(2,Float.parseFloat(horas));
            cs.setString(3,m);
            cs.execute();
    }
}
