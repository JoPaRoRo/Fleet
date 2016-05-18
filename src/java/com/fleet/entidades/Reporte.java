

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
    
    public Montacargas montacarga;
    public Contrato contrato;
    public Proyecto proyecto;
    public String modelo;

    
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

    public Montacargas getMontacarga() {
        return montacarga;
    }

    public void setMontacarga(Montacargas montacarga) {
        this.montacarga = montacarga;
    }

    public Contrato getContrato() {
        return contrato;
    }

    public void setContrato(Contrato contrato) {
        this.contrato = contrato;
    }

    public Proyecto getProyecto() {
        return proyecto;
    }

    public void setProyecto(Proyecto proyecto) {
        this.proyecto = proyecto;
    }




    
    
    
}