/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fleet.servlets;

import com.fleet.dao.ContratoDao;
import com.fleet.dao.MontacargasDao;
import com.fleet.entidades.Montacargas;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import java.io.IOException;
import java.io.PrintWriter;
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
 * @author Estefania
 */
@WebServlet("/SVIngresarMontacargas")
public class SVIngresarMontacargas extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String mont = request.getParameter("montacargas");
        Type listType = new TypeToken<Montacargas>() {
        }.getType();
        Montacargas montacargas = new Gson().fromJson(mont, listType);

        Map<String, String> respuesta = new LinkedHashMap<>();
        Gson gson = new Gson();
        String json = null;

        try {
            MontacargasDao cd = new MontacargasDao();
            cd.insert(montacargas);          
            respuesta.put("Exito", "Montacargas registrado correctamente");
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
