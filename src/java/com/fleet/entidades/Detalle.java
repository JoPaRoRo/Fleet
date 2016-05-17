package com.fleet.entidades;

/**
 *
 * @author AlvaroLopez
 */
public class Detalle {

    String insumo;
    float monto;
    String montacargas;

    public Detalle(String insumo, float monto) {
        this.insumo = insumo;
        this.monto = monto;
    }

    public Detalle(String montacargas, String insumo, float monto) {
        this.insumo = insumo;
        this.monto = monto;
        this.montacargas = montacargas;
    }

 

    public String getInsumo() {
        return insumo;
    }

    public void setInsumo(String insumo) {
        this.insumo = insumo;
    }

    public float getMonto() {
        return monto;
    }

    public void setMonto(float monto) {
        this.monto = monto;
    }

    public String getMontacargas() {
        return montacargas;
    }

    public void setMontacargas(String montacargas) {
        this.montacargas = montacargas;
    }

}
