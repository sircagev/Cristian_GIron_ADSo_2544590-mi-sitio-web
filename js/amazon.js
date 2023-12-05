let calificacion1 = document.getElementById('calificacion1');
let calificacion2 = document.getElementById('calificacion2');
let calificacion3 = document.getElementById('calificacion3');
let calificacion4 = document.getElementById('calificacion4');
let calificacion5 = document.getElementById('calificacion5');

let bar1 = document.getElementById('porcentaje1');
let bar2 = document.getElementById('porcentaje2');
let bar3 = document.getElementById('porcentaje3');
let bar4 = document.getElementById('porcentaje4');
let bar5 = document.getElementById('porcentaje5');

let spanPor1 = document.getElementById('porcen1');
let spanPor2 = document.getElementById('porcen2');
let spanPor3 = document.getElementById('porcen3');
let spanPor4 = document.getElementById('porcen4');
let spanPor5 = document.getElementById('porcen5');

let btnGraficar = document.getElementById('btnGraficar');

btnGraficar.addEventListener('click', function(){

    let totalVotos = Number(calificacion1.value) + Number(calificacion2.value) + Number(calificacion3.value) + Number(calificacion4.value) + Number(calificacion5.value);

    let porcentaje1 = Math.floor((parseFloat(calificacion1.value)/totalVotos)*100);
    let porcentaje2 = Math.floor((parseFloat(calificacion2.value)/totalVotos)*100);
    let porcentaje3 = Math.floor((parseFloat(calificacion3.value)/totalVotos)*100);
    let porcentaje4 = Math.floor((parseFloat(calificacion4.value)/totalVotos)*100);
    let porcentaje5 = Math.floor((parseFloat(calificacion5.value)/totalVotos)*100);

    console.log(porcentaje1);
    console.log(porcentaje2);
    console.log(porcentaje3);
    console.log(porcentaje4);
    console.log(porcentaje5);

    bar1.style.width = porcentaje1+"%";
    bar2.style.width = porcentaje2+"%";
    bar3.style.width = porcentaje3+"%";
    bar4.style.width = porcentaje4+"%";
    bar5.style.width = porcentaje5+"%";

    spanPor1.innerHTML = porcentaje1+"%";
    spanPor2.innerHTML = porcentaje2+"%";
    spanPor3.innerHTML = porcentaje3+"%";
    spanPor4.innerHTML = porcentaje4+"%";
    spanPor5.innerHTML = porcentaje5+"%";

});