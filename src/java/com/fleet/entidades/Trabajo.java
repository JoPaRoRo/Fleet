package com.fleet.entidades;

import java.sql.Date;

/**
 *
 * @author AlvaroLopez
 */
public class Trabajo {

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public double getHoras() {
        return horas;
    }

    public void setHoras(double horas) {
        this.horas = horas;
    }

    public Date getFecha_sistema() {
        return fecha_sistema;
    }

    public void setFecha_sistema(Date fecha_sistema) {
        this.fecha_sistema = fecha_sistema;
    }

    public Mantenimiento getMantenimiento() {
        return mantenimiento;
    }

    public void setMantenimiento(Mantenimiento mantenimiento) {
        this.mantenimiento = mantenimiento;
    }

    public String getMecanico() {
        return mecanico;
    }

    public void setMecanico(String mecanico) {
        this.mecanico = mecanico;
    }

    
    Integer id;
    Double precio;
    Double horas;
    Date fecha_sistema;
    Mantenimiento mantenimiento;
    String mecanico;

    
}
