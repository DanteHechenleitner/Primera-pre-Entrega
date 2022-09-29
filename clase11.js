
let formulario = document.getElementById("formulario");
let verStock = document.getElementById("verStock");
let guardarProducto = document.getElementById("guardar");

/// creo un bucle para poder contar el array y generar los ID

function crearID(){
    let contador = JSON.parse(localStorage.getItem("Producto"))
    let creadId = contador == null ? contador = 0 : contador.length 

    return creadId
}

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

// JS Librerias

function alertGuardado(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Cotizacion guardada',
        showConfirmButton: false,
        timer: 1500
    })
}


//// Validar los valores que ingresa el usuario por HTML

function validarHtml(valor){


    if( valor.value == null || valor.value == false || valor.value == ""){
        let control = valor.parentElement
        let nodoSmall = control.querySelector('small');
        control.className = "mensajeError Visible"
        nodoSmall.innerText = "Datos mal ingresado"
        
    }else if ( valor.value != null || valor.value != false || valor.value != ""){
        let control = valor.parentElement      
        control.className = "mensajeError"
        
    }

}




/// Creo la funcion la cual al hacer click me guarde los producotos en el Storage

function agregarProductos(){
    const id = crearID() + 1;
    const codigo = document.getElementById("codigo");
    const producto = document.getElementById("producto");
    const cantidad = document.getElementById("cantidad");
    const precio = document.getElementById("precio");
    
   
    const productosEnStorage = JSON.parse(localStorage.getItem("Producto"))


    if(codigo.value == "" || producto.value == "" || cantidad.value == "" || precio.value == ""){
        validarHtml(codigo)
        validarHtml(producto)
        validarHtml(cantidad)
        validarHtml(precio)

    }else if(productosEnStorage == null){
        validarHtml(codigo);
        validarHtml(producto);
        validarHtml(cantidad);
        validarHtml(precio);
        const nuevoProducto = new Productos(id, codigo.value, producto.value, cantidad.value, precio.value);
        let arayProductos = []
        arayProductos.push(nuevoProducto)
        localStorage.setItem("Producto", JSON.stringify(arayProductos))
        formulario.reset()
        alertGuardado()
        
    }else{
        validarHtml(codigo)
        validarHtml(producto)
        validarHtml(cantidad)
        validarHtml(precio)
        const nuevoProducto = new Productos(id, codigo.value, producto.value, cantidad.value, precio.value);
        productosEnStorage.push(nuevoProducto)
        let enJASON = JSON.stringify(productosEnStorage)
        localStorage.setItem("Producto", enJASON)
        formulario.reset()
        alertGuardado()
         
    }
    


}


/// tengo que recorrer lo que esta guardado en el storage para despues poder filtrar los productos

function recorerStock(){
    let db = JSON.parse(localStorage.getItem("Producto"))
    let tdbody = document.getElementById("tdbody")
    console.log(db)

    if(db != false && db != null){
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
    }else if (db == null){
        return alertStorageVacio()
        
    }

   
}

// JS Librerias

function alertStorageVacio(){
    Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'No hay productos para mostrar',
        showConfirmButton: false,
        timer: 1500
    })
}


guardarProducto != null && guardarProducto.addEventListener("click", agregarProductos)

verStock != null && verStock.addEventListener("click", recorerStock)




