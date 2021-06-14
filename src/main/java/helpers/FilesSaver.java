package helpers;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.net.http.HttpRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.servlet.http.Part;

public class FilesSaver {

    private static final String ArchURL = "target/tomcat.8080/webapps/expanded/img"; // RUTA DE CARPETAS DE IMAGENES

    public static String SaveFile(HttpServletRequest request){

        try{
            HttpSession session = request.getSession();

            // CREAR CARPETA CON NOMBRE DE USAURIO
            File carpeta = new File(ArchURL + File.separator 
                    + session.getAttribute("NameUser"));
    
            if(!carpeta.exists()){
                carpeta.mkdirs();
            }

            Part dataFile = request.getPart("ImgEvent");

            File filefinal = new File(carpeta.getAbsolutePath() 
                    + File.separator + getNombreArchivo(dataFile));

            // PREAPARAR SALIDA DE ARCHIVO
            FileOutputStream out = new FileOutputStream(filefinal);
            
            out.write(dataFile.getInputStream().readAllBytes()); // CREAR COPIA DEL ARCHIVO

            return filefinal.getAbsolutePath(); /* En caso de no haber error, retorna la ruta */

        }catch(Exception e){
            System.out.println("Error al guardar archivo: " + e.getMessage());
        }

        return "";
    }

    // Obtener nombre de archivo
    private static String getNombreArchivo(Part part) {

        String contentDisp = part.getHeader("content-disposition");

        System.out.println("content-disposition header= "+contentDisp);

        String[] datos = contentDisp.split(";");

        for (String dato : datos) {
            if (dato.trim().startsWith("filename")) {
                return dato.substring(dato.indexOf("=") + 2, dato.length()-1); /* RETORNAR NOMBRE */
            }
        }

        return ""; /* EN CASO DE NO PODER RTORNAR EL NOMBRE */
    }


}
