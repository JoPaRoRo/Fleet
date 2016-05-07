/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fleet.dao;

import com.fleet.entidades.Alerta;
import com.fleet.entidades.DateFormat;
import com.fleet.entidades.Usuario;
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
public class UsuarioDao {

    private final Connection conexion;

    public UsuarioDao() throws SQLException, ClassNotFoundException {
        this.conexion = ConexionBD.getConnectionFleet();
    }

    public List<Usuario> getAll() throws SQLException {

        String query = "EXEC USERS";
        CallableStatement cs = conexion.prepareCall(query);
        ResultSet rs = cs.executeQuery();
        List<Usuario> usuario = new ArrayList<>();
        while (rs.next()) {
            String id_usuario = rs.getString("ID_USUARIO");
            String NOMBRE = rs.getString("NOMBRE");
            String rol = rs.getString("ROL");
            Usuario m = new Usuario(id_usuario, NOMBRE, rol);
            usuario.add(m);
        }

        return usuario;
    }

    public void insert(Usuario us) throws SQLException {
        String query = "EXEC INS_USUARIO @XID_USUARIO=?,@XUSER=?,@XPASS=?,@XNOMBRE=?,@XROL=?";
        CallableStatement cs = conexion.prepareCall(query);
        cs.setString(1, us.getId_usuario());
        cs.setString(2, us.createDBUser());
        cs.setString(3, us.createDBUser());
        cs.setString(4, us.getNombre());
        cs.setString(5, us.getRol());
        cs.execute();
    }

    public void update(Usuario us) throws SQLException {
        String query = "EXEC ACT_USERS @XID_USUARIO=?,@XNOMBRE=?,@XROL=?";
        CallableStatement cs = conexion.prepareCall(query);
        cs.setString(1, us.getId_usuario());
        cs.setString(2, us.getNombre());
        cs.setString(3, us.getRol());
        cs.execute();
    }

    public void delete(Usuario us) throws SQLException {
        String query = "EXEC DEL_USER @XID_USUARIO=?";
        CallableStatement cs = conexion.prepareCall(query);
        cs.setString(1, us.getId_usuario());
        cs.execute();
    }

    public String getPass(String us) throws SQLException{
        String query = "EXEC BUSCA_PASS @XID_USUARIO=?";
        CallableStatement cs = conexion.prepareCall(query);
        cs.setString(1, us);
        ResultSet rs = cs.executeQuery();
        rs.next();
        return rs.getString(1);
    }
    
    public void changePass(String us,String newPass) throws SQLException {
        String query = "EXEC CHANGE_PASS @XID_USUARIO=?, @XPASS=?";
        CallableStatement cs = conexion.prepareCall(query);
        cs.setString(1, us);
        cs.setString(2, newPass);
        cs.execute();     
    }

}
