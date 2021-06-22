package controllers;

import helpers.Database;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import helpers.ConfigInfo;

public class InfoUser {

    // INSTANCIA CON EL MANEJADOR DE CONEXIONES
    private static Database db = Database.getInstance();
    private static ConfigInfo conf = ConfigInfo.getInstance();

    // EDITAR DATOS DE USUARIO
    /*
     * Este metodo recibe 5 parametros, eston los datos correspondientes a los del
     * usuario, y un dato tipo boolean
     * 
     * el dato tipo boolean me indica si el correo nuevo dado por el usuario es el
     * mismo, de manera, que se puede comprabar que el usuario no va a cambiar de
     * correo y así, a pesar del que correo sea existente (por que es el del propio
     * usuario), este podrá ser editado (la pocision 5 del arreglo indica dicho
     * valor). En caso de que si lo cambie, en el if principal repercute la
     * verificacion de correo de existir este correo ingesado por el usuario, no
     * realizará la edicion de datos.
     * 
     * Cabe recalcar, que en caso de que la nueva clave enviada por el usuario sea
     * diferente de nulo, se procede a realziar un hash de este, si no, se añade un
     * valor nulo, y la funcion creada en la abse de datos se encargará de no
     * cambiar la contraseña por originaria en la misma.
     */
    public static Object[] editUser(Object...datos){

        Object data[] = {"{\"status\": 500, \"message\": \"Error al procesar edicion\"}", false};

        Connection cn = db.getConnetion();

        try{
            
            // VERIFICAR SI EL CORREO NUEVO NO ESTÁ EN USO
            if((!RegistrarUsuario.Existencia_Correo((String) datos[1])) || (boolean) datos[4]){

                PreparedStatement pstm = cn.prepareStatement(conf.editarInfoUsuario);

                pstm.setString(1, (String) datos[0]);
                pstm.setString(2, (String) datos[1]);
            
                System.out.println((String) datos[2]);

                if(!((String) datos[2]).equals("")){
                    pstm.setString(3, RegistrarUsuario.Hashing((String) datos[2]));
                }else{
                    pstm.setString(3, null);
                }

                pstm.setInt(4, (Integer) datos[3]);
    
                ResultSet rs = pstm.executeQuery();
    
                rs.next();
    
                data[1] = rs.getBoolean(1); // TRUE SI PUDO EDITAR, FALSE SI NO
    
                rs.close();
                pstm.close();
                
                if((boolean) data[1])
                    data[0] = "{\"status\": 200, \"message\": \"Datos editados con  exito\"}";
                else
                    data[0] = "{\"status\": 500, \"message\": \"Error al editar datos\"}";

            }else{
                data[0] = "{\"status\": 400, \"message\": \"Correo ya existente\"}";
            }

        }catch(SQLException e){
            System.out.println("Error al obtener informacion del usuario: " + e.getMessage());
        }

        return data;

    }

    // ELIMINAR USUARIO
    public static boolean deleteUser(int id_user){

        Connection cn = db.getConnetion();

        try{

            PreparedStatement pstm = cn.prepareStatement(conf.borrarUsuario);
            pstm.setInt(1, id_user);
            
            ResultSet rs = pstm.executeQuery();

            rs.next();

            boolean exito = rs.getBoolean(1);

            rs.close();
            pstm.close();

            return exito;
            
        }catch(SQLException e){
            System.out.println("Error al eliminar usuario: " + e.getMessage());
        }

        return false;

    }

}
