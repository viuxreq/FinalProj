

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
       <div>
       <a href="https://instagram.com/"><img src="img/botonInstagram.gif" width="50%" alt="" ></a>
      </div>
      <div >
        <a href="https://facebook.com/"><img src="img/botonFace.gif" width="50%" alt="" ></a>
      </div>
      <div >
      <a href="https://whatsapp.com/"><img src="img/botonWhat.gif" width="50%" alt="" ></a>
      </div>`);
      $(".redesSociales").css({ 'display':'flex'});

