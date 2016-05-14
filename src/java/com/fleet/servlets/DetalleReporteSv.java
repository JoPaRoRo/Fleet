package com.fleet.servlets;

import com.fleet.dao.ReporteDao;
import com.fleet.entidades.Reporte;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import java.io.IOException;
import java.lang.reflect.Type;
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
@WebServlet("/reporteDetalle")
public class DetalleReporteSv extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String datosReporte = request.getParameter("reporte");

        Map<String, String> respuesta = new LinkedHashMap<String, String>();
        Gson gson = new Gson();
        String json = null;

        try {
            Type rep = new TypeToken<Reporte>() {
            }.getType();
            Reporte reporte = new Gson().fromJson(datosReporte, rep);
            
            ReporteDao rd = new ReporteDao();

            if (reporte.getTipo() == 1) {
                json =  gson.toJson(rd.generarDetalleMontacargas(reporte));
            } else if (reporte.getTipo() == 2) {
                json =  gson.toJson(rd.generarDetalleContrato(reporte));
            } else if (reporte.getTipo() == 3) {
                json =  gson.toJson(rd.generarDetalleProyecto(reporte));
            } else{
             json =  gson.toJson(rd.generarDetalleModelo(reporte));
            }
        } catch (Exception ex) {
            respuesta.put("Error", "Error desconocido");
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
