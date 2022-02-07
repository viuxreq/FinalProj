
//GET

let datos;

    $.get("https://reqres.in/api/users?page=2").done(function(resultado, estado){
        console.log(estado);
        //CHEQUEO SI SE CONECTO
        if(estado == "success"){
            datos = resultado.data;
            //ITERO
            datos.forEach(usuario => {
                //CREO LOS CARD
                $(".cardContactos").append(
                 `
                <div class="sucursal">
                <div class="sucursalDetalle" style="font-weight: 700;"> ${usuario.first_name} ${usuario.last_name}</div> 
                <div class="sucursalDetalle">${usuario.email} </div>
                <div class="sucursalDetalle"> <img src="${usuario.avatar}"> </div>
                </div>
        
                `
                );
            });
        }
    });


