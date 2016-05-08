/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fleet.dao;

import com.fleet.entidades.DateFormat;
import com.fleet.entidades.Montacargas;
import com.fleet.entidades.TipoInsumo;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author nanoj
 */
public class MontacargasDao {

    private final Connection conexion;

    public MontacargasDao() throws SQLException, ClassNotFoundException {
        this.conexion = ConexionBD.getConnectionFleet();
    }

    public List<Montacargas> getAllMain() throws SQLException {
        String query = "MONTACARGAS_TODOS";
        CallableStatement cs = conexion.prepareCall(query);
        ResultSet rs = cs.executeQuery();
        List<Montacargas> listM = new ArrayList<>();
        while (rs.next()) {
            String numero_serie = rs.getString("NUMERO_SERIE");
            String marca = rs.getString("MARCA");
            String modelo = rs.getString("MODELO");
            listM.add(new Montacargas(numero_serie, marca, modelo));
        }

        return listM;

    }

    public List<Montacargas> getAllByProyect(String proyecto) throws SQLException {

        String query = "EXEC MONTACARGAS_PROYECTO @codigo=?";
        CallableStatement cs = conexion.prepareCall(query);
        cs.setString(1, proyecto);
        ResultSet rs = cs.executeQuery();
        List<Montacargas> montacargas = new ArrayList<>();
        while (rs.next()) {
            String numero_serie = rs.getString("NUMERO_SERIE");
            String marca = rs.getString("MARCA");
            String modelo = rs.getString("MODELO");
            Montacargas m = new Montacargas(numero_serie, marca, modelo);
            montacargas.add(m);
        }

        return montacargas;
    }

    public void mueveMontacargas(String m, String p) throws SQLException {
        String query = "EXEC MUEVE_MONTACARGAS @MONTACARGAS=?,@PROYECTO=?";
        CallableStatement cs = conexion.prepareCall(query);
        cs.setString(1, m);
        cs.setString(2, p);
        cs.execute();
    }

    public void regGasto(TipoInsumo tipo, Float costo, String mt) throws SQLException {
        String query = "EXEC INSGAS @COSTO=?,@TIPO=?,@MONTACARGAS=?";
        CallableStatement cs = conexion.prepareCall(query);
        cs.setFloat(1, costo);
        cs.setString(2, tipo.getNombre());
        cs.setString(3, mt);
        cs.execute();

    }

    public void updMont(Montacargas montacargas) throws SQLException {
        String query = "EXEC DBO.UPDATE_MONTACARGAS @MONTACARGAS =? , @MARCA  =?, @MODELO  =?, @SERIE  =?, @ESTILO  =?, @AÑO  =?, @PLACA  =?, @CLASE  =?,"
                + " @VIN  =?, @NUMERO_MOTOR  =?, @UBICACION  =?, @OBSERVACION  =?, @NUM_POLIZA  =?, @TONELAJE  =?, @TRANSMISION  =?, "
                + "@TRACCION  =?, @COMBUSTIBLE  =?, @DEPRECIACION  =?, @SEGURO =?, @ALQUILER =?, @HORIMETRO =?";
        CallableStatement cs = conexion.prepareCall(query);
        cs.setString(1, montacargas.getNumero_serie());
        cs.setString(2, montacargas.getMarca());
        cs.setString(3, montacargas.getModelo());
        cs.setString(4, montacargas.getSerie());
        cs.setString(5, montacargas.getEstilo());
        cs.setString(6, montacargas.getAnno());
        cs.setString(7, montacargas.getPlaca());
        cs.setString(8, montacargas.getClase());
        cs.setString(9, montacargas.getVin());
        cs.setString(10, montacargas.getNumero_motor());
        cs.setString(11, montacargas.getUbicacion());
        cs.setString(12, montacargas.getObservacion());
        cs.setString(13, montacargas.getNum_poliza());
        cs.setFloat(14, montacargas.getTonelaje());
        cs.setString(15, montacargas.getTransmision());
        cs.setString(16, montacargas.getTraccion());
        cs.setString(17, montacargas.getCombustible());
        cs.setFloat(18, montacargas.getDepresiacion());
        cs.setFloat(19, montacargas.getSeguro());
        cs.setFloat(20, montacargas.getAlquiler());
        cs.setInt(21, montacargas.getHorimetro());
        cs.execute();

    }

