package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import helpers.helpLogin;
import controllers.InfoUser;

/**
 * Servlet implementation class UserInfo
 */
@MultipartConfig()
@WebServlet("/UserInfo")
public class UserInfo extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public UserInfo() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
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
		String Correo = (String) request.getParameter("UserCorreo");
		String Password = (String) request.getParameter("Password");

		response.setContentType("application/json");
		response.addHeader("Access-Control-Allow-Origin", "*");
		PrintWriter out = response.getWriter();
		String json = ""; // JSON DE RESPUESTA
		HttpSession sesion = request.getSession();

		if (helpLogin.isLogin(request)) {

			boolean equalsEmail = Correo.equals((String) sesion.getAttribute("Correo"));

			Object datos[] = InfoUser.editUser(Nombre, Correo, Password, (Integer) sesion.getAttribute("Id_user"),
				equalsEmail);

			json = (String) datos[0];

			// ESTABLECER NUEVO CORREO EN LA SESION
			if((boolean) datos[1])
				sesion.setAttribute("Correo", Correo);
			
		} else {
			json = "{\"status\": 400, \"msg\": \"Usuario no logueado\"}";
		}

		out.print(json);
		out.flush();
		out.close();

	}


	@Override
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		response.setContentType("application/json");
		response.addHeader("Access-Control-Allow-Origin", "*");
		PrintWriter out = response.getWriter();
		String json = ""; // JSON DE RESPUESTA
		HttpSession sesion = request.getSession();

		if (helpLogin.isLogin(request)) {

			boolean exito = InfoUser.deleteUser((Integer) sesion.getAttribute("Id_user"));

			if(exito){
				json = "{\"status\": 200, \"msg\": \"Usuario eliminado\"}";
				sesion.invalidate(); // se invalida la sesion;
			}else{
				json = "{\"status\": 500, \"msg\": \"Error al eliminar cuenta\"}";
			}

		} else {
			json = "{\"status\": 400, \"msg\": \"Usuario no logueado\"}";
		}

		out.print(json);
		out.flush();
		out.close();

	}
}
