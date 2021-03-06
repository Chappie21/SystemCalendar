package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import controllers.RegistrarUsuario;

/**
 * Servlet implementation class Register
 */
@MultipartConfig
@WebServlet("/Register")
public class Register extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public Register() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub

		// Obtener atributos
		String Nombre = (String) request.getParameter("UserName");
		String Correo = (String) request.getParameter("Correo");
		String Password = (String) request.getParameter("Clave");

		// PREPARAR RESPUESTA
		response.setContentType("application/json");
		response.addHeader("Access-Control-Allow-Origin", "*");
		PrintWriter out = response.getWriter();
		String json = ""; // JSON DE RESPUESTA

		try {
			if (!RegistrarUsuario.Existencia_Correo(Correo)) {

				boolean exitoRegistro = RegistrarUsuario.Registrar(Nombre, Correo, Password);

				if (exitoRegistro) {
					json = "{\"status\": 200, \"message\": \"Registro exitoso!\"}";
				} else {
					json = "{\"status\": 500, \"message\": \"Error al registrar usuario\"}";
				}

			} else {
				json = "{\"status\": 500, \"message\": \"Usuario ya existente\"}";
			}
		} catch (Exception e) {
			System.out.println("Error al realizar proceso -> REGISTER: " + e.getMessage());
			json = "{\"status\": 500, \"message\": \"Error al consultar con el servidor\"}";
		}

		// ENVIAR RESPUESTA
		out.print(json);
		out.flush();
		out.close();
	}

}
