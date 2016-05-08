/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fleet.servlets;

import com.fleet.dao.AlertasDao;
import com.fleet.dao.MontacargasDao;
import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
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
@WebServlet("/DeleteAlertSv")
public class DeleteAlertSv extends HttpServlet {
      protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String consecutivo = request.getParameter("consecutivo");

        Map<String, String> respuesta = new LinkedHashMap<>();
        Gson gson = new Gson();
        String json = null;
        try {
            AlertasDao adao = new AlertasDao();
            Integer con = Integer.parseInt(consecutivo);
            adao.deleteAlet(con);
            respuesta.put("Exito", "Montacargas enviado a mantenimiento");
            json = gson.toJson(respuesta);
        } catch (SQLException | ClassNotFoundException ex) {
            respuesta.put("Error", "Error desconocido: "+ex.getMessage());
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
