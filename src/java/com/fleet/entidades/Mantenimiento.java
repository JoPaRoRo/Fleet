package com.fleet.entidades;

import java.sql.Date;
import java.util.List;

/**
 *
 * @author AlvaroLopez
 */
public class Mantenimiento {

    public Mantenimiento(int id, String fecha_mantenimiento, String tipo, int estado, String Montacargas) {
        this.id = id;
        this.fecha_mantenimiento = fecha_mantenimiento;
        this.tipo = tipo;
        this.estado = estado;
        this.Montacargas = Montacargas;
    }
    
        public Mantenimiento(int id, String fecha_mantenimiento, String tipo, String Montacargas) {
        this.id = id;
        this.fecha_mantenimiento = fecha_mantenimiento;
        this.tipo = tipo;
        this.Montacargas = Montacargas;
    }
    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFecha_mantenimiento() {
        return fecha_mantenimiento;
    }

    public void setFecha_mantenimiento(String fecha_mantenimiento) {
        this.fecha_mantenimiento = fecha_mantenimiento;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public int getEstado() {
        return estado;
    }

    public void setEstado(int estado) {
        this.estado = estado;
    }

    public String getMontacargas() {
        return Montacargas;
    }

    public void setMontacargas(String Montacargas) {
        this.Montacargas = Montacargas;
    }

    public List<Insumo> getInsumos() {
        return insumos;
    }

    public void setInsumos(List<Insumo> insumos) {
        this.insumos = insumos;
    }

    
    int id;
    String fecha_mantenimiento;
    String tipo;
    int estado;
    String Montacargas; 
    List<Insumo> insumos;
}
