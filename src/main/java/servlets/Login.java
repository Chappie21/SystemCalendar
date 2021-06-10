package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import controllers.RegistrarUsuario;

/**
 * Servlet implementation class Login
 */
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
		
		String UserName_Correo = request.getParameter("UserName");
		String Clave = request.getParameter("Clave");

		// PREPARAR RESPUESTA
		response.setContentType("application/json");
		PrintWriter out = response.getWriter();
		String json = ""; // JSON DE RESPUESTA

		// VERIFICAR EXISTENCIA DEL USUARIO Y SUS CREDENCIALES
		boolean exito = RegistrarUsuario.LoginUser(UserName_Correo, Clave);
		
		// EN CASO DE EXITO ENVÍA MENSAJE EXITO, EN CASO DE ERROR ES ALGUNA CREDENCIAL INVALIDA
		if(exito){
			json = "status: '200', message: 'Login correcto'";
		}else{
			json = "status: '500', message: 'Credenciales incorrectas'";
		}

		out.print(json);
		out.flush();
		out.close();

	}

}
