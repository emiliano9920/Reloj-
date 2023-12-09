"use strict";

//Funcion para añadir un 0 atras del numero menor a 10
const addZero = n =>{
    if (n.toString().length < 2) return "0".concat(n);
    return n;
}

const actualizarHora = ()=>{
    const time = new Date();
   let hora = addZero(time.getHours());
   let min = addZero(time.getMinutes());
   let seg = addZero(time.getSeconds());
   document.querySelector('.hora').textContent = hora;
   document.querySelector('.min').textContent = min;
   document.querySelector('.seg').textContent = seg;
}

//Para que se actualice ni bien carga la pagina ya que el interval demorara un segundo en comenzar
actualizarHora();

//Set interval consume muchos recursos por lo que se suelen usar librerias
setInterval(actualizarHora, 1000);
