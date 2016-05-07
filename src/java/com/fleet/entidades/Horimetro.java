package com.fleet.entidades;
import java.sql.Date;

/**
 *
 * @author AlvaroLopez
 */
public class Horimetro {

    public int getConsecutivo() {
        return consecutivo;
    }

    public void setConsecutivo(int consecutivo) {
        this.consecutivo = consecutivo;
    }

    public int getEstado() {
        return estado;
    }

    public void setEstado(int estado) {
        this.estado = estado;
    }

    public Date getFecha_ingreso() {
        return fecha_ingreso;
    }

    public void setFecha_ingreso(Date fecha_ingreso) {
        this.fecha_ingreso = fecha_ingreso;
    }

    public Date getFecha_Sistema() {
        return fecha_Sistema;
    }

    public void setFecha_Sistema(Date fecha_Sistema) {
        this.fecha_Sistema = fecha_Sistema;
    }

    public Montacargas getMontacargas() {
        return montacargas;
    }

    public void setMontacargas(Montacargas montacargas) {
        this.montacargas = montacargas;
    }
     
 
int consecutivo;
int estado;
Date fecha_ingreso;
Date fecha_Sistema;
Montacargas montacargas;
}
