btncalcular = document.getElementById('btncalcular');
let btncalcular2 = document.getElementById('btncalcular2')

function EventListener() {
    btncalcular.addEventListener('click', obtenerArea);
    btncalcular2.addEventListener('click', obtenerAreaSimplificada);
}

function obtenerAreaSimplificada() {
    console.time('obtenerAreaSimplificada');
    let radio = Number(document.getElementById('radiocirculo').value);
    let resultado = 0;
    // se invoca el objeto Math y se utiliza su propiedad pi( el cual nos manda el valor de dicha constante) y su metodo pow (eleva un elemento numerico hacia la potencia que se le solicita)
    resultado = Math.PI * Math.pow(radio, 2);
    letresultadoimprimir = document.getElementById(`resultado`);
    resultadoimprimir.innerhtml = resultado;
    console.timeEnd('obtenerAreaSimplificada');
}

function obtenerArea() {
    // Se declara un elemento el cual funcionara para obtener el calculo de pi
    console.time('obtenerArea');
    const pi = 3.1416;
    let radio = Number(document.getElementById('radiocirculo').value);
    let resultado = 0;
    resultado = pi * (r * r);
    let = resultadoimprimir = document.getElementById('resultado');
    resultadoimprimir.innerhtml = resultado;
    console.timeEnd('obtenerArea');
}