//VARIABLES

const carrito = document.querySelector('#carrito');
const carrito2 = document.querySelector('#carrito2');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const contenedorCarrito2 = document.querySelector('#lista-carrito2 tbody');
const ListaProductos = document.querySelector('.productos');
const ListaProductos2 = document.querySelector('.productos');
const contadorCarrito = document.querySelector('.subMenu__contador');
const totalProductosCarrito = document.querySelector('.totalProductos');
const totalCarrito1 = document.querySelector('.totalCompra1');
const BotonPagar = document.querySelector('.BotonPagar');


const marca1 = document.querySelector('#marca1');
const articulo3 = document.querySelector('#articulo');
const precio = document.querySelector('#precio');
//donde se va a crear el html para los productos
const resultado = document.querySelector('.resultado');

//MUESTRA EL INVENTARIO COMPLETO CUANDO NO HAY NADA SELECCIONADO EN LOS CAMPOS DE FILTRAR
document.addEventListener('DOMContentLoaded', () => {
    mostrar(inventario);
})


//creo una plantilla PARA ZAPATILLAS
class producto {

    constructor(id, marca, articulo, imagen, detalle, talle, precio, cantidad, stock){
        this.id = id,
        this.marca = marca,
        this.articulo = articulo,
        this.imagen = imagen,
        this.detalle = detalle,
        this.talle = talle,
        this.precio = precio,
        this.cantidad = cantidad
        this.stock = stock
    }
}


// PARA SABER MI INVENTARIO Y TOMAR DATOS 

const inventario = [];
inventario.push(new producto(01, "Adidas", "Zapatilla", "img/zapatilla1.png" , "Sport 360", 39, 6600, 1, 10 ));
inventario.push(new producto(02, "Adidas", "Zapatilla", "img/zapatilla1.png", "Sport 360", 40, 6600, 1, 10 ));
inventario.push(new producto(03, "Adidas", "Zapatilla", "img/zapatilla1.png", "Sport 360", 41, 6600, 1, 10 ));

inventario.push(new producto(04, "Reebok", "Zapatilla", "img/zapatilla2.png",  "Adventure", 39, 5800, 1, 10 ));
inventario.push(new producto(05, "Reebok", "Zapatilla", "img/zapatilla2.png",  "Adventure", 40, 5800, 1, 10 ));
inventario.push(new producto(06, "Reebok", "Zapatilla", "img/zapatilla2.png",  "Adventure", 41, 5800, 1, 10 ));

inventario.push(new producto(07, "Adidas", "Zapatilla", "img/zapatilla3.png",  "Sport Team", 39, 7300, 1, 10 ));
inventario.push(new producto(08, "Adidas", "Zapatilla", "img/zapatilla3.png",  "Sport Team", 40, 7300, 1, 10 ));
inventario.push(new producto(09, "Adidas", "Zapatilla", "img/zapatilla3.png",  "Sport Team", 41, 7300, 1, 10 ));

inventario.push(new producto(10, "Adidas", "Campera", "img/campera10.png",  "Argentina", "M", 12500, 1, 10 ));
inventario.push(new producto(11, "Adidas", "Campera", "img/campera10.png",  "Argentina", "L", 12500, 1, 10 ));
inventario.push(new producto(12, "Adidas", "Campera", "img/campera10.png",  "Argentina", "XL", 12500, 1, 10 ));

inventario.push(new producto(13, "Adidas", "Campera", "img/campera11.png",  "River Plate", "M", 13700, 1, 10 ));
inventario.push(new producto(14, "Adidas", "Campera", "img/campera11.png",  "River Plate", "L", 13700, 1, 10 ));
inventario.push(new producto(15, "Adidas", "Campera", "img/campera11.png",  "River Plate", "XL", 13700, 1, 10 ));

inventario.push(new producto(16, "Adidas", "Campera", "img/campera12.png",  "Boca Juniors", "M", 11500, 1, 10 ));
inventario.push(new producto(17, "Adidas", "Campera", "img/campera12.png",  "Boca Juniors", "L", 11500, 1, 10 ));
inventario.push(new producto(18, "Adidas", "Campera", "img/campera12.png",  "Boca Juniors", "XL", 11500, 1, 10 ));


