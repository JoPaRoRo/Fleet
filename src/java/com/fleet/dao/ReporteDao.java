package com.fleet.dao;

import com.fleet.entidades.Contrato;
import com.fleet.entidades.DateFormat;
import com.fleet.entidades.Detalle;
import com.fleet.entidades.Montacargas;
import com.fleet.entidades.Proyecto;
import com.fleet.entidades.Reporte;
import com.fleet.entidades.ReporteRespuesta;
import com.fleet.entidades.WS;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

/**
 *
 * @author AlvaroLopez
 */
public class ReporteDao {

    private final Connection conexion;

    public ReporteDao() throws SQLException, ClassNotFoundException {
        this.conexion = ConexionBD.getConnectionFleet();
    }

    public ArrayList<ReporteRespuesta> generarReporteMontacargas(Reporte reporte) throws SQLException {

        WS wss = WS.obtenerInstancia();
        float dolar = wss.inicializar().getVenta();

        ArrayList<ReporteRespuesta> reportes = new ArrayList<>();
        String query;
        CallableStatement cs;
        ResultSet rs;
        DateFormat dt = new DateFormat();

        for (Montacargas mt : reporte.getMontacargas()) {
            query = "REPORT_GASTOS_MON @NUMERO_SERIE =?,@FECHA_INICIO=?,@FECHA_FINAL=?";
            cs = conexion.prepareCall(query);
            cs.setString(1, mt.getNumero_serie());
            cs.setString(2, dt.format2(reporte.getFechaInicial()));
            cs.setString(3, dt.format2(reporte.getFechaFinal()));
            rs = cs.executeQuery();
            rs.next();
            float costo = rs.getFloat(1);

            query = "REPORT_RENTABILIDAD_MON @NUMERO_SERIE =?,@DOLAR =?,@FECHA_INICIO=?,@FECHA_FINAL=?";
            cs = conexion.prepareCall(query);
            cs.setString(1, mt.getNumero_serie());
            cs.setFloat(2, dolar);
            cs.setString(3, dt.format2(reporte.getFechaInicial()));
            cs.setString(4,  dt.format2(reporte.getFechaFinal()));
            rs = cs.executeQuery();
            rs.next();
            float rentabilidad = rs.getFloat(1);

            reportes.add(new ReporteRespuesta(mt.getNumero_serie(), costo, rentabilidad));
            
        }
        return reportes;
    }

    public ArrayList<ReporteRespuesta> generarReporteContrato(Reporte reporte) throws SQLException {

        WS wss = WS.obtenerInstancia();
        float dolar = wss.inicializar().getVenta();


        ArrayList<ReporteRespuesta> reportes = new ArrayList<>();
        String query;
        CallableStatement cs;
        ResultSet rs;
        DateFormat dt = new DateFormat();

        for (Contrato ct : reporte.getContratos()) {
            query = "REPORT_GASTOS_CONT @CONTRATO =?,@FECHA_INICIO=?,@FECHA_FINAL=?";
            cs = conexion.prepareCall(query);
            cs.setString(1, ct.getCodigo());
            cs.setString(2, dt.format2(reporte.FechaInicial));
            cs.setString(3, dt.format2(reporte.FechaFinal));
            rs = cs.executeQuery();
            rs.next();
            float costo = rs.getFloat(1);

            query = "REPORT_RENTABILIDAD_CONT @NUMERO_SERIE =?,@DOLAR =?,@FECHA_INICIO=?,@FECHA_FINAL=?";
            cs = conexion.prepareCall(query);
            cs.setString(1, ct.getCodigo());
            cs.setFloat(2, dolar);
            cs.setString(3, dt.format2(reporte.FechaInicial));
            cs.setString(4, dt.format2(reporte.FechaFinal));
            rs = cs.executeQuery();
            rs.next();
            float rentabilidad = rs.getFloat(1);

            reportes.add(new ReporteRespuesta(ct.getCodigo(), ct.getNombre(), costo, rentabilidad));
            
        }
         return reportes;
    }

    public ArrayList<ReporteRespuesta> generarReporteProyecto(Reporte reporte) throws SQLException {
        WS wss = WS.obtenerInstancia();
        float dolar = wss.inicializar().getVenta();


        ArrayList<ReporteRespuesta> reportes = new ArrayList<>();
        String query;
        CallableStatement cs;
        ResultSet rs;
        DateFormat dt = new DateFormat();

        for (Proyecto pro : reporte.getProyectos()) {
            query = "REPORT_GASTOS_PROY @PROYECTO =?, @FECHA_INICIO=?, @FECHA_FINAL=?";
            cs = conexion.prepareCall(query);
            cs.setString(1, pro.getCodigo());
            cs.setString(2, dt.format2(reporte.FechaInicial));
            cs.setString(3, dt.format2(reporte.FechaFinal));
            rs = cs.executeQuery();
            rs.next();
            float costo = rs.getFloat(1);

            query = "REPORT_RENTABILIDAD_PROY @PROYECTO =?,@ALQ_DOLAR =?,@FECHA_INICIO=?,@FECHA_FINAL=?";
            cs = conexion.prepareCall(query);
            cs.setString(1, pro.getCodigo());
            cs.setFloat(2, dolar);
            cs.setString(3, dt.format2(reporte.FechaInicial));
            cs.setString(4, dt.format2(reporte.FechaFinal));
            rs = cs.executeQuery();
            rs.next();
            float rentabilidad = rs.getFloat(1);

            reportes.add(new ReporteRespuesta(pro.getCodigo(), pro.getNombre(), costo, rentabilidad));
           
        }
        return reportes;
    }

