/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fleet.servlets;

import com.fleet.dao.AlertasDao;
import com.fleet.dao.MantenimientoDao;
import com.fleet.dao.MontacargasDao;
import com.fleet.entidades.Alerta;
import com.fleet.entidades.Mantenimiento;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import java.io.IOException;
import java.lang.reflect.Type;
import java.sql.Date;
import java.sql.SQLException;
import java.util.GregorianCalendar;
import java.util.LinkedHashMap;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Estefania
 */
@WebServlet("/realizar")
public class RealizarSv extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        Map<String, String> respuesta = new LinkedHashMap<>();
        Gson gson = new Gson();
        String json = null;
        try {
            String alert = request.getParameter("alerta");

            Type listType = new TypeToken<Alerta>() {
            }.getType();
            Alerta a = new Gson().fromJson(alert, listType);

            Mantenimiento m = new Mantenimiento(a.getHoras().toString(), 1, a.getMontacargas());

            MantenimientoDao cd = new MantenimientoDao();
            cd.insertPreventivo(m);
            MontacargasDao mdao = new MontacargasDao();
            mdao.actualizaEstado(a.getMontacargas(), 1);
            AlertasDao adao = new AlertasDao();
            adao.deleteAlet(a.getCodigo());
            respuesta.put("Exito", "Montacargas enviado a mantenimiento correctamente");
            json = gson.toJson(respuesta);
        } catch (SQLException | ClassNotFoundException ex) {
            respuesta.put("Error", "Error desconocido " + ex.getMessage());
            json = gson.toJson(respuesta);

        } finally {
            response.getWriter().write(json);
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        processRequest(req, resp);
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        processRequest(req, resp);
    }

}
