

//jQuery
//para asegurarme que se carga todo MENOS las imagenes UTILIZO ...
$(document).ready(function(){

  $('#tituloProductos').css({background:'black', color:'white', 'padding':'2rem'})

});

//para asegurarme que se carga TODO UTILIZO ...

$(window).ready( ()=>{
  console.log("SE CARGO TODO...");
})
  //PREPEND carga como el primer hijo
  // modificando el css del footer
  $(".derechos").prepend("<p>Simulador CoderHouse 2022 ©  - Todos los Derechos Reservados - </p>");
  $(".derechos").prepend("<p> - Created by Cáceres Requena - </p>");
  $(".derechos p").css({background:'black', color:'white', 'font-size':'1.5rem', 'text-align':'center', 'padding':'1rem'});

  //APPEND carga como el ultimo hijo
  //creando las imagenes de redes sociales

  $(".redesSociales").append(`
       <div >
        <img src="img/botoninstagram.gif" width="40%"  alt=""></img>
      </div>
      <div >
        <img src="img/botonFace.gif" width="40%"  alt=""></img>
      </div>
      <div >
        <img src="img/botonWhat.gif" width="40%"  alt=""></img>
      </div>`);
      $(".redesSociales").css({ 'display':'flex'});

