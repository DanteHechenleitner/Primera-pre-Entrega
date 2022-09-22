



/// creo un bucle para poder contar el array y generar los ID

function crearID(){
    let contador = JSON.parse(localStorage.getItem("Producto"))
    if( contador == null){
        return 0
    }else{
        return contador.length
    }
}

let formulario = document.getElementById("formulario")


//// Se crea la Clase Producto para poder crear con New nuevos productos

class Productos{
    constructor(id, codigo, producto, cantidad, precio){
        this.id = id;
        this.codigo = codigo;
        this.producto = producto;
        this.cantidad = cantidad;
        this.precio = precio;

    }
}



/// Profe aca quise realizar una funcion para validar si los datos que se cargar eran coretos
/// pero no pude, se me guaradaba en el storage de todas formas
/// lo quise hacer con deletitem 
/// se que primero tendria que tomar el storage transformarlo a JS, recorrerlo y buscar el el array que no esta bien
/// borrarlo y actualizar el arrar no? Capaz me estoy complicando demasiado 

/*function validar(valor){
    const productosEnStorage = JSON.parse(localStorage.getItem("Producto"))
    if( productosEnStorage == null){
        console.log("no hay nada en Storage")
    }else if(valor == false || valor == null) {
        console.log("dato mal ingresado")
       const productosEnStorage = JSON.parse(localStorage.getItem("Producto"))
       console.log(productosEnStorage)
    }

}*/




/// Creo la funcion la cual al hacer click me guarde los producotos en el Storage

function agregarProductos(){
    const id = crearID() + 1;
    const codigo = document.getElementById("codigo").value;
    const producto = document.getElementById("producto").value;
    const cantidad = document.getElementById("cantidad").value;
    const precio = document.getElementById("precio").value;
    
    const nuevoProducto = new Productos(id, codigo, producto, cantidad, precio);


    const productosEnStorage = JSON.parse(localStorage.getItem("Producto"))
    
    /// Aca trate de hacer una validacion, solo valide el campo CODIGO, por no llegaba
    /// no se si esta biem, pero para darle un poco más de onda cree un small en el HTML
    /// para que me diga que el hay que cargar si o si el codigo

    if(nuevoProducto.codigo == ""){
       let controlC = document.getElementById("codigo").parentElement
       let nodoSmall = controlC.querySelector('small');
       controlC.className = "mensajeError Visible"
       nodoSmall.innerText = "Datos mal ingresado"

    }else if(productosEnStorage == null){
        let arayProductos = []
        arayProductos.push(nuevoProducto)
        localStorage.setItem("Producto", JSON.stringify(arayProductos))
    }else{
        productosEnStorage.push(nuevoProducto)
        let enJASON = JSON.stringify(productosEnStorage)
        localStorage.setItem("Producto", enJASON)
        console.log(productosEnStorage)
        let controlC = document.getElementById("codigo").parentElement
        controlC.className = "mensajeError"
        formulario.reset()
    }




}




let guardarProducto = document.getElementById("guardar")





//// Profe mi idea tambiene era poder recorrer el Storage y tratar de buscar datos ahi.
//// Pero no hice tiempo le pido disculpas
/// Espero este todo ok Un Saludo

