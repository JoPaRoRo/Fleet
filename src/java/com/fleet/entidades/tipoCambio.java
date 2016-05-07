/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fleet.entidades;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

/**
 *
 * @author Estefanía
 */
public class tipoCambio {

    public tipoCambio(float compra, float venta, Date fecha) {
        this.compra = compra;
        this.venta = venta;
        this.fecha = fecha;
    }

    public float getCompra() {
        return compra;
    }

    public void setCompra(float compra) {
        this.compra = compra;
    }

    public float getVenta() {
        return venta;
    }

    public void setVenta(float venta) {
        this.venta = venta;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public tipoCambio(Document xmlventa, Document xmlcompra) {
        //ya aqui se tiene el XML
        NodeList list1 = xmlventa.getElementsByTagName("INGC011_CAT_INDICADORECONOMIC");// este el nombre de la raiz del XML
        NodeList list2 = xmlcompra.getElementsByTagName("INGC011_CAT_INDICADORECONOMIC");

        int i;

        SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd");
        for (i = 0; i < list1.getLength(); i++) {
            try {
                Element e1 = (Element) list1.item(i);//Venta
                Element e2 = (Element) list2.item(i);//compra
                String aux = e1.getElementsByTagName("DES_FECHA").item(0).getTextContent().substring(0, 10);
                fecha = ft.parse(aux); //le da formato a la fecha
                compra = Float.parseFloat(e1.getElementsByTagName("NUM_VALOR").item(0).getTextContent());// se castean como float xq asi son los tipos de atributos de la clase
                venta = Float.parseFloat(e2.getElementsByTagName("NUM_VALOR").item(0).getTextContent());//tipoDeCambio    
                // se crea el tipo de cambio y se le agregan los datos correspondientes              
            } catch (ParseException ex) {
                Logger.getLogger(tipoCambio.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }

    private Date fecha;
    private float compra;
    private float venta;
}
