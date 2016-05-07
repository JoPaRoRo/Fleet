/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fleet.entidades;

import java.util.ArrayList;

/**
 *
 * @author nanoj
 */
public class GastoE {

    public GastoE(ArrayList<Montacargas> equipos,TipoInsumo tipo, Float costo ) {
        this.equipos = equipos;
        this.tipo = tipo;
        this.costo = costo;
        
    }

    public GastoE() {
    }

    public TipoInsumo getTipo() {
        return tipo;
    }

    public Float getCosto() {
        return costo;
    }

    public ArrayList<Montacargas> getListaMontacargas() {
        return equipos;
    }

    public void setEquipos(ArrayList<Montacargas> equipos) {
        this.equipos = equipos;
    }

    public void setTipo(TipoInsumo tipo) {
        this.tipo = tipo;
    }

    public void setCosto(Float costo) {
        this.costo = costo;
    }
    
    
    private ArrayList<Montacargas> equipos;
    private TipoInsumo tipo;
    private Float costo;
    
}
