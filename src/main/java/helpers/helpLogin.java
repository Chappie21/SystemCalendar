package helpers;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

public class helpLogin {
    

    public static boolean isLogin(HttpServletRequest request){
        
        try{

            // SESION DEL USUARIO
            HttpSession sesion = request.getSession();

            // VERIFICAR SI EL USUARIO A REALZIADFO LOGIN
            return (boolean) sesion.getAttribute("Login") ? true : false;

        }catch(Exception e){
            System.out.println("Error de sesion: " + e.getMessage());
        }

        return false;

    }

    public static boolean isLogin(Cookie[] cookies){

        for(int i = 0; i<cookies.length; i++){

            if(cookies[i].getName().equals("Login")){
                if(cookies[i].getValue().equals("true")){
                    return true;
                }
            }
        }

        return false;
    }


    public static int Id_user(Cookie[] cookies){

        for(int i = 0; i<cookies.length; i++){

            if(cookies[i].getName().equals("Id_user")){
                return Integer.parseInt(cookies[i].getValue());
            }
        }

        return 0;
    }

}
