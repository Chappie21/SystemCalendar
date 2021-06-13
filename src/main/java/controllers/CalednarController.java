package controllers;

import helpers.ConfigInfo;
import helpers.Database;
import java.sql.*;
import java.sql.SQLException;

public class CalednarController {
    
    // INSTANCIA CON EL MANEJADOR DE CONEXIONES
	private static Database db = Database.getInstance();
	private static ConfigInfo conf = ConfigInfo.getInstance();
    
    // CREAR CALENDARIO
    public static boolean Crate_Calendar(Object...datos){

        Connection cn = db.getConnetion();

        try{
            PreparedStatement pstm = cn.prepareStatement(conf.addCalendarSQL);

            pstm.setString(1, (String) datos[0]);
            pstm.setString(2, (String) datos[1]);
            pstm.setString(3, (String) datos[2]);
            pstm.setInt(4, (Integer) datos[3]);

            pstm.executeQuery();

            pstm.close();
            
            return true;

        }catch(SQLException e){
            System.out.println("Error al registrar nuevo calendario: " + e.getMessage());
        }

        return false;
    }

    // BORRAR CALENDARIO
    public static boolean Delete_Calendar(int id_calendar){

        Connection cn = db.getConnetion();
        
        try{
            PreparedStatement pstm = cn.prepareStatement(conf.deleteCalendarSQL);

            pstm.setInt(1, id_calendar);
        
            pstm.executeQuery();

            pstm.close();
            
            return true;

        }catch(SQLException e){
            System.out.println("Error al borrar calendario: " + e.getMessage());
        }

        return false;
    }
    
    // EDITAR CALENDARIO
    public static boolean Edit_Calendar(Object...datos){

        Connection cn = db.getConnetion();

        try{
            PreparedStatement pstm = cn.prepareStatement(conf.editCalendarSQL);
            
            pstm.setString(1, (String) datos[0]);
            pstm.setString(2, (String) datos[1]);
            pstm.setString(3, (String) datos[2]);
            pstm.setInt(4, (Integer) datos[3]);

            pstm.executeUpdate();

            pstm.close();
            
            return true;

        }catch(SQLException e){
            System.out.println("Error al borrar calendario: " + e.getMessage());
        }


        return false;
    }
}