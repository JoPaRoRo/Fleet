package com.fleet.servlets;

import com.fleet.dao.MontacargasDao;
import com.fleet.entidades.GastoE;
import com.fleet.entidades.Montacargas;
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

@WebServlet("/regGasto")
public class RegGastoSl extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        
        String gastoE = request.getParameter("gastoE");
        
        Map<String, String> respuesta = new LinkedHashMap<String, String>();
        Gson gson = new Gson();
        String json = null;


        try {
        Type listUsu = new TypeToken<GastoE>() {}.getType();
        GastoE gastosE = new Gson().fromJson(gastoE, listUsu);
            for (Montacargas gastoE1 : gastosE.getListaMontacargas()) {
                MontacargasDao mdao = new MontacargasDao();
                mdao.regGasto(gastosE.getTipo(),gastosE.getCosto(),gastoE1.getNumero_serie());
            }
             //Sustituir por x el montacargas
            
            respuesta.put("Exito", "El gasto se registro correctamente");
              json = gson.toJson(respuesta);

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

    private Map<String, String> respuesta = new LinkedHashMap<String, String>();
}
