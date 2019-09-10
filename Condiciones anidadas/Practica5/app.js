let btncalcular = document.getElementById('calcular');
EventListener();

function EventListener() {
    btncalcular.addEventListener('click', calcularresultado);
}


function calcularresultado() {

    let costotraje = Number(document.getElementById('costotraje').value);
    let descuento = 0;
    let resultado = document.getElementById('resultado');
    console.log(costotraje)
    if (costotraje >= 3600) {

        descuento = (costotraje - (costotraje * 0.16));
        resultado.innerText = descuento;

    } else {
        descuento = costotraje - (costotraje * 0.07);
        resultado.innerHTML = descuento;
    }
}