package com.fleet.servlets;

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
 * @author AlvaroLopez
 */
@WebServlet("/proyecCont")
public class ProyecCont extends HttpServlet {


    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String contrato = request.getParameter("contrato");
        Map<String, String> respuesta = new LinkedHashMap<>();
        Gson gson = new Gson();
        String json = null;
        try {
            ProyectoDao pdao = new ProyectoDao();         
            json = gson.toJson(pdao.getAllByCon(contrato));
        }catch (SQLException | ClassNotFoundException ex) {
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
