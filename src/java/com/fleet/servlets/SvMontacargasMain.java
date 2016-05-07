package com.fleet.servlets;

import com.fleet.dao.MontacargasDao;
import com.google.gson.Gson;
import java.io.IOException;
import java.sql.SQLException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author AlvaroLopez
 */
@WebServlet("/consultaMont")
public class SvMontacargasMain extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        try {
            MontacargasDao mdao = new MontacargasDao();
            Gson gson = new Gson();
            String json = gson.toJson(mdao.getAllMain());
            System.out.println(json);
            response.getWriter().write(json);
        } catch (SQLException | ClassNotFoundException ex) {
            response.getWriter().write("Error " + ex);
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
