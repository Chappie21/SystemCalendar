package helpers;

import java.io.IOException;
import java.util.Properties;
import java.io.FileInputStream;

public class ConfigInfo {
	
	private Properties config = new Properties();
	private FileInputStream input;
	
	// PROPIEDADES
	public String host;
	public String port;
	public String database;
	public String user;
	public String password;
	public String driver;
	public String RegisterSQL;
	public String usersSQL;
	public String addCalendarSQL;
	public String deleteCalendarSQL;
	public String editCalendarSQL;
	public String inviteCalendarSQL;
	public String deleteInvitedCalendarSQL;
	public String crearEventoSQL;
	public String borrarEventoSQL;
	public String obtenerCalendarios;
	public String editarInfoUsuario;
	public String borrarUsuario;

	// INSTANCIA
	private static ConfigInfo props = new ConfigInfo();
	
	private ConfigInfo() {
		
		try {
			
			// LEER ARCHIVO DE PROPIEDADES
			this.input = new FileInputStream("config.properties");
			this.config.load(input);
			
			// OBTENER PROPIEDADES
			this.driver = this.config.getProperty("driver");
			this.host = this.config.getProperty("host");
			this.port = this.config.getProperty("port");
			this.database = this.config.getProperty("database");
			this.user = this.config.getProperty("user");
			this.password = this.config.getProperty("password");
			this.RegisterSQL = this.config.getProperty("registrarUser");
			this.usersSQL = this.config.getProperty("users");
			this.addCalendarSQL = this.config.getProperty("crearCalendario");
			this.deleteCalendarSQL = this.config.getProperty("borrarCalendario");
			this.editCalendarSQL = this.config.getProperty("editarCalendario");
			this.inviteCalendarSQL = this.config.getProperty("invitarCalendario");
			this.deleteInvitedCalendarSQL = this.config.getProperty("elimitadeInvitedCalendar");
			this.crearEventoSQL = this.config.getProperty("crearEvento");
			this.borrarEventoSQL = this.config.getProperty("borrarEvento");
			this.obtenerCalendarios = this.config.getProperty("obtenerCalendarios");
			this.editarInfoUsuario = this.config.getProperty("editarInfoUsuario");
			this.borrarUsuario = this.config.getProperty("borrarUsuario");


		}catch(IOException e) {
			System.out.println("Error al leer archivo de propiedades: " + e.getMessage());
		}finally {
			try {
				this.input.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		
	}
	
	public static ConfigInfo getInstance() {
		return props;
	}
	
}
