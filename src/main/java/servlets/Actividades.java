package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import controllers.ActividadController;
import helpers.helpLogin;
import helpers.FilesSaver;

/**
 * Servlet implementation class Actividades
 */
@MultipartConfig
@WebServlet("/Actividades")
public class Actividades extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public Actividades() {
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

		// PREPARAR RESPUESTA DEL SERVIDOR
		response.setContentType("application/json");
		response.addHeader("Access-Control-Allow-Origin", "*");
		PrintWriter out = response.getWriter();
		String json = ""; // JSON DE RESPUESTA
		
		if (helpLogin.isLogin(request)) {

			String Id_Calendario = request.getParameter("Id_calendar");
			String NombreAct = request.getParameter("NameAct");
			String Descripcion = request.getParameter("DecpAct");
			String FechaAct = request.getParameter("FechaAct");
			String HoraInicio = request.getParameter("Inicio");
			String HoraFin = request.getParameter("Fin");
			String urlImg = FilesSaver.SaveFile(request);
			
			int Id_actividad = ActividadController.CrearActividad(Id_Calendario, NombreAct,
			Descripcion, FechaAct, HoraInicio, HoraFin, urlImg);

			if(Id_actividad != 0){
				json = "{\"status\": 200, \"msg\": \"Actividad creada!!!\",";
				json += "\"Actividad_id\":"+Id_actividad+"}";
			}else{
				json = "{\"status\": 500, \"msg\": \"Error al crear actividad\"}";
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

			String Id_Event = request.getParameter("IdEvent");

			boolean exito = ActividadController.BorrarActividad(Integer.parseInt(Id_Event));

			if(exito){
				json = "{\"status\": 200, \"msg\": \"Actividad eliminada!!!\"}";
			}else{
				json = "{\"status\": 200, \"msg\": \"Ocurrio un error al eliminar la actividad\"}";
			}

		} else {
			json = "{\"status\": 400, \"msg\": \"Usuario no logueado\"}";
		}

		out.print(json);
		out.flush();
		out.close();

	}

	@Override
	protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
	}

}
