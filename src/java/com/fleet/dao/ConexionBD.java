package com.fleet.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConexionBD {

    public static Connection getConnectionFleet() throws SQLException, ClassNotFoundException {
        if(conexion == null){
        Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
        String url = "jdbc:sqlserver://fleet.cmn8bdeqggnf.us-west-2.rds.amazonaws.com:1433;databaseName=Fleet;user=sa;password=RootRoot123;";
        conexion = DriverManager.getConnection(url);
        }
        // puerto 1433
        return conexion;

    }

    public static Connection getConnectionMirror() throws ClassNotFoundException, SQLException {

         if(conexion == null){
        Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
        String url = "jdbc:sqlserver://fleet.cmn8bdeqggnf.us-west-2.rds.amazonaws.com:1433;databaseName=Fleet;user=sa;password=RootRoot123;";
        conexion = DriverManager.getConnection(url);
         }
        return conexion;

    }
    
    private static Connection conexion = null;

}
