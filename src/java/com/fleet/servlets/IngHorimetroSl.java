package com.fleet.servlets;

import com.fleet.dao.HorimetroDao;
import com.fleet.entidades.DateFormat;
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

@WebServlet("/ingHorimetro")
public class IngHorimetroSl extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        DateFormat df = new DateFormat();

        String fecha = request.getParameter("fechaIni");
        String horas = request.getParameter("horas");
        String montacargas = request.getParameter("montacargas");

        String fecha2 = df.format(fecha).trim();

        Map<String, String> respuesta = new LinkedHashMap<>();
        Gson gson = new Gson();
        String json = null;
        try {
            HorimetroDao hdao = new HorimetroDao();
            hdao.ingHorimetro(montacargas, fecha2, horas);
            respuesta.put("Exito", "Se registraron las horas correctamente al equipo: "+ montacargas);
            json = gson.toJson(respuesta);

        }  catch (SQLException | ClassNotFoundException ex) {
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
