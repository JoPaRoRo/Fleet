/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fleet.servlets;

import com.fleet.dao.UsuarioDao;
import com.fleet.entidades.Usuario;
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
 * @author nanoj
 */
@WebServlet("/changePass")
public class ChangePassSv extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String old = request.getParameter("old");
        String new1 = request.getParameter("new");
        String new2 = request.getParameter("new_conf");
        String usuario = request.getParameter("usuario");
        Map<String, String> respuesta = new LinkedHashMap<>();
        Gson gson = new Gson();
        String json = null;

        try {
            UsuarioDao udao = new UsuarioDao();
            if (old.equals(udao.getPass(usuario))) {
                if (new1.equals(new2)) {
                    udao.changePass(usuario, new2);
                    respuesta.put("Exito", "Se ha cambiado la contraseña de forma satisfactoria");
                } else {
                    respuesta.put("Error", "Las contraseñas no coinciden");
                }
            } else {
                respuesta.put("Error", "Contraseña equivocada");
            }
        } catch (Exception ex) {
            respuesta.put("Error", "Error desconocido " + ex.getMessage());
        } finally {
            json = gson.toJson(respuesta);
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
