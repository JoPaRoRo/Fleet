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
public class Usuario {

    public Usuario(String id_usuario, String pass, String nombre, String rol) {
        this.id_usuario = id_usuario;
        this.pass = pass;
        this.nombre = nombre;
        this.rol = rol;
    }

    public Usuario(String id_usuario, String nombre, String rol) {
        this.id_usuario = id_usuario;
        this.nombre = nombre;
        this.rol = rol;
    }
    
    public Usuario(String id_usuario,String pass){
        this.id_usuario = id_usuario;
        this.pass = pass;
    }

 
        
    public String getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(String id_usuario) {
        this.id_usuario = id_usuario;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getRol() {
        return rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }
    
    public String createDBUser(){
        return id_usuario.split("@")[0];
    }
    
    String id_usuario;
    String pass;
    String nombre;
    String rol;

}
