package helpers;

public class Calendario {
    
    private int Id;
    private String Nombre;
    private String Descripcion;
    private String color;
    private String rol;

    public Calendario(int id, String Nombre, String Descripcion, String color, String rol){
        this.setId(id);
        this.setNombre(Nombre);
        this.setDescripcion(Descripcion);
        this.setColor(color);
        this.setRol(rol);
    }


    public String getRol() {
        return rol;
    }


    public void setRol(String rol) {
        this.rol = rol;
    }


    public String getColor() {
        return color;
    }


    public void setColor(String color) {
        this.color = color;
    }


    public String getDescripcion() {
        return Descripcion;
    }


    public void setDescripcion(String descripcion) {
        this.Descripcion = descripcion;
    }


    public String getNombre() {
        return Nombre;
    }


    public void setNombre(String nombre) {
        this.Nombre = nombre;
    }


    public int getId() {
        return Id;
    }


    public void setId(int id) {
        this.Id = id;
    }


}
