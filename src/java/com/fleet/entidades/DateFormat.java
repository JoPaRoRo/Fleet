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
public class DateFormat {

    public String format(String date) { ///dia mes ano
        String Fecha = date.substring(7, 10) + "/";
        String m = date.substring(4, 7);
        Fecha += (m.equals("Jan")) ? "01"
                : (m.equals("Feb")) ? "02"
                        : (m.equals("Mar")) ? "03"
                                : (m.equals("Apr")) ? "04"
                                        : (m.equals("May")) ? "05"
                                                : (m.equals("Jun")) ? "06"
                                                        : (m.equals("Jul")) ? "07"
                                                                : (m.equals("Aug")) ? "08"
                                                                        : (m.equals("Sep")) ? "09"
                                                                                : (m.equals("Oct")) ? "10"
                                                                                        : (m.equals("Nov")) ? "11"
                                                                                                : 12;

        Fecha += "/20" + date.substring(10, 15).substring(3);
        return Fecha;

    }


    public String format2(String date) { ///dia mes ano
        
        String fecha ="";
        int dia= Integer.parseInt(date.substring(8, 10))-1;
        String mes = date.substring(5,7);
        String ano = date.substring(0,4);
        
        fecha = dia+"/"+mes+"/"+ano;
        return fecha;

    }

}
