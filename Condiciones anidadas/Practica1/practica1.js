let btncomparardatos = document.getElementById('comparardatos');

eventlistener();

function eventlistener() {
    btncomparardatos.addEventListener('click', comparardatos);

}

function comparardatos() {
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);
    let numero3 = Number(document.getElementById('numero3').value);

    let imprimirresultado = document.getElementById('resultado');

    if (numero1 > numero2) {

        if (numero1 > numero3) {
            imprimirresultado.innerHTML = `
            <h4 class="alert-headimg text-info">El numero ${numero1} es el nùmero mayor </h4>`
        } else {
            imprimirresultado.innerHTML = `
            <h4 class="alert-headimg text-info">El numero ${numero3} es el nùmero mayor </h4>`
        }
    } else {
        if (numero2 > numero3) {
            imprimirresultado.innerHTML = `
            <h4 class="alert-headimg text-info">El numero ${numero2} es el nùmero mayor </h4>`
        } else {
            imprimirresultado.innerHTML = `
            <h4 class="alert-headimg text-info">El numero ${numero3} es el nùmero mayor </h4>`
        }
    }
}