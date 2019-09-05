let btncalcular = document.getElementById('btncalcular');
EventListener();

function EventListener() {
    btncalcular.addEventListener('click', obtenerarea);
}

function obtenerarea() {
    let LadoA = Number(document.getElementById('LadoA').value);
    let LadoB = Number(document.getElementById('LadoB').value);
    let LadoC = Number(document.getElementById('LadoC').value);

    let resultadoarearectangulo = 0;
    let resultadoareatriangulo = 0;
    let resultadosumaareas = 0;

    resultadoarearectangulo = LadoB * LadoC;
    resultadoareatriangulo = ((LadoA - LadoC) * LadoB) / 2;
    resultadosumaareas = resultadoarearectangulo + resultadoareatriangulo;
    let imprimirresultado = document.getElementById('resultado');
    imprimirresultado.innerHTML = resultadosumaareas;

}