/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fleet.entidades;

/**
 *
 * @author nanoj
 */
public class Alerta {

    public Alerta(Integer codigo, String tipo, String descripcion, String fecha, String montacargas) {
        this.consecutivo = codigo;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.montacargas = montacargas;
    }

    public Alerta() {
    }

    public Alerta(Integer codigo, String montacargas, Integer horas) {
        this.consecutivo = codigo;
        this.montacargas = montacargas;
        this.horas = horas;
    }

    public Integer getHoras() {
        return horas;
    }

    public void setHoras(Integer horas) {
        this.horas = horas;
    }
    
    public Integer getCodigo() {
        return consecutivo;
    }

    public String getTipo() {
        return tipo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public String getFecha() {
        return fecha;
    }

    public String getMontacargas() {
        return montacargas;
    }
    
    
    private Integer consecutivo;
    private String tipo;
    private String descripcion;
    private String fecha;
    private String montacargas;
    private Integer horas;
    
}