    public void insert(Montacargas montacargas) throws SQLException {
        String query = "EXEC DBO.INSMON @NUMERO_SERIE =? , @MARCA  =?, @MODELO  =?, @SERIE  =?, @ESTILO  =?, @AÑO  =?, @PLACA  =?, @CLASE  =?,"
                + " @VIN  =?, @NUMERO_MOTOR  =?, @UBICACION  =?, @OBSERVACION  =?, @NUM_POLIZA  =?, @TONELAJE  =?, @TRANSMISION  =?, "
                + "@TRACCION  =?, @COMBUSTIBLE  =?, @DEPRECIACION  =?, @SEGURO =?, @ALQUILER =?, @HORIMETRO =?";
        CallableStatement cs = conexion.prepareCall(query);
        cs.setString(1, montacargas.getNumero_serie());
        cs.setString(2, montacargas.getMarca());
        cs.setString(3, montacargas.getModelo());
        cs.setString(4, montacargas.getSerie());
        cs.setString(5, montacargas.getEstilo());
        cs.setString(6, montacargas.getAnno());
        cs.setString(7, montacargas.getPlaca());
        cs.setString(8, montacargas.getClase());
        cs.setString(9, montacargas.getVin());
        cs.setString(10, montacargas.getNumero_motor());
        cs.setString(11, montacargas.getUbicacion());
        cs.setString(12, montacargas.getObservacion());
        cs.setString(13, montacargas.getNum_poliza());
        cs.setFloat(14, montacargas.getTonelaje());
        cs.setString(15, montacargas.getTransmision());
        cs.setString(16, montacargas.getTraccion());
        cs.setString(17, montacargas.getCombustible());
        cs.setFloat(18, montacargas.getDepresiacion());
        cs.setFloat(19, montacargas.getSeguro());
        cs.setFloat(20, montacargas.getAlquiler());
        cs.setInt(21, montacargas.getHorimetro());
        cs.execute();
    }

    public Object getBySerie(String numero_serie) throws SQLException {
        String query = "EXEC MONTACARGAS_ESPECIFICO @NUMERO_SERIE=?";
        CallableStatement cs = conexion.prepareCall(query);
        cs.setString(1, numero_serie);
        ResultSet rs = cs.executeQuery();
        rs.next();

        Montacargas m = new Montacargas();
        m.setNumero_serie(rs.getString("NUMERO_SERIE"));
        m.setMarca(rs.getString("MARCA"));
        m.setModelo(rs.getString("MODELO"));
        m.setSerie(rs.getString("SERIE"));
        m.setEstilo(rs.getString("ESTILO"));
        m.setAnno(rs.getString("AÑO"));
        m.setPlaca(rs.getString("PLACA"));
        m.setClase(rs.getString("CLASE"));
        m.setVin(rs.getString("VIN"));
        m.setNumero_motor(rs.getString("NUMERO_MOTOR"));
        m.setUbicacion(rs.getString("UBICACION"));
        m.setObservacion(rs.getString("OBSERVACION"));
        m.setNum_poliza(rs.getString("NUM_POLIZA"));
        m.setTonelaje(rs.getFloat("TONELAJE"));
        m.setTransmision(rs.getString("TRANSMISION"));
        m.setTraccion(rs.getString("TRACCION"));
        m.setCombustible(rs.getString("COMBUSTIBLE"));
        m.setDepresiacion(rs.getFloat("DEPRECIACION"));
        m.setSeguro(rs.getFloat("SEGURO"));
        m.setAlquiler(rs.getFloat("ALQUILER"));
        m.setHorimetro(rs.getInt("HORIMETRO"));

        return m;

    }

    public void actualizaEstado(String m, int p) throws SQLException {
        String query = "EXEC UPDATE_ESTADO_MON @MONTACARGAS=?,@ESTADO=?";
        CallableStatement cs = conexion.prepareCall(query);
        cs.setString(1, m);
        cs.setInt(2, p);
        cs.execute();
    }
    
    public List<Montacargas> getMantenimiento() throws SQLException {
        String query = "MONTACARGAS_MANTENIMIENTO";
        CallableStatement cs = conexion.prepareCall(query);
        ResultSet rs = cs.executeQuery();
        List<Montacargas> listM = new ArrayList<>();
        while (rs.next()) {
            String numero_serie = rs.getString("NUMERO_SERIE");
            String marca = rs.getString("MARCA");
            String modelo = rs.getString("MODELO");
            int horimetro = rs.getInt("HORIMETRO");
            int man_Actual = rs.getInt("MAN_ACTUAL");
            listM.add(new Montacargas(numero_serie, marca, modelo,horimetro,man_Actual));
        }
        return listM;
    }
    
    

}
