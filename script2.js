const resumenCompra = document.querySelector('#tablaCompra2 tbody');
const resumenTotal = document.querySelector('.ResumenTotal');



//traigo todo el array del localStorage y lo guardo en CarritoAlmacenado
const CarritoAlmacenado = JSON.parse(localStorage.getItem('carrito')) || [];


//CREO LA TABLA DONDE IRA EL DETALLE DE LOS PRODUCTOS COMPRADOS
for(item3 of CarritoAlmacenado){
    const verCarro3 = document.createElement('tr');

    verCarro3.innerHTML = 
    `
    <th>
    <div class="Producto__Tabla">

    <div class="tabla__articulo">
    <img src="${item3.imagen}" alt=""> 
    </div>

    <div class="tabla__articulo">
    ${item3.detalle}
    </div>

    </div>

     </th>

    <th>
    ${item3.talle}
    </th>

    <th>
    $${new Intl.NumberFormat("de-DE").format(item3.precio)}
    </th>

    <th>
    ${item3.cantidad}
    </th>

    <th>
    $${new Intl.NumberFormat("de-DE").format(item3.precio)}
    </th>

    `
    ;
    //LO AGREGO
    resumenCompra.appendChild(verCarro3);

    
       }

//CREO EL RESUMEN DE LA COMPRA

           TotalPagar = 0;
           //itero el array del localStorage y creo HTML
           for(item4 of CarritoAlmacenado){
                TotalPagar +=  item4.precio;
           }

           const verCarro4 = document.createElement('h3');
    
           verCarro4.innerHTML = 
           `
           <!--TITULO subtotal-->
           <h3 >Subtotal : $${new Intl.NumberFormat("de-DE").format(TotalPagar)}  </h3>

           <!--TITULO total-->
           <h2 class="Subtotal">Total : $${new Intl.NumberFormat("de-DE").format(TotalPagar)}</h2>

           <!--TITULO cuotas sin interes--> 

           <h3 class="cuotasSinInteres__Titulo"> CUOTAS SIN INTERES </h3>
           <div class="cuotasSinInteres">
         
           <!-- cuotas sin interes --> 
           <!--cambio a formato ingles para que se vean los puntos y comas y utilizo solo dos decimales despues de la coma--> 

           <h3 >3 Cuotas de : $${new Intl.NumberFormat("de-DE").format((TotalPagar / 3).toFixed(2))} <a href="compraFinalizada.html" class="finalizarCompra1" onclick = ' borrarLocalStorage2()' > COMPRAR</a></h3>
           <h3 >6 Cuotas de : $${new Intl.NumberFormat("de-DE").format((TotalPagar / 6).toFixed(2))}  <a href="compraFinalizada.html" class="finalizarCompra1" onclick = ' borrarLocalStorage2()'> COMPRAR</a></h3>
           <h3 >12 Cuotas de : $${new Intl.NumberFormat("de-DE").format((TotalPagar / 12).toFixed(2))}  <a href="compraFinalizada.html" class="finalizarCompra1" onclick = ' borrarLocalStorage2()'> COMPRAR</a></h3>

           </div>
           <!--Boton cancelar compra--> 
           <a href="productos.html" onclick = ' borrarLocalStorage()' >CANCELAR COMPRA</a>
           `
           ;
           //LO AGREGO
           resumenTotal.appendChild(verCarro4);

           //funcion que me permite borrar todo el localStorage
           function borrarLocalStorage(){
               localStorage.removeItem('carrito');
               alert('SE CANCELO LA COMPRA');
           }
           //funcion que me permite borrar todo el localStorage
           function borrarLocalStorage2(){
            localStorage.removeItem('carrito');
            alert('Procesando Compra...');
        }
       