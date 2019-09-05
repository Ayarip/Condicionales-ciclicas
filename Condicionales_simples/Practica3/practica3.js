let resultado = document.getElementById('resultado');

eventlistener();

function eventlistener() {
    resultado.addEventListener('click', edadmay);
}

function edadmay() {
    let edad1 = (document.getElementById('edad1').value);
    let edad2 = (document.getElementById('edad2').value);
    let resultado = (document.getElementById('resultado'));

    if (edad1 > edad2) {
        let imprimirresultado = document.getElementById('resultado1');
        imprimirresultado.innerHTML = "La primer edad es mayor"
    } else {
        let imprimirresultado1 = document.getElementById('resultado1');
        imprimirresultado1.innerHTML = "La segunda edad es la mayor"
    }
}

function difedad() {
    if (edad1 > edad2) {
        let edad1 = document.getElementById('edad1').value;
        let edad2 = document.getElementById('edad2').value;
        let imprimirresultado = document.getElementById('resultado2');

        limprimirresultado2.innerHTM = edad1 - edad2;
    } else {
        let imprimirresultado = document.getElementById('resultado2');

        limprimirresultado2.innerHTM = edad2 - edad1;
    }
}