package com.fleet.servlets;

import com.fleet.dao.ConexionBD;
import com.fleet.dao.MontacargasDao;
import com.google.gson.Gson;
import java.io.IOException;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author AlvaroLopez
 */
@WebServlet("/monProyec")
public class MontProyec extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String proyecto = request.getParameter("proyecto");
        Map<String, String> respuesta = new LinkedHashMap<>();
        Gson gson = new Gson();
        String json = null;
        try {
            MontacargasDao mdao = new MontacargasDao();
            json = gson.toJson(mdao.getAllByProyect(proyecto));

        } catch (SQLException | ClassNotFoundException ex) {
            respuesta.put("Error", "Error desconocido, intentelo nuevamente");
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
