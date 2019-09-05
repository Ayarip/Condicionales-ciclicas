let btncalcular = document.getElementById('btncalcular');

Function EventListener() {
    btncalcular.addEventListener('click', calcdistanc);
}

Function calcdistanc() {
    let metros = Number(document.getElementById(metros).value);
    let velocidad = Number(document.getElementById(velocidad).value);
    let tiempo = Number(document.getElementById(tiempo).value);

    let resultadocalcdistanc = 0;

    resultadocalcdistanc = (velocidad * tiempo);
    let imprimirresultado = document.getElementById('resultado');
    imprimirresultado.innerHTML = resultadocalcdistanc;
}