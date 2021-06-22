package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import controllers.RegistrarUsuario;

/**
 * Servlet implementation class Login
 */
@MultipartConfig()
@WebServlet("/Login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Login() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub

		String UserName_Correo = request.getParameter("UserName");
		String Clave = request.getParameter("Clave");

		// PREPARAR RESPUESTA
		response.setContentType("application/json");
		response.addHeader("Access-Control-Allow-Origin", "*");
		PrintWriter out = response.getWriter();
		String json = ""; // JSON DE RESPUESTA

		// VERIFICAR EXISTENCIA DEL USUARIO Y SUS CREDENCIALES
		Object exito[] = RegistrarUsuario.LoginUser(UserName_Correo, Clave);
		
		// EN CASO DE EXITO ENVÍA MENSAJE EXITO, EN CASO DE ERROR ES ALGUNA CREDENCIAL INVALIDA
		if((boolean) exito[0]){
			// Obtener la sesion
			HttpSession sesion = request.getSession(); 
			sesion.setAttribute("Login", true);
			sesion.setAttribute("Id_user", (Integer) exito[1]);
			sesion.setAttribute("Correo", (String) exito[3]);

			// Cookie CookieLogin = new Cookie("Login", "true");
			// CookieLogin.setMaxAge(120);

			// Cookie CookieId = new Cookie("Id_user", "" + (Integer) exito[1]);
			// CookieId.setMaxAge(120);

			// response.addCookie(CookieLogin);
			// response.addCookie(CookieId);

			// respuesta
			json = "{\"status\": 200, \"message\": \"Login correcto\", \"UserName\": \"" + (String) exito[2] +"\", " + "\"CorreoUser\": \"" + (String) exito[3] + "\""+ "}";
		}else{
			//respuesta
			json = "{\"status\": 500, \"message\": \"Credenciales incorrectas\"}";
		}

		out.print(json);
		out.flush();
		out.close();

	}

}
