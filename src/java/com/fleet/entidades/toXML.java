/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fleet.entidades;

import java.io.IOException;
import java.io.StringReader;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import org.w3c.dom.Document;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

/**
 *
 * @author Estefanía
 */
public class toXML {
    public static Document StringToXml( String in ){
        Document document = null;
        try {
            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
            DocumentBuilder builder;
            
            builder = factory.newDocumentBuilder();
            
            try {
                document = builder.parse( new InputSource( new StringReader( in ) ) );
            } catch (SAXException ex) {
                Logger.getLogger(toXML.class.getName()).log(Level.SEVERE, null, ex);
            } catch (IOException ex) {
                Logger.getLogger(toXML.class.getName()).log(Level.SEVERE, null, ex);
            }
 
        } catch (ParserConfigurationException ex) {
            Logger.getLogger(toXML.class.getName()).log(Level.SEVERE, null, ex);
        }
         return document;
    }
}
