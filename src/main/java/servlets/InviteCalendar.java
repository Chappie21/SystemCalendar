package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import controllers.CalednarController;
import helpers.helpLogin;

/**
 * Servlet implementation class InviteCalendar
 */
@MultipartConfig
@WebServlet("/InviteCalendar")
public class InviteCalendar extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public InviteCalendar() {
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
		doGet(request, response);
	}

	@Override
	protected void doPut(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub

		// PREPARAR RESPUESTA DEL SERVIDOR
		response.setContentType("application/json");
		response.addHeader("Access-Control-Allow-Origin", "*");
		PrintWriter out = response.getWriter();
		String json = ""; // JSON DE RESPUESTA

		if (helpLogin.isLogin(request)) {

			String Id_Calendar = request.getParameter("Id_Calendar");
			String Invitado = request.getParameter("Invitado");

			boolean exito = CalednarController.Invite_Calendar(Integer.parseInt(Invitado),
					Integer.parseInt(Id_Calendar));

			if (exito) {
				json = "{\"status\": 200, \"msg\": \"Usuario invitado!!!\"}";
			} else {
				json = "{\"status\": 400, \"msg\": \"El usuario ya fue invitado\"}";
			}

		} else {
			json = "{\"status\": 400, \"msg\": \"Usuario no logueado\"}";
		}

		out.print(json);
		out.flush();
		out.close();

	}

	@Override
	protected void doDelete(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub

		// PREPARAR RESPUESTA DEL SERVIDOR
		response.setContentType("application/json");
		response.addHeader("Access-Control-Allow-Origin", "*");
		PrintWriter out = response.getWriter();
		String json = ""; // JSON DE RESPUESTA

		if (helpLogin.isLogin(request)) {

			String Id_Calendar = request.getParameter("Id_Calendar");
			String Invitado = request.getParameter("Invitado");

			boolean exito = CalednarController.eliminate_invitade_User(Integer.parseInt(Invitado),
					Integer.parseInt(Id_Calendar));

			if (exito) {
				json = "{\"status\": 200, \"msg\": \"Invitacion eliminada!!!\"}";
			} else {
				json = "{\"status\": 400, \"msg\": \"Invitacion no existente\"}";
			}

		} else {
			json = "{\"status\": 400, \"msg\": \"Usuario no logueado\"}";
		}

		out.print(json);
		out.flush();
		out.close();
	}
	
}
