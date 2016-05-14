

package com.fleet.entidades;

import java.util.ArrayList;

/**
 *
 * @author AlvaroLopez
 */
public class Reporte {

  
    public  ArrayList<Montacargas> montacargas;
    public  ArrayList<Contrato> contratos;
    public  ArrayList<Proyecto> proyectos;
    public ArrayList<String> modelos;
    
    public String codigoMontacargas;
    public String codigoContrato;
    public String codigoProyecto;
    public String codigoModelo;
    
    public int tipo;
    public String FechaInicial;
    public String FechaFinal;
    
    public Reporte( int tipo, String FechaInicial, String FechaFinal) {
        this.tipo = tipo;
        this.FechaInicial = FechaInicial;
        this.FechaFinal = FechaFinal;
    }

    public ArrayList<String> getModelos() {
        return modelos;
    }

    public void setModelos(ArrayList<String> modelos) {
        this.modelos = modelos;
    }

    
    public ArrayList<Montacargas> getMontacargas() {
        return montacargas;
    }

    public void setMontacargas(ArrayList<Montacargas> montacargas) {
        this.montacargas = montacargas;
    }

    public ArrayList<Contrato> getContratos() {
        return contratos;
    }

    public void setContratos(ArrayList<Contrato> contratos) {
        this.contratos = contratos;
    }

    public ArrayList<Proyecto> getProyectos() {
        return proyectos;
    }

    public void setProyectos(ArrayList<Proyecto> proyectos) {
        this.proyectos = proyectos;
    }

    public int getTipo() {
        return tipo;
    }

    public void setTipo(int tipo) {
        this.tipo = tipo;
    }

    public String getFechaInicial() {
        return FechaInicial;
    }

    public void setFechaInicial(String FechaInicial) {
        this.FechaInicial = FechaInicial;
    }

    public String getFechaFinal() {
        return FechaFinal;
    }

    public void setFechaFinal(String FechaFinal) {
        this.FechaFinal = FechaFinal;
    }

    public String getCodigoMontacargas() {
        return codigoMontacargas;
    }

    public void setCodigoMontacargas(String codigoMontacargas) {
        this.codigoMontacargas = codigoMontacargas;
    }

    public String getCodigoContrato() {
        return codigoContrato;
    }

    public void setCodigoContrato(String codigoContrato) {
        this.codigoContrato = codigoContrato;
    }

    public String getCodigoProyecto() {
        return codigoProyecto;
    }

    public void setCodigoProyecto(String codigoProyecto) {
        this.codigoProyecto = codigoProyecto;
    }

    public String getCodigoModelo() {
        return codigoModelo;
    }

    public void setCodigoModelo(String codigoModelo) {
        this.codigoModelo = codigoModelo;
    }
 
    
    
    
}