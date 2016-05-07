package com.fleet.entidades;

import java.sql.Date;
import java.util.ArrayList;

/**
 *
 * @author AlvaroLopez
 */
public class Contrato {

    public Contrato(String nombre, String codigo, Date fecha_inicio, Date fecha_final) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.fecha_inicio = fecha_inicio;
        this.fecha_final = fecha_final;
    }
    
     public Contrato(String nombre, String codigo) {
        this.nombre = nombre;
        this.codigo = codigo;
    }

    
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public Date getFecha_inicio() {
        return fecha_inicio;
    }

    public void setFecha_inicio(Date fecha_inicio) {
        this.fecha_inicio = fecha_inicio;
    }

    public Date getFecha_final() {
        return fecha_final;
    }

    public void setFecha_final(Date fecha_final) {
        this.fecha_final = fecha_final;
    }

    public ArrayList<Proyecto> getListaProyectos() {
        return listaProyectos;
    }

    public void setListaProyectos(ArrayList<Proyecto> listaProyectos) {
        this.listaProyectos = listaProyectos;
    }
    
    
    
    String nombre;
    String codigo;
    Date fecha_inicio;
    Date fecha_final;
    ArrayList<Proyecto> listaProyectos;
}
