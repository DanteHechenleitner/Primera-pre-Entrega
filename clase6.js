
let opcion;

const productos =[
    {
        id: 1,
        codigo: "ED01",
        nombreArticulo: "Maquina",
        precio: 5,
        cantidad:5,
    },
    {
        id: 2,
        codigo: "ED02",
        nombreArticulo: "Ranger260",
        precio: 2500,
        cantidad:7
    },
    {
        id: 3,
        codigo: "ED03",
        nombreArticulo: "Torcha",
        precio: 15,
        cantidad:8
    },
]
  

while(opcion !== 0){
    let codigo;
    let nombreArticulo;
    let precio; 
    let cantidad; 
    
    opcion = Number(prompt("Ingresar una opcion: \n -1 Agregar producto nuevo \n -2 Mostrar Productos \n -3 Buscar Producto \n -0 Salir"));
    switch (opcion) {
        case 1:

            const id = crearID() + 1;
            function validar (parametro){
                if (parametro == codigo){
                    while(codigo == false || codigo == null){
                        alert("Por favor ingresar el codigo");
                        codigo = prompt("Codigo: ");
                    }
                } else if (parametro == nombreArticulo){
                    while(nombreArticulo == false || nombreArticulo == null){
                        alert("Por favor ingresar el Nombre del Articulo");
                        nombreArticulo = prompt("Nombre del Articulo:");
                    }
                } else if (parametro == precio){
                    while(precio == false || precio == null || isNaN(precio)){
                        alert("Por favor ingresar el Precio del producto");
                        precio = prompt("Costo del producto: ");
                    }
                } else if (parametro == cantidad){
                    while(cantidad == false || cantidad == null || isNaN(cantidad)){
                        alert("Por favor ingresar cantidades ");
                        cantidad = Number(prompt("Cantidad: "));
                    }
                }
            }
            validar(codigo);
            validar(nombreArticulo);
            validar(precio);
            validar(cantidad);
            crearProducto(id, codigo, nombreArticulo, precio, cantidad);
            break;
    
        case 2 :
            mostrarProductos()
            break;

        case 3 :
            validar(codigo)
            buscarPorductos(codigo)
            break;

        case 0 :
            alert("Si quiere cargar un producto, reiniciar la pagina")
            break;
        
    }
}



function crearProducto(id, codigo, nombreArticulo, precio, cantidad){
    const resultado = productos.some((el) => el.codigo === codigo)
    if(resultado == true){
        alert("El codigo del producto ya existe")
    }else{
        productos.push({
            id,
            codigo,
            nombreArticulo,
            precio,
            cantidad,
        })
    }
    
  console.log(productos)
}
  

function buscarPorductos(codigo){
    const res = productos.filter((productos) => productos.codigo === codigo).map((producto) => producto.codigo + "-" + producto.nombreArticulo + "-" + "Cantidad: " + producto.cantidad);
    alert("Producto: " + res)
}




function mostrarProductos(){
    productos.forEach((productos) => console.log(productos.id + "-" + productos.codigo + "-" + productos.nombreArticulo));
}

function crearID(){
    return productos.length;
}

