/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fleet.entidades;

/**
 *
 * @author Alvaro Lopez
 */
public class Insumo {
 
    String num;
    String ID_interno_de_documento;
    String Fecha_de_contabilizacion;
    String Numero_Orden_Trabajo;
    String Nombre_de_Proyecto;
    String Numero_de_articulo;
    String Descripcion_articulo;
    float Cantidad;
    float Precio;
    float Total_lineas;
    String Numero_de_serie;

    public Insumo(String num, String ID_interno_de_documento, String Fecha_de_contabilizacion, String Numero_Orden_Trabajo, String Nombre_de_Proyecto, String Numero_de_articulo, String Descripcion_articulo, String Cantidad, String Precio, String Total_lineas, String Numero_de_serie) {
        this.num = num;
        this.ID_interno_de_documento = ID_interno_de_documento;
        this.Fecha_de_contabilizacion = Fecha_de_contabilizacion;
        this.Numero_Orden_Trabajo = Numero_Orden_Trabajo;
        this.Nombre_de_Proyecto = Nombre_de_Proyecto;
        this.Numero_de_articulo = Numero_de_articulo;
        this.Descripcion_articulo = Descripcion_articulo;
        this.Cantidad = Float.valueOf(Cantidad.trim()).floatValue();
        this.Precio = Float.valueOf(Precio.trim()).floatValue();
        this.Total_lineas = Float.valueOf(Total_lineas.trim()).floatValue();
        this.Numero_de_serie = Numero_de_serie;
    }

    public Insumo(String num, String Descripcion_articulo, float Cantidad, float Precio, String Numero_de_serie) {
        this.num = num;
        this.Descripcion_articulo = Descripcion_articulo;
        this.Cantidad = Cantidad;
        this.Precio = Precio;
        this.Numero_de_serie = Numero_de_serie;
    }
    
    

    public String getNum() {
        return num;
    }

    public void setNum(String num) {
        this.num = num;
    }

    public String getID_interno_de_documento() {
        return ID_interno_de_documento;
    }

    public void setID_interno_de_documento(String ID_interno_de_documento) {
        this.ID_interno_de_documento = ID_interno_de_documento;
    }

    public String getFecha_de_contabilizacion() {
        return Fecha_de_contabilizacion;
    }

    public void setFecha_de_contabilizacion(String Fecha_de_contabilizacion) {
        this.Fecha_de_contabilizacion = Fecha_de_contabilizacion;
    }

    public String getNumero_Orden_Trabajo() {
        return Numero_Orden_Trabajo;
    }

    public void setNumero_Orden_Trabajo(String Numero_Orden_Trabajo) {
        this.Numero_Orden_Trabajo = Numero_Orden_Trabajo;
    }

    public String getNombre_de_Proyecto() {
        return Nombre_de_Proyecto;
    }

    public void setNombre_de_Proyecto(String Nombre_de_Proyecto) {
        this.Nombre_de_Proyecto = Nombre_de_Proyecto;
    }

    public String getNumero_de_articulo() {
        return Numero_de_articulo;
    }

    public void setNumero_de_articulo(String Numero_de_articulo) {
        this.Numero_de_articulo = Numero_de_articulo;
    }

    public String getDescripcion_articulo() {
        return Descripcion_articulo;
    }

    public void setDescripcion_articulo(String Descripcion_articulo) {
        this.Descripcion_articulo = Descripcion_articulo;
    }

    public float getCantidad() {
        return Cantidad;
    }

    public void setCantidad(String Cantidad) {
        this.Cantidad = Float.valueOf(Cantidad.trim()).floatValue();
    }

    public float getPrecio() {
        return Precio;
    }

    public void setPrecio(String Precio) {
        this.Precio = Float.valueOf(Precio.trim()).floatValue();
    }

    public float getTotal_lineas() {
        return Total_lineas;
    }

    public void setTotal_lineas(String Total_lineas) {
        this.Total_lineas = Float.valueOf(Total_lineas.trim()).floatValue();
    }

    public String getNumero_de_serie() {
        return Numero_de_serie;
    }

    public void setNumero_de_serie(String Numero_de_serie) {
        this.Numero_de_serie = Numero_de_serie;
    }

   
}

