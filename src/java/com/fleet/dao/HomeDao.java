

package com.fleet.dao;

import com.google.gson.Gson;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 *
 * @author AlvaroLopez
 */
public class HomeDao {
        private final Connection conexion;

    public HomeDao() throws SQLException, ClassNotFoundException {
        this.conexion = ConexionBD.getConnectionFleet();
    }
    
    public String getDatosHome() throws SQLException{
      
        Gson gson = new Gson();
        Map<String, Float> respuesta = new LinkedHashMap<>();
        
        String query = "EXEC CANTMONTACARGAS_TOTAL";
        CallableStatement cs = conexion.prepareCall(query);
        ResultSet rs = cs.executeQuery();
        rs.next();
        float total_montacargas = rs.getInt(1);
        respuesta.put("total_montacargas", total_montacargas);
        
        query = "EXEC PROYECTOS_TOTALES";
        cs = conexion.prepareCall(query);
        rs = cs.executeQuery();
        rs.next();
        float total_proyectos = rs.getInt(1);
        respuesta.put("total_proyectos", total_proyectos);
        respuesta.put("total_proyectos", total_proyectos);
        
        query = "EXEC CANTCONTRATOS_TOTALES";
        cs = conexion.prepareCall(query);
        rs = cs.executeQuery();
        rs.next();
        float total_contratos = rs.getInt(1);
        respuesta.put("total_contratos", total_contratos);
        
        query = "EXEC CANTMONTACARGAS_TOTAL";
        cs = conexion.prepareCall(query);
        rs = cs.executeQuery();
        rs.next();
        float total_montacargas_mantenimiento = rs.getInt(1);
        respuesta.put("total_montacargas_mantenimiento", total_montacargas_mantenimiento);
        
        query = "EXEC PROMEDIOHORAS_TOTALES";
        cs = conexion.prepareCall(query);
        rs = cs.executeQuery();
        rs.next();
        float promedio_horas_totales = rs.getInt(1);
        respuesta.put("promedio_horas_totales", promedio_horas_totales);
        
        query = "EXEC CANTMONTACARGAS_TOTAL";
        cs = conexion.prepareCall(query);
        rs = cs.executeQuery();
        rs.next();
        float promedio_horas_laboradas_por_semana = rs.getInt(1);
        respuesta.put("promedio_horas_laboradas_por_semana", promedio_horas_laboradas_por_semana);
        
        return gson.toJson(respuesta);
    }
}