//Genero un objeto para la busqueda
const datosBusqueda = {
    marca2 : ' ',
 
    articulo2 : ' ',
  
 
 }

 //event para los select

//para leer el option de marca
marca1.addEventListener('change', e => {
    //console.log(e.target.value); lee lo que dice el option
    datosBusqueda.marca2 = e.target.value;
    //llamo a la funcion filtrar
    filtrar();
})

//para leer el option de articulo
articulo3.addEventListener('change', e =>{
    //console.log(e.target.value); lee lo que dice el option
    datosBusqueda.articulo2 = e.target.value;
    //llamo a la funcion filtrar
    filtrar();
})

//CREO LA LISTA PARA EL CARRITO
const listaCarrito = [];


//PAGINA PRODUCTOS

const FuncionAgregar = {
    
    agregarProducto:function (index) {
        
        for(let i = 0 ; i<inventario.length ; i++){

            if(i == index){
                //push sobre el carrito
                listaCarrito.push(inventario[i]); 
                alert(`SE AGREGO ${inventario[i].articulo} -- TALLE: ${inventario[i].talle}  AL PEDIDO`); 
               
            }
   
        }
        
    }
    
};
//FUNCION PARA ELIMINAR PRODUCTOS DEL CARRITO
const FuncionEliminar = {
    eliminarProducto:function (index2) {
        for(let i = 0 ; i<listaCarrito.length ; i++){
            if(i == index2){
                
                let prodLista = (`${listaCarrito [i].id}`);
                //BUSCO EL INDICE DEL PRODUCTO EN EL ARRAY CARRITO
                let indice = listaCarrito.indexOf(listaCarrito[i]);
                //ELIMINO EL PRODUCTO DEL ARRAY
                let eliminando = listaCarrito.splice(indice, 1);
                //OCULTO EL PRODUCTO CON JQUERY
                $(`.item${i}`).fadeOut();
                  
            }

        }
    }
    };


//AGREGANDO HTML A LA PAGINA PRODUCTOS EMBASE EL ARRAY

function mostrar( inventario ){
    //funcion para limpiar HTML luego de filtrar
    limpiarFiltrado();
    //recorro el inventario y creo el html
    inventario.forEach( prod1 => {

            //CREO UN DIV
            let div1 = document.createElement("div");
            //creo una clase
            div1.classList.add('card');
            //CREO EL HTML
            div1.innerHTML = 
            `
                 <div class="imagen__producto">
                   <img src='${prod1.imagen}' , alt='${prod1.detalle}'>
                 </div>
                            <p>${prod1.marca}</p>
                            <p>${prod1.detalle}</p>
                            <p>TALLE: ${prod1.talle}</p>
                            <div class="productos__precio">
                            <p>$${new Intl.NumberFormat("de-DE").format(prod1.precio)}</p>
                            <p class="cuotas" >12 cuotas sin interes de</p>
                            <p class="cuotas"> $${new Intl.NumberFormat("de-DE").format((prod1.precio / 12).toFixed(2))}</p>
                            </div>
                            <div class="botonComprar">
                                <p type="button" onclick="FuncionAgregar.agregarProducto(${(prod1.id) -1}), verCarritoProductos(), contador(), sumarTotal();">AÑADIR AL CARRITO</p>
                            </div>
        
            `
            ;
          //LO AGREGO
           resultado.appendChild(div1);

    })
    
    }

