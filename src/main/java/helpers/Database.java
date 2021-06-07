package helpers;

import java.sql.*;

public class Database {
	
	private Connection cn;
	private Statement stmt;
	private PreparedStatement pstmt;
	private ResultSet rs;
	
	// INSTANCIA CON LA CLASE DE CONFIGURACION CENTRALIZADA
	private ConfigInfo conf = ConfigInfo.getInstance();
	
	// URL
	private String urlDB = "jdbc:postgresql://"+conf.host+":"+conf.port+"/"+conf.database;
	
	// INSTNACIA UNICA (SINGLETON)
	private static Database dt = new Database();
	
	private Database() {
		
		// ESTABLECER CONEXION CON BASE DE DATOS
		try {
			Class.forName(conf.driver); // REGISTRAR DIRVER
			
			this.cn = DriverManager.getConnection(urlDB, conf.user, conf.password);
			
			System.out.println("Conexion establecida con: " + conf.database);
			
		}catch(SQLException | ClassNotFoundException e) {
			System.out.println("Error al conectar con la base de datos: " + e.getMessage());
		}
		
	}
	
	public static Database getInstance() {
		return dt;
	}
	
}
