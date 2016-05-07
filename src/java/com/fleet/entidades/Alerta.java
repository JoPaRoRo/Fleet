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
        this.codigo = codigo;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.montacargas = montacargas;
    }

    public Alerta() {
    }

    public Integer getCodigo() {
        return codigo;
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
    
    
    private Integer codigo;
    private String tipo;
    private String descripcion;
    private String fecha;
    private String montacargas;
    
}

