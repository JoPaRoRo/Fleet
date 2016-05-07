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
public class TipoInsumo {

    public TipoInsumo() {
    }

    public TipoInsumo(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }
    
    private String nombre;
}