function limpiarFiltrado(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function limpiarLocalStorage(){
    while(CarritoAlmacenado.firstChild){
        CarritoAlmacenado.removeChild(CarritoAlmacenado.firstChild);
    }
}

//funcion general para filtrar
function filtrar(){
    const resultado = inventario.filter( filtrarmarca ).filter( filtrararticulo );
    mostrar(resultado);
}

//funcion' hija' de filtrar-- para filtrar por marca
function filtrarmarca(inventario){
    if(datosBusqueda.marca2){
        return inventario.marca === datosBusqueda.marca2;
    }
    return inventario;
}
//funcion 'hija' de filtrar-- para filtrar por articulo
function filtrararticulo(inventario){
    if(datosBusqueda.articulo2){
        return inventario.articulo === datosBusqueda.articulo2;
    }
    return inventario;
}
 
//agregar del localStorage al carrito
const CarritoAlmacenado = JSON.parse(localStorage.getItem('carrito')) || [];
console.log(CarritoAlmacenado)
for(item1 of CarritoAlmacenado){

         listaCarrito.push(item1);

            }
 
                           
    

//FUNCION PARA VER CARRITO EN LA PAGINA PRODUCTOS

function verCarritoProductos(){
    limpiarHTML2();
    limpiarTotalPrecio();

    //itero y creo el contador para sumar todos los precios de los productos del carrito
    TotalPagar1 = 0;
for(item5 of listaCarrito){
    TotalPagar1 += item5.precio;
}

const verResultado = document.createElement('p');
verResultado.innerHTML = 
`
<p> Subtotal: $${new Intl.NumberFormat("de-DE").format(TotalPagar1)} </p>

`
;
totalCarrito1.appendChild(verResultado);
//itero y creo el carrito 
    for( i=0; i<listaCarrito.length; i++){
        const verCarro = document.createElement('tr');
        verCarro.classList.add(`item${i}`);
        verCarro.innerHTML = 
        `
        <th>
        ${listaCarrito[i].articulo}
        </th>

         <th>
         <div class="tabla__articulo">
         <img src="${listaCarrito[i].imagen}" alt=""> 
         </div>
          </th>

        <th>
        ${listaCarrito[i].detalle}
        </th>

        <th>
        ${listaCarrito[i].talle}
        </th>

        <th>
        $${new Intl.NumberFormat("de-DE").format(listaCarrito[i].precio)}
        </th>

        <th>
        ${listaCarrito[i].cantidad}
        </th>

        <th>
        <div class="tabla__botones">
        <img src="img/botonMenos.png"  

        onclick =
        
        "
        FuncionEliminar.eliminarProducto(${i}),
        verCarritoProductos(),  
        sumarTotal(), 
        contador() ">
         </div>
         </th>

        `
        
        ;
        //LO AGREGO
        contenedorCarrito2.appendChild(verCarro);

           }
}




//FUNCION PARA GUARDAR TODO EL CONTENIDO DEL CARRITO EN EL localStorage--lo coloco en el boton VAMOS A LA CAJA
function sincronizarStorage(){
     localStorage.setItem('carrito', JSON.stringify(listaCarrito));
}
function sincronizarStoragePrecio(){
    localStorage.setItem('precio', JSON.stringify(listaCarrito.precio));
}


function sumarTotal(){   
for(i=0; i<listaCarrito.length; i++){
    limpiarTotal();
    const total = i + 1 ;

    const suma = document.createElement('p');
    suma.innerHTML = 
    `
    <p> Total de Productos: ${total} </p>
    `
    ;
    totalProductosCarrito.appendChild(suma);
}
};

//creo el contador para el carrito
function contador(){
    
    for(i=0 ; i<listaCarrito.length; i++){
            let numero = document.createElement('p')
            numero.classList.add(`contador${i}`)
            numero.innerHTML = `<p>${i+1}</p> `;
            contadorCarrito.appendChild(numero);
       
    }
    
}


// FUNCION PARA LIMPIAR CARRITO ACUMULADO EN LA PAGINA PRODUCTOS
function limpiarHTML2(){
    // forma lenta -- contenedorCarrito.innerHTML = '';

    while(contenedorCarrito2.firstChild){
        contenedorCarrito2.removeChild(contenedorCarrito2.firstChild)
    }
}
function limpiarTotal(){
    while(totalProductosCarrito.firstChild){
        totalProductosCarrito.removeChild(totalProductosCarrito.firstChild)
    }
}
function limpiarTotalPrecio(){
    while(totalCarrito1.firstChild){
        totalCarrito1.removeChild(totalCarrito1.firstChild)
    }
}





            
