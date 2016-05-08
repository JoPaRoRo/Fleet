/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fleet.dao;

import com.fleet.entidades.DateFormat;
import com.fleet.entidades.Insumo;
import com.fleet.entidades.Mantenimiento;
import java.sql.CallableStatement;
import java.sql.Connection;
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
            String fecha = rs.getString("FECHA_MANTENIMIENTO");
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
            String id = rs.getString("ID");
            String descripcion = rs.getString("NOMBRE");
            float cantidad = rs.getFloat("CANTIDAD");
            float precio = rs.getFloat("PRECIO");
            String montacargas = rs.getString("MONTACARGAS");
            insumos.add(new Insumo(id, descripcion, cantidad, precio, montacargas));
        }
        return insumos;
    }

    public void updateCheck(int mantenimiento, String numeroParte, float cantidad) throws SQLException {
        String query = "EXEC UPDCHECK @XMANTENIMIENTO=?, @XNUMEROPARTE = ?,@XCANTIDAD=?";
        CallableStatement cs = conexion.prepareCall(query);
        cs.setInt(1, mantenimiento);
        cs.setString(2, numeroParte);
        cs.setFloat(3, cantidad);
        cs.execute();

    }

    public ArrayList<Insumo> getInsumosSinRevisar(int mantenimiento) throws SQLException {
        ArrayList<Insumo> insumos = new ArrayList<>();
        String query = "EXEC INSUMOSNR_MANTENIMIENTO @MANTENIMIENTO=?";
        CallableStatement cs = conexion.prepareCall(query);
        cs.setInt(1, mantenimiento);
        ResultSet rs = cs.executeQuery();

        while (rs.next()) {
            String id = rs.getString("ID");
            String nombre= rs.getString("NOMBRE");
            int cantidad= rs.getInt("CANTIDAD");
            String montacargas= rs.getString("MONTACARGAS");
            insumos.add(new Insumo(id, nombre, cantidad, montacargas));

        }

        return insumos;
    }

    public void close(int mantenimiento) throws SQLException {
        String query = "EXEC CERRAR_MANTENIMIENTO @MANTENIMIENTO=?";
        CallableStatement cs = conexion.prepareCall(query);
        cs.setInt(1, mantenimiento);
        cs.execute();
    }

    public int getLastMant() throws SQLException {
        String query = "EXEC ULTIMO_MANTENIMIENTO";
        CallableStatement cs = conexion.prepareCall(query);
        ResultSet rs = cs.executeQuery();
        rs.next();
        return rs.getInt(1);

    }

    public void insertCorrectivo(Mantenimiento mantenimiento) throws SQLException {

        DateFormat dt = new DateFormat();
        String query = "EXEC INSMAN @FECHA=?, @TIPO = ?,@ESTADO=?, @MONTACARGAS=?";
        CallableStatement cs = conexion.prepareCall(query);
        cs.setString(1, dt.format(mantenimiento.getFecha_mantenimiento()));
        cs.setString(2, mantenimiento.getTipo());
        cs.setInt(3, mantenimiento.getEstado());
        cs.setString(4, mantenimiento.getMontacargas());
        cs.execute();

        int id = getLastMant();

        for (Insumo ins : mantenimiento.getInsumos()) {
            query = "EXEC ASIGN_INSUMOS_STE_COR @XID =?, @XNOMBRE =?, @XPRECIO =?,@XCANTIDAD=?,@XTIPO=?,@XESTADO =?,@XMANTENIMIENTO =?)";
            cs = conexion.prepareCall(query);
            cs.setString(1, ins.getNum());
            cs.setString(2, ins.getDescripcion_articulo());
            cs.setFloat(3, ins.getPrecio());
            cs.setFloat(4, ins.getCantidad());
            cs.setString(5, ins.getTipo());
            cs.setString(6, ins.getEstado());
            cs.setInt(7, id);
        }
    }

    public void insertPreventivo(Mantenimiento mantenimiento) throws SQLException {
        DateFormat dt = new DateFormat();
        String query = "EXEC INSMAN @FECHA=?, @TIPO = ?,@ESTADO=?, @MONTACARGAS";
        CallableStatement cs = conexion.prepareCall(query);
        cs.setString(1, dt.format(mantenimiento.getFecha_mantenimiento()));
        cs.setString(2, mantenimiento.getTipo());
        cs.setInt(3, mantenimiento.getEstado());
        cs.setString(4, mantenimiento.getMontacargas());
        cs.execute();

        int id = getLastMant();

        query = "EXEC OBTENER_MODELO @XMONTACARGAS=?";
        cs = conexion.prepareCall(query);
        cs.setString(1, mantenimiento.getMontacargas());
        ResultSet rs = cs.executeQuery();
        rs.next();
        String modelo = rs.getString(1);

        query = "EXEC ASIGN_INSUMOS_STE @ID_MANT=?, @MODELO=?, @HORAS=?";
        cs = conexion.prepareCall(query);
        cs.setInt(1, id);
        cs.setString(2, modelo);
        cs.setInt(3, Integer.parseInt(mantenimiento.getTipo()));
        cs.setString(4, mantenimiento.getMontacargas());
        cs.execute();

    }
}
