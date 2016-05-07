package com.fleet.entidades;

import java.util.ArrayList;

/**
 *
 * @author AlvaroLopez
 */
public class Montacargas {

    public Montacargas(String numero_serie, String marca, String modelo, String serie, String estilo, String anno, String placa, String clase, String vin, String numero_motor, String ubicacion, String observacion, String num_poliza, Float tonelaje, Double horimetroActual, String transmision, String traccion, String combustible, ArrayList<Mantenimiento> mantenimientos, ArrayList<Proyecto> proyectos,int horimetro) {
        this.numero_serie = numero_serie;
        this.marca = marca;
        this.modelo = modelo;
        this.serie = serie;
        this.estilo = estilo;
        this.anno = anno;
        this.placa = placa;
        this.clase = clase;
        this.vin = vin;
        this.numero_motor = numero_motor;
        this.ubicacion = ubicacion;
        this.observacion = observacion;
        this.num_poliza = num_poliza;
        this.tonelaje = tonelaje;
        this.horimetro = horimetro;
        this.transmision = transmision;
        this.traccion = traccion;
        this.combustible = combustible;
        this.mantenimientos = mantenimientos;
        this.proyectos = proyectos;
    }

    public Montacargas(String numero_serie, String modelo, String serie, String estilo, String anno, String placa, String clase, String vin, String numero_motor, String ubicacion, String observacion, String num_poliza, Float tonelaje, String transmision, String traccion, String combustible, Float depresiacion, Float seguro, Float alquiler, int horimetro) {
        this.numero_serie = numero_serie;
        this.modelo = modelo;
        this.serie = serie;
        this.estilo = estilo;
        this.anno = anno;
        this.placa = placa;
        this.clase = clase;
        this.vin = vin;
        this.numero_motor = numero_motor;
        this.ubicacion = ubicacion;
        this.observacion = observacion;
        this.num_poliza = num_poliza;
        this.tonelaje = tonelaje;
        this.transmision = transmision;
        this.traccion = traccion;
        this.combustible = combustible;
        this.depresiacion = depresiacion;
        this.seguro = seguro;
        this.alquiler = alquiler;
        this.horimetro = horimetro;
    }

    
    
    public Montacargas(String numero_serie, String marca, String modelo) {
        this.numero_serie = numero_serie;
        this.marca = marca;
        this.modelo = modelo;
    }

    public Montacargas(String numero_serie, String marca, String modelo, int horimetro) {
        this.numero_serie = numero_serie;
        this.marca = marca;
        this.modelo = modelo;
        this.horimetro = horimetro;
    }
    
    

    public Montacargas() {}

    public String getNumero_serie() {
        return numero_serie;
    }

    public void setNumero_serie(String numero_serie) {
        this.numero_serie = numero_serie;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getSerie() {
        return serie;
    }

    public void setSerie(String serie) {
        this.serie = serie;
    }

    public String getEstilo() {
        return estilo;
    }

    public void setEstilo(String estilo) {
        this.estilo = estilo;
    }

    public String getAnno() {
        return anno;
    }

    public void setAnno(String anno) {
        this.anno = anno;
    }

    public String getPlaca() {
        return placa;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }

    public String getClase() {
        return clase;
    }

    public void setClase(String clase) {
        this.clase = clase;
    }

    public String getVin() {
        return vin;
    }

    public void setVin(String vin) {
        this.vin = vin;
    }

    public String getNumero_motor() {
        return numero_motor;
    }

    public void setNumero_motor(String numero_motor) {
        this.numero_motor = numero_motor;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }

    public String getObservacion() {
        return observacion;
    }

    public void setObservacion(String observacion) {
        this.observacion = observacion;
    }

    public String getNum_poliza() {
        return num_poliza;
    }

    public void setNum_poliza(String num_poliza) {
        this.num_poliza = num_poliza;
    }

    public Float getTonelaje() {
        return tonelaje;
    }

    public void setTonelaje(Float tonelaje) {
        this.tonelaje = tonelaje;
    }

    public String getTransmision() {
        return transmision;
    }

    public void setTransmision(String transmision) {
        this.transmision = transmision;
    }

    public String getTraccion() {
        return traccion;
    }

    public void setTraccion(String traccion) {
        this.traccion = traccion;
    }

    public String getCombustible() {
        return combustible;
    }

    public void setCombustible(String combustible) {
        this.combustible = combustible;
    }

    public Float getDepresiacion() {
        return depresiacion;
    }

    public void setDepresiacion(Float depresiacion) {
        this.depresiacion = depresiacion;
    }

    public Float getSeguro() {
        return seguro;
    }

    public void setSeguro(Float seguro) {
        this.seguro = seguro;
    }

    public Float getAlquiler() {
        return alquiler;
    }

    public void setAlquiler(Float alquiler) {
        this.alquiler = alquiler;
    }

    public int getHorimetro() {
        return horimetro;
    }

    public void setHorimetro(int horimetro) {
        this.horimetro = horimetro;
    }

    public ArrayList<Mantenimiento> getMantenimientos() {
        return mantenimientos;
    }

    public void setMantenimientos(ArrayList<Mantenimiento> mantenimientos) {
        this.mantenimientos = mantenimientos;
    }

    public ArrayList<Proyecto> getProyectos() {
        return proyectos;
    }

    public void setProyectos(ArrayList<Proyecto> proyectos) {
        this.proyectos = proyectos;
    }

    String numero_serie;
    String marca;
    String modelo;
    String serie;
    String estilo;
    String anno;
    String placa;
    String clase;
    String vin;
    String numero_motor;
    String ubicacion;
    String observacion;
    String num_poliza;
    Float tonelaje;
    String transmision;
    String traccion;
    String combustible;
    Float depresiacion;
    Float seguro;
    Float alquiler;
    int horimetro;
    ArrayList<Mantenimiento> mantenimientos;
    ArrayList<Proyecto> proyectos;

}
