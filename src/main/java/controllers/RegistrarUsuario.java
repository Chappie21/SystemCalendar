package controllers;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.*;
import java.sql.SQLException;
import java.util.Arrays;

import helpers.*;

public class RegistrarUsuario {
	
    // CIFRADOR DE CLAVE
    private static MessageDigest md;
    
	// INSTANCIA CON EL MANEJADOR DE CONEXIONES
	private static Database db = Database.getInstance();
	private static ConfigInfo conf = ConfigInfo.getInstance();

	// CONSTRUCTOR VACIO
    private RegistrarUsuario() {}
    
	private static String Hashing(String clave) {
		
		byte[] ClaveBytes = clave.getBytes(); // obtener bytes de la clave
		
		try {
			md = MessageDigest.getInstance("SHA-256");
		    byte[] BytesEncripte = md.digest(ClaveBytes);
		    BytesEncripte = Arrays.copyOf(BytesEncripte, 16);
			
			StringBuilder Hexform = new StringBuilder();

			// Convertir a Hexadecimal
			for(byte by: BytesEncripte){
				Hexform.append(String.format("%02x", by));
			}

			return Hexform.toString();

		} catch (NoSuchAlgorithmException e) {
			System.out.println("Error al encriptar clave: "+e.getMessage());
		}
		
		return null; /* ERROR */

	}

	public static boolean Existencia_Correo(String Correo){

		try {
			Connection cn = db.getConnetion();
			Statement stm = cn.createStatement();
			ResultSet rs = stm.executeQuery("SELECT Correo_user FROM USERS");

			
			while(rs.next()){
				if(rs.getString("Correo_user").equals(Correo)){
					return true;
				}
			}

			stm.close();
			rs.close();

		} catch (SQLException e) {
			System.out.println("Error al buscar correo: " + e.getMessage());
		}

		return false;
	}

	public static boolean Registrar(String...datos){

		Connection connecion = db.getConnetion(); // obtenher conexion

		String hash = Hashing(datos[2]);

		
		try{
			
			PreparedStatement prd = connecion.prepareStatement(conf.RegisterSQL);
	
			prd.setString(1, datos[0]);
			prd.setString(2, datos[1]);
			prd.setString(3, hash);
	
			prd.execute();
	
			System.out.println("Usuario registrado con exito!!!");
	
			prd.close();
	
			return true;
	
	
		}catch(SQLException e){
				System.out.println("Error al registrar usuario: " + e.getMessage());
		}
	
		return false;
		
	}

	public static Object[] LoginUser(String...datos){

		Connection connection = db.getConnetion(); // obtenher conexion

		String hash = Hashing(datos[1]); // realziar hasing de contraseñ

		try {
			Statement stm = connection.createStatement();
			ResultSet rs = stm.executeQuery(conf.usersSQL);

			while(rs.next()){

				// COMPROBAR NOMBRE DE USUARIO O CORREO ELECTRONICO
				if(datos[0].equals(rs.getString("Name_user")) || datos[0].equals(rs.getString("Correo_user"))){

					if(hash.equals(rs.getString("Clave_user"))){
						Object info[] = {true, Integer.parseInt(rs.getString("Id_user")), rs.getString("Name_user")};
						return info; /* LOGEADO CON EXITO*/
					}

				}
				
			}

			stm.close();
			rs.close();

		} catch (SQLException e) {
			System.out.println("Error al consultar usuarios: " + e.getMessage());
		}

		Object info[] = {false};

		return info; /* ERROR DE LOGUEO */
	}

}
