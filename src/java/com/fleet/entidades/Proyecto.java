package com.fleet.entidades;
/**
 *
 * @author AlvaroLopez
 */
public class Proyecto {

    String nombre;
    String codigo;
    String contrato;

    public Proyecto(String nombre, String codigo) {
        this.nombre = nombre;
        this.codigo = codigo;
    }

    public Proyecto(String nombre, String codigo, String contrato) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.contrato = contrato;
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

    public String getContrato() {
        return contrato;
    }

    public void setContrato(String contrato) {
        this.contrato = contrato;
    }
    
    
}