    public ArrayList<ReporteRespuesta> generarReporteModelo(Reporte reporte) throws SQLException {
        WS wss = WS.obtenerInstancia();
        float dolar = wss.inicializar().getVenta();


        ArrayList<ReporteRespuesta> reportes = new ArrayList<>();
        String query;
        CallableStatement cs;
        ResultSet rs;
        DateFormat dt = new DateFormat();

        for (String mod : reporte.getModelos()) {
            query = "REPORT_GASTOS_MODEL @MODELO =?, @FECHA_INICIO=?, @FECHA_FINAL=?";
            cs = conexion.prepareCall(query);
            cs.setString(1, mod);
            cs.setString(2, dt.format2(reporte.FechaInicial));
            cs.setString(3, dt.format2(reporte.FechaFinal));
            rs = cs.executeQuery();
            rs.next();
            float costo = rs.getFloat(1);

            query = "REPORT_RENTABILIDAD_MODEL @MODELO =?,@ALQ_DOLAR =?,@FECHA_INICIO=?,@FECHA_FINAL=?";
            cs = conexion.prepareCall(query);
            cs.setString(1, mod);
            cs.setFloat(2, dolar);
            cs.setString(3, dt.format2(reporte.FechaInicial));
            cs.setString(4, dt.format2(reporte.FechaFinal));
            rs = cs.executeQuery();
            rs.next();
            float rentabilidad = rs.getFloat(1);

            reportes.add(new ReporteRespuesta(mod, costo, rentabilidad));
            
        }
        return reportes;
    }

    public ArrayList<Detalle> generarDetalleMontacargas(Reporte reporte) throws SQLException {

        ArrayList<Detalle> lineasBD = new ArrayList<>();
        ArrayList<String> insumos = new ArrayList<>();
        ArrayList<Detalle> reporteDetallado = new ArrayList<>();
        DateFormat dt = new DateFormat();
        
        String query = "EXEC REPORT_INSUMOS_RANGOMONT @MONTACARGAS=?, FECHA_INICIO=?, FECHA_FINAL=? ";
        CallableStatement cs = conexion.prepareCall(query);
        cs.setString(1, reporte.getCodigoMontacargas());
        cs.setString(2, dt.format2(reporte.getFechaInicial()));
        cs.setString(3,dt.format2(reporte.getFechaFinal()));
        ResultSet rs = cs.executeQuery();
        while (rs.next()) {
            String mt = rs.getString(1);
            String insumo = rs.getString(2);
            float monto = rs.getFloat(3);
            lineasBD.add(new Detalle(mt, insumo, monto));
        }

        lineasBD.stream().filter((det) -> (!insumos.contains(det.getInsumo()))).forEach((det) -> {
            insumos.add(det.getInsumo());
        });

        insumos.stream().forEach((ins) -> {
            float monto=0;
            monto = lineasBD.stream().filter((det) -> (det.getInsumo().equals(ins))).map((det) -> det.getMonto()).reduce(monto, (accumulator, _item) -> accumulator + _item);
            reporteDetallado.add(new Detalle(ins,monto));
        });
         return reporteDetallado;
    }

    public  ArrayList<Detalle> generarDetalleContrato(Reporte reporte) throws SQLException {
        ArrayList<Detalle> reporteDetallado = new ArrayList<>();
        
        String query = "EXEC REPORT_INSUMOS_RANGOCONT @CONT=?, FECHA_INICIO=?, FECHA_FINAL=? ";
        CallableStatement cs = conexion.prepareCall(query);
        cs.setString(1, reporte.getCodigoContrato());
        cs.setString(2, reporte.getFechaInicial());
        cs.setString(3, reporte.getFechaFinal());
        ResultSet rs = cs.executeQuery();
        while (rs.next()) {
            String mt = rs.getString(1);
            String insumo = rs.getString(2);
            float monto = rs.getFloat(3);
            reporteDetallado.add(new Detalle(mt, insumo, monto));
        }
        
        return reporteDetallado;
    }

    public ArrayList<Detalle> generarDetalleProyecto(Reporte reporte) throws SQLException {
       ArrayList<Detalle> lineasBD = new ArrayList<>();
        ArrayList<String> insumos = new ArrayList<>();
        ArrayList<Detalle> reporteDetallado = new ArrayList<>();
        DateFormat dt = new DateFormat();
        
        String query = "EXEC REPORT_INSUMOS_RANGOMONT @MONTACARGAS=?, FECHA_INICIO=?, FECHA_FINAL=? ";
        CallableStatement cs = conexion.prepareCall(query);
        cs.setString(1, reporte.getCodigoProyecto());
        cs.setString(2, dt.format2(reporte.getFechaInicial()));
        cs.setString(3,dt.format2(reporte.getFechaFinal()));
        ResultSet rs = cs.executeQuery();
        while (rs.next()) {
            String mt = rs.getString(1);
            String insumo = rs.getString(2);
            float monto = rs.getFloat(3);
            lineasBD.add(new Detalle(mt, insumo, monto));
        }

        lineasBD.stream().filter((det) -> (!insumos.contains(det.getInsumo()))).forEach((det) -> {
            insumos.add(det.getInsumo());
        });

        insumos.stream().forEach((ins) -> {
            float monto=0;
            monto = lineasBD.stream().filter((det) -> (det.getInsumo().equals(ins))).map((det) -> det.getMonto()).reduce(monto, (accumulator, _item) -> accumulator + _item);
            reporteDetallado.add(new Detalle(ins,monto));
        });
         return reporteDetallado;
    }

    public String generarDetalleModelo(Reporte reporte) {
        return null;
    }

}
