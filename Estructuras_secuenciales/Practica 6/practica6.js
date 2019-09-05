btncalcular = document.getElementById('btncalcular');

function EventListener() {
    btncalcular.addEventListener('click', obtenerArea);
}

Function obtenerArea() {
    let LadoA = Number(document.getElementById('Lado A').value);
    let LadoB = Number(document.getElementById('Lado B').value);
    let LadoC = Number(document.getElementById('Lado C').value);
    let semiperimetro = Number(document.getElementById('semiperimetro').value);

    resultadoarea = 0;

    resultadoarea = Math.SQRT2((semiperimetro) * (semiperimetro - LadoA) * (semiperimetro - LadoB) * (semiperimetro - LadoC));
    let resultadoimprimir = document.getElementById('resoltado');
    resultadoimprimir.innerHTML = resultadoarea;
}