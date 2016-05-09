/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fleet.servlets;

import com.fleet.dao.MantenimientoDao;
import com.fleet.dao.MontacargasDao;
import com.fleet.entidades.Alerta;
import com.fleet.entidades.Mantenimiento;
import com.fleet.entidades.Montacargas;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import java.io.IOException;
import java.lang.reflect.Type;
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
 * @author Alvaro Lopez
 */
@WebServlet("/SvInsCorrectivo")
public class SvInsCorrectivo extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String mantenimiento = request.getParameter("mantenimiento");

        Map<String, String> respuesta = new LinkedHashMap<>();
        Gson gson = new Gson();
        String json = null;
        try {
            Type listType = new TypeToken<Mantenimiento>() {
            }.getType();
            Mantenimiento m = new Gson().fromJson(mantenimiento, listType);
            MantenimientoDao md = new MantenimientoDao();
            md.insertCorrectivo(m);
            respuesta.put("Exito", "Mantenimiento registrado correctamente");
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
