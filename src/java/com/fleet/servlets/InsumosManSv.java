/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fleet.servlets;

import com.fleet.dao.MantenimientoDao;
import com.fleet.dao.ProyectoDao;
import com.google.gson.Gson;
import java.io.IOException;
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
 * @author nanoj
 */
@WebServlet("/insumos_man")
public class InsumosManSv extends HttpServlet {


    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
              String mantenimiento = request.getParameter("mantenimiento");
        Map<String, String> respuesta = new LinkedHashMap<>();
        Gson gson = new Gson();
        String json = null;
        try {
            MantenimientoDao mdao = new MantenimientoDao();         
            json = gson.toJson(mdao.getInsumos(Integer.parseInt(mantenimiento)));
        }catch (SQLException | ClassNotFoundException | NumberFormatException ex) {
            respuesta.put("Error", "Error desconocido, intentelo nuevamente" + ex.getMessage());
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
