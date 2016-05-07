/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fleet.dao;

import com.fleet.entidades.Usuario;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author nanoj
 */
public class LoginDao {

    private Connection conexion;

    public LoginDao() throws SQLException, ClassNotFoundException {
    }
    
    public void login(String user,String pass) throws SQLException,ClassNotFoundException{
         this.conexion = ConexionBD.getConnectionFleet(user,pass); 
    }

    public Byte existeUsuario(String usuario, String pass) throws SQLException {
        String query = "{CALL DBO.LOGIN_USUARIO(?,?,?)}";
        CallableStatement cs = conexion.prepareCall(query);
        cs.setString(1, usuario);
        cs.setString(2, pass);
        cs.registerOutParameter(3, java.sql.Types.BIT);
        cs.execute();

        return cs.getByte("Result");
    }

    public Usuario buscaUsuario(String user) throws SQLException {
        String query = "EXECUTE BUSCA_USUARIO @XID_USUARIO=?, ";
        CallableStatement cs = conexion.prepareCall(query);
        cs.setString(1, user);
        ResultSet rs = cs.executeQuery();
        rs.next();
        Usuario us = new Usuario(rs.getString("ID_USUARIO"), rs.getString("NOMBRE"), rs.getString("ROL"));
        return us;
    }

}
