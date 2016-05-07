/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fleet.entidades;

import cr.fi.bccr.sdde.ws.WsIndicadoresEconomicos;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 *
 * @author Estefanía
 */
public class WS {

    public static WS obtenerInstancia() {
        if (instancia == null) {
            instancia = new WS();
        }
        return instancia;
    }

    public tipoCambio inicializar() {
        Date ahora = new Date();
        SimpleDateFormat formateador = new SimpleDateFormat("dd/MM/yyyy");
        String fech = formateador.format(ahora);
        datos = new tipoCambio(toXML.StringToXml(ws.getWsIndicadoresEconomicosSoap12().obtenerIndicadoresEconomicosXML("317", fech, fech, "Estefanía", "N")),
                toXML.StringToXml(ws.getWsIndicadoresEconomicosSoap12().obtenerIndicadoresEconomicosXML("318", fech, fech, "Estefanía", "N"))); // del XML se obtiene un document para enviarlo al contenedor
        return datos;

    }

    WsIndicadoresEconomicos ws = new WsIndicadoresEconomicos();
    private static WS instancia = null;
    private tipoCambio datos = null;
}
