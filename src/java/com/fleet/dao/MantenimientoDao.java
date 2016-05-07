/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fleet.dao;

import com.fleet.entidades.Insumo;
import com.fleet.entidades.Mantenimiento;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.Date;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Alvaro Lopez
 */
public class MantenimientoDao {

    private final Connection conexion;

    public MantenimientoDao() throws SQLException, ClassNotFoundException {
        this.conexion = ConexionBD.getConnectionFleet();
    }

    public List<Mantenimiento> getOpen() throws SQLException {

        String query = "EXEC MANTENIMIENTOS_ABIERTOS";
        CallableStatement cs = conexion.prepareCall(query);
        ResultSet rs = cs.executeQuery();
        List<Mantenimiento> mantenimientos = new ArrayList<>();
        while (rs.next()) {
            int id = Integer.parseInt(rs.getString("ID"));
            Date fecha = rs.getDate("FECHA_MANTENIMIENTO");
            String tipo = rs.getString("TIPO");
            String montacargas = rs.getString("MONTACARGAS");
            mantenimientos.add(new Mantenimiento(id, fecha, tipo, montacargas));
        }

        return mantenimientos;
    }

    public List<Insumo> getInsumos(int idMantenimiento) throws SQLException {

        String query = "EXEC INSUMO_MANTENIMIENTO @MANTENIMIENTO = ?";
        CallableStatement cs = conexion.prepareCall(query);
        cs.setInt(1, idMantenimiento);
        ResultSet rs = cs.executeQuery();
        List<Insumo> insumos = new ArrayList<>();
        while (rs.next()) {
            String id =rs.getString("ID");
            String descripcion = rs.getString("NOMBRE");
            float cantidad = rs.getFloat("CANTIDAD");
            float precio = rs.getFloat("PRECIO");
            String montacargas = rs.getString("MONTACARGAS");
            insumos.add(new Insumo(id, descripcion, cantidad, precio, montacargas));
        }
        return insumos;
    }

    public void updateCheck(int mantenimiento,String numeroParte,float cantidad) throws SQLException{
        String query = "EXEC UPDCHECK @XMANTENIMIENTO=?, XNUMEROPARTE = ?,XCANTIDAD=?";
        CallableStatement cs = conexion.prepareCall(query);
        cs.setInt(1, mantenimiento);
        cs.setString(1, numeroParte);
        cs.setFloat(1, cantidad);
        cs.execute();
    
    }
}
