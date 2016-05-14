

package com.fleet.entidades;
/**
 *
 * @author AlvaroLopez
 */
public class ReporteRespuesta {

    public String id;
    public String nombre;
    public float costo;
    public float rentabilidad;

    public ReporteRespuesta(String id, float costo, float rentabilidad) {
        this.id = id;
        this.costo = costo;
        this.rentabilidad = rentabilidad;
    }

    public ReporteRespuesta(String id, String nombre, float costo, float rentabilidad) {
        this.id = id;
        this.nombre = nombre;
        this.costo = costo;
        this.rentabilidad = rentabilidad;
    }
    
    

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public float getCosto() {
        return costo;
    }

    public void setCosto(float costo) {
        this.costo = costo;
    }

    public float getRentabilidad() {
        return rentabilidad;
    }

    public void setRentabilidad(float rentabilidad) {
        this.rentabilidad = rentabilidad;
    }   
}
