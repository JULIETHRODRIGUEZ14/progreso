let progreso = document.querySelector(".progreso")
let porcentaje = document.querySelector(".porcentaje");
let celebracion = document.querySelector("body");
let avance = 0;


/*variable tiempo guardar la funcion de intervalo, que cuando se active el avance debe sumarse de 1 a 1*/
let tiempo = setInterval(()=>{
    avance += 1;
    progreso.style.width = `${avance}%`

    if(avance === 100){
        clearInterval(tiempo)
        celebracion.classList.add("celebracion")
    }

    porcentaje.textContent = `${avance}%`
    
},75);




/*que tome progreso en la barra y porfavor tome un estilo al ancho de la barra de progreso y como tiene que avanzar de acuerdo al avance de esa forma se va llenando */
/*cuando avance llegue 100 el intervalo pare cuando el intervalopare pare en 100 no se refresque la pantalla*/
/*class que agrege la clase celebracion donde esta la imagen cuando el contador llegue a  100 para y va agregar la animacion que puse en body*/
/*porcentaje debemos registrar como avanza el numero se vea 1 2 ... concadena el % para que se vea en el html */
/*se refresque en 75ms para que avance mas rapido y la barra llene*/