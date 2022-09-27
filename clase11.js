



/// creo un bucle para poder contar el array y generar los ID

function crearID(){
    let contador = JSON.parse(localStorage.getItem("Producto"))

    ///corresponde a la enterga de la clase 12
    let prueba = contador == null ? contador = 0 : contador.length 

    return prueba
    //console.log(contador.length)
    /*if( contador == null){
        return 0
    }else{
        return contador.length
    }*/
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
//// Lo pude resolver, espero que este bien


///corresponde a la enterga de la clase 12
function validar(valor){


    if( valor.value == null || valor.value == false || valor.value == ""){
        let control = valor.parentElement
        let nodoSmall = control.querySelector('small');
        control.className = "mensajeError Visible"
        nodoSmall.innerText = "Datos mal ingresado"
        
    }else if ( valor.value != null || valor.value != false || valor.value != ""){
        let control = valor.parentElement
        
        control.className = "mensajeError"
        
    }else{
        let nodoSmall = control.querySelector('small');
        nodoSmall.innerHTML = ""
        control.className = "mensajeError"
        formulario.reset()
    }

}




/// Creo la funcion la cual al hacer click me guarde los producotos en el Storage

function agregarProductos(){
    const id = crearID() + 1;
    const codigo = document.getElementById("codigo");
    const producto = document.getElementById("producto");
    const cantidad = document.getElementById("cantidad");
    const precio = document.getElementById("precio");
    
    //const nuevoProducto = new Productos(id, codigo.value, producto.value, cantidad.value, precio.value);

    /*if(codigo.value == "" || producto.value == "" || cantidad.value || precio.value){
        validar(codigo)
        validar(producto)
        validar(cantidad)
        validar(precio)
    }*/

   
    const productosEnStorage = JSON.parse(localStorage.getItem("Producto"))
    
    /// Aca trate de hacer una validacion, solo valide el campo CODIGO, por no llegaba
    /// no se si esta biem, pero para darle un poco más de onda cree un small en el HTML
    /// para que me diga que el hay que cargar si o si el codigo



    if(codigo.value == "" || producto.value == "" || cantidad.value == "" || precio.value == ""){
        validar(codigo)
        validar(producto)
        validar(cantidad)
        validar(precio)
       //let controlC = document.getElementById("codigo").parentElement
       //let nodoSmall = controlC.querySelector('small');
       //controlC.className = "mensajeError Visible"
       //nodoSmall.innerText = "Datos mal ingresado"

    }else if(productosEnStorage == null){
        const nuevoProducto = new Productos(id, codigo.value, producto.value, cantidad.value, precio.value);
        let arayProductos = []
        arayProductos.push(nuevoProducto)
        localStorage.setItem("Producto", JSON.stringify(arayProductos))
        //let controlC = document.getElementById("codigo").parentElement
        //controlC.className = "mensajeError"
        //formulario.reset()
        
    }else{
        const nuevoProducto = new Productos(id, codigo.value, producto.value, cantidad.value, precio.value);
        productosEnStorage.push(nuevoProducto)
        let enJASON = JSON.stringify(productosEnStorage)
        localStorage.setItem("Producto", enJASON)
        //console.log(productosEnStorage)
        //let controlC = document.getElementById("codigo").parentElement
        //controlC.className = "mensajeError"
        formulario.reset()
        
    }
    


}


/// tengo que recorrer lo que esta guardado en el storage para despues poder filtrar los productos
///corresponde a la enterga de la clase 12

function recorer(){
    let db = JSON.parse(localStorage.getItem("Producto"))
    let tdbody = document.getElementById("tdbody")
    console.log(db)

    db.forEach( db => {
        let td = document.createElement("tr")
        td.innerHTML = `
        <td data-title="#"> ${db.id}</td>
        <td data-title="Codigo"> ${db.codigo}</td>
        <td data-title="Producto"> ${db.producto}</td>
        <td data-title="Cantidad"> ${db.cantidad}</td>
        <td data-title="Precio"> $ ${db.precio}</td>
        `
        tdbody.appendChild(td)
    })
    
   
}



let ver = document.getElementById("ver")

let guardarProducto = document.getElementById("guardar")


guardarProducto != null && guardarProducto.addEventListener("click", agregarProductos)

///corresponde a la enterga de la clase 12

ver != null && ver.addEventListener("click", recorer)




