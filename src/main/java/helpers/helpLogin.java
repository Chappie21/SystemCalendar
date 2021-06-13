package helpers;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

public class helpLogin {
    

    public static boolean isLogin(HttpServletRequest request){
        
        try{

            // SESION DEL USUARIO
            HttpSession sesion = request.getSession();

            System.out.println(sesion.getAttribute("Login"));

            // VERIFICAR SI EL USUARIO A REALZIADFO LOGIN
            return (boolean) sesion.getAttribute("Login") ? true : false;

        }catch(Exception e){
            System.out.println("Error de sesion: " + e.getMessage());
            
        }

        return false;

    }


}
