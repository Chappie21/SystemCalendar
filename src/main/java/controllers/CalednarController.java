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
    public static int Crate_Calendar(Object... datos) {

        Connection cn = db.getConnetion();

        try {
            PreparedStatement pstm = cn.prepareStatement(conf.addCalendarSQL);

            pstm.setString(1, (String) datos[0]);
            pstm.setString(2, (String) datos[1]);
            pstm.setString(3, (String) datos[2]);
            pstm.setInt(4, (Integer) datos[3]);

            ResultSet rs = pstm.executeQuery();
            rs.next();
            
            int id = rs.getInt(1);

            pstm.close();

            return id;

        } catch (SQLException e) {
            System.out.println("Error al registrar nuevo calendario: " + e.getMessage());
        }

        return 0;
    }

    // BORRAR CALENDARIO
    public static boolean Delete_Calendar(int id_calendar) {

        Connection cn = db.getConnetion();

        try {
            PreparedStatement pstm = cn.prepareStatement(conf.deleteCalendarSQL);

            pstm.setInt(1, id_calendar);

            pstm.executeQuery();

            pstm.close();

            return true;

        } catch (SQLException e) {
            System.out.println("Error al borrar calendario: " + e.getMessage());
        }

        return false;
    }

    // EDITAR CALENDARIO
    public static boolean Edit_Calendar(Object... datos) {

        Connection cn = db.getConnetion();

        try {
            PreparedStatement pstm = cn.prepareStatement(conf.editCalendarSQL);

            pstm.setString(1, (String) datos[0]);
            pstm.setString(2, (String) datos[1]);
            pstm.setString(3, (String) datos[2]);
            pstm.setInt(4, (Integer) datos[3]);

            pstm.executeUpdate();

            pstm.close();

            return true;

        } catch (SQLException e) {
            System.out.println("Error al editar calendario: " + e.getMessage());
        }

        return false;
    }

    public boolean verificar_inivtado(int... datos) {
        return false;
    }

    // INVITAR USUARIO
    public static boolean Invite_Calendar(int... datos) {

        Connection cn = db.getConnetion();

        try {
            PreparedStatement pstm = cn.prepareStatement(conf.inviteCalendarSQL);

            pstm.setInt(1, datos[0]);
            pstm.setInt(2, datos[1]);

            ResultSet rs = pstm.executeQuery();

            rs.next();

            boolean result = rs.getBoolean(1); // la funcion retorna true si se pudo generar, false si la invitacion ya
                                               // existe

            rs.close();
            pstm.close();

            return result;

        } catch (SQLException e) {
            System.out.println("Error al invitar al calendario: " + e.getMessage());
        }

        return false;
    }

    // ELIMINAR INVITACION
    public static boolean eliminate_invitade_User(int... datos) {

        Connection cn = db.getConnetion();

        try {
            PreparedStatement pstm = cn.prepareStatement(conf.deleteInvitedCalendarSQL);

            pstm.setInt(1, datos[0]);
            pstm.setInt(2, datos[1]);

            ResultSet rs = pstm.executeQuery();

            rs.next();

            boolean result = rs.getBoolean(1); // la funcion retorna true si se pudo eliminar, false si la invitacion ya
                                               // no existe

            rs.close();
            pstm.close();

            return result;

        } catch (SQLException e) {
            System.out.println("Error al eliminar invitacion de calendario: " + e.getMessage());
        }

        return false;
    }
}