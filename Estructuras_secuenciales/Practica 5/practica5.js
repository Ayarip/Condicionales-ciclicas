let btncalcular = document.getElementById('btncalcular');

function EventListener() {
    btncalcular.addEventListener('click', calcularpuntaje);
}

function calcularpuntaje() {
    let aciertos = Number(document.getElementById(aciertos).value);
    let incorrectos = Number(document.getElementById(incorrectos).value);
    let blanc = Number(document.getElementById(blanc).value);

    let resultadopuntaje = 0;

    aciertos = aciertos * 4;
    incorrectos = incorrectos * (-1);
    blanc = blanc * 0;

    resultadopuntaje = aciertos + blanc - incorrectos;
    let imprimirresultado = document.getElementById('resultado');
    imprimirresultado.innerHTML = resultadopuntaje;
}