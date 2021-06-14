package controllers;

import java.io.File;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Time;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import helpers.ConfigInfo;
import helpers.Database;

public class ActividadController {
    
    // INSTANCIA CON EL MANEJADOR DE CONEXIONES
	private static Database db = Database.getInstance();
	private static ConfigInfo conf = ConfigInfo.getInstance();

    // CREACION DE ACTIVIDADDES EN UN CALENDARIO ESPECIFICADO
    public static int CrearActividad(String...datos){

        Connection cn = db.getConnetion(); // OBTENER CONEXION

        SimpleDateFormat format = new SimpleDateFormat("yyyy/MM/dd");
        SimpleDateFormat horaFormat = new SimpleDateFormat("hh:mm:ss");
        
        // DATOS DATE
        try {

            // OBTENER FORMATO
            java.sql.Date Fecha = new Date(format.parse((String) datos[3]).getTime());
            System.out.println(Fecha);
            Time horaInicio = new Time(horaFormat.parse((String) datos[4]).getTime());
            Time horaFin = new Time(horaFormat.parse((String) datos[5]).getTime());

            PreparedStatement pstm = cn.prepareStatement(conf.crearEventoSQL);

            pstm.setInt(1, Integer.parseInt(datos[0]));
            pstm.setString(2, datos[1]);
            pstm.setString(3, datos[2]);
            pstm.setDate(4, Fecha);
            pstm.setTime(5, horaInicio);
            pstm.setTime(6, horaFin);
            
            if(datos[6] != null){
                pstm.setString(7, datos[6]);
            }else{
                pstm.setString(7, null);
            }

            ResultSet rs = pstm.executeQuery();

            rs.next();

            int id = rs.getInt(1);

            rs.close();
            pstm.close();

            return id;

        } catch (ParseException | SQLException e) {
            System.out.println("Error al registrar actividad: " + e.getMessage());
        }

        return 0; /* EN CASO DE ERROR */
    }

    public static boolean BorrarActividad(int id_actividad){

        Connection cn = db.getConnetion(); // OBTENER CONEXION

        boolean exito = false;

        try{

            PreparedStatement pstm = cn.prepareStatement(conf.borrarEventoSQL);
            pstm.setInt(1, id_actividad);
            ResultSet rs = pstm.executeQuery();
            rs.next();

            if(rs.getString(1) != ""){
                File archivo = new File(rs.getString(1));
                archivo.delete();
            }

            rs.close();
            pstm.close();

            return exito = true;

        }catch(SQLException e){
            System.out.println("Error al borrar actividad: " + e.getMessage());
        }

        return exito;
    }


}
