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
import controllers.CalednarController;

/**
 * Servlet implementation class Calendar
 */
@MultipartConfig
@WebServlet("/Calendar")
public class Calendar extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public Calendar() {
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
		
		response.setContentType("application/json");
		response.addHeader("Access-Control-Allow-Origin", "*");
		PrintWriter out = response.getWriter();
		String json = ""; // JSON DE RESPUESTA
		HttpSession sesion = request.getSession();
		
		if (helpLogin.isLogin(request)) {

			int Id_user = (Integer) sesion.getAttribute("Id_user");

			System.out.println(Id_user);

			json = CalednarController.getCalendars(Id_user);

			if(json == null){
				json = "{\"status\": 200, \"msg\": \"Error al obtener calendarios\"}";
			}
		
		} else {
			json = "{\"status\": 400, \"msg\": \"Usuario no logueado\"}";
		}

		out.print(json);
		out.flush();
		out.close();

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub

		// PREPARAR RESPUESTA DEL SERVIDOR
		response.setContentType("application/json");
		response.addHeader("Access-Control-Allow-Origin", "*");
		PrintWriter out = response.getWriter();
		String json = ""; // JSON DE RESPUESTA
		HttpSession sesion = request.getSession();

		if (helpLogin.isLogin(request)) {

			String Nombre_C = (String) request.getParameter("Name_Calendar");
			String Descripcion_C = (String) request.getParameter("Description_Calendar");
			String Color_C = (String) request.getParameter("Color_Calendar");
			int Id_user = (Integer) sesion.getAttribute("Id_user");

			int id_calendario = CalednarController.Crate_Calendar(Nombre_C, Descripcion_C, Color_C, Id_user);

			if (id_calendario != 0){
				json = "{\"status\": 200, \"msg\": \"Calendario creado!!!\",";
				json += "\"Calendario_id\":"+id_calendario+"}";
			} else {
				json = "{\"status\": 400, \"msg\": \"Error al crear el calendario\"}";
			}

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
		
		// PREPARAR RESPUESTA DEL SERVIDOR
		response.setContentType("application/json");
		response.addHeader("Access-Control-Allow-Origin", "*");
		PrintWriter out = response.getWriter();
		String json = ""; // JSON DE RESPUESTA

		if (helpLogin.isLogin(request)) {

			String Id_data = request.getParameter("Id_calendario");

			int Id_Calendario = Integer.parseInt(Id_data);

			boolean exito = CalednarController.Delete_Calendar(Id_Calendario);

			if (exito) {
				json = "{\"status\": 200, \"msg\": \"Calendario eliminado!!!\"}";
			} else {
				json = "{\"status\": 400, \"msg\": \"Error al eliminar el calendario\"}";
			}

		} else {
			json = "{\"status\": 400, \"msg\": \"Usuario no logueado\"}";
		}

		out.print(json);
		out.flush();
		out.close();

	}

	@Override
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		// PREPARAR RESPUESTA DEL SERVIDOR
		response.setContentType("application/json");
		response.addHeader("Access-Control-Allow-Origin", "*");
		PrintWriter out = response.getWriter();
		String json = ""; // JSON DE RESPUESTA

		if (helpLogin.isLogin(request)) {

			String Id_Calendario = request.getParameter("Id_calendario");
			String Nombre_Calendario = request.getParameter("Nombre_calendario");
			String Descripcion_Calendario = request.getParameter("Descripcion_calendario");
			String Color_Calendario = request.getParameter("Color_calendario");


			boolean exito = CalednarController.Edit_Calendar(Nombre_Calendario, 
					Descripcion_Calendario, Color_Calendario, Integer.parseInt(Id_Calendario));
			if (exito) {
				json = "{\"status\": 200, \"msg\": \"Calendario editado!!!\"}";
			} else {
				json = "{\"status\": 400, \"msg\": \"Error al editar el calendario\"}";
			}

		} else {
			json = "{\"status\": 400, \"msg\": \"Usuario no logueado\"}";
		}

		out.print(json);
		out.flush();
		out.close();

	}

}
