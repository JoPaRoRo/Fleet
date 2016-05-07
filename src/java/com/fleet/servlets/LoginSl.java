package com.fleet.servlets;

import com.fleet.dao.ConexionBD;
import com.fleet.dao.LoginDao;
import com.fleet.entidades.Usuario;
import com.fleet.entidades.WS;
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
import javax.servlet.http.HttpSession;

@WebServlet("/login")
public class LoginSl extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String usuario = request.getParameter("usuario");
        String pass = request.getParameter("pass");
        Map<String, String> respuesta = new LinkedHashMap<>();
        Gson gson = new Gson();
        String json = null;
        try {
            Usuario us = new Usuario(usuario, pass);
            LoginDao lgdao = new LoginDao();
            lgdao.login(us.createDBUser(), us.getPass());
            HttpSession sesion = request.getSession();
            sesion = request.getSession(true);
            Usuario usu = lgdao.buscaUsuario(us.getId_usuario());
            sesion.setAttribute("usuario", us.getId_usuario());
            sesion.setAttribute("nombre", us.getNombre());
            sesion.setAttribute("rol", us.getRol());
            sesion.setAttribute("Usuario", us);
            json = gson.toJson(usu);
        } catch (SQLException | ClassNotFoundException ex) {
            ConexionBD.destroy();
            respuesta.put("Error", "Usuario o contraseña incorrectas"+ex);
            json = gson.toJson(respuesta);
            ConexionBD.destroy();
            

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
