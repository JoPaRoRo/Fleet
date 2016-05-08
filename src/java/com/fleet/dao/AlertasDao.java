/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fleet.dao;

import com.fleet.entidades.Alerta;
import com.fleet.entidades.Montacargas;
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
public class AlertasDao {

    private final Connection conexion;

    public AlertasDao() throws SQLException, ClassNotFoundException {
        this.conexion = ConexionBD.getConnectionFleet();
    }

    public List<Alerta> getAll() throws SQLException {

        String query = "EXEC ALERTS";
        CallableStatement cs = conexion.prepareCall(query);
        ResultSet rs = cs.executeQuery();
        List<Alerta> alertas = new ArrayList<>();
        while (rs.next()) {
            Integer consecutivo = Integer.parseInt(rs.getString("CONSECUTIVO"));
            String tipo = rs.getString("TIPO");
            String descripcion = rs.getString("DESCRIPCION");
            String fecha = rs.getString("FECHA");
            String montacargas = rs.getString("MONTACARGAS");

            Alerta m = new Alerta(consecutivo, tipo, descripcion, fecha, montacargas);
            alertas.add(m);
        }

        return alertas;
    }
    
    public List<Alerta> getMan() throws SQLException {

        String query = "EXEC ALERTS_MAN";
        CallableStatement cs = conexion.prepareCall(query);
        ResultSet rs = cs.executeQuery();
        List<Alerta> alertas = new ArrayList<>();
        while (rs.next()) {
            Integer consecutivo = Integer.parseInt(rs.getString("CONSECUTIVO"));
            String montacargas = rs.getString("MONTACARGAS");
            Integer horas = Integer.parseInt(rs.getString("HORAS"));
            Alerta m = new Alerta(consecutivo,montacargas,horas);
            alertas.add(m);
        }

        return alertas;
    }
    
    

}
