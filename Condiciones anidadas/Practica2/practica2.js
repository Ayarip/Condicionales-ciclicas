let inputnumber = document.getElementById('numero');
let imprimir = document.getElementById('resultado');

EventListener();

function EventListener() {
    inputnumber.addEventListener('keypress', calcularcifras);
    inputnumber.addEventListener('blur', calcularcifrasblur);
}

function calcularcifrasblur() {
    if (Number(inputnumber.value) <= 9) {
        imprimir.innerHTML = `<p> El nùmero tiene un digito</p>`
        return
    }
    if (Number(inputnumber.value) <= 99) {
        imprimir.innerHTML = `<p> El nùmero tiene 2 digitos</p>`
        return
    }
    if (Number(inputnumber.value) <= 999) {
        imprimir.innerHTML = `<p> El nùmero tiene 4 digitos</p>`
        return
    }
    if (Number(inputnumber.value) < 10000) {
        imprimir.innerHTML = `<p class="text-danger"> ERROR </p>`
        return
    }
}

function calcularcifras(event) {
    if (event.key == "Enter") {
        console.log('x');

        if (Number(inputnumber.value) > 999) {
            imprimir.innerHTML = "Error"
        }

        if (Number(inputnumber.value) <= 999) {
            imprimir.innerHTML = `<p>El numero ${numero.value} tiene 3 cifras </p>`

        }
        if (Number(inputnumber.value) <= 99) {
            imprimir.innerHTML = `
            <p>El numero ${numero.value} tiene 2 cifras </p>`

        }
        if (Number(inputnumber.value) <= 9) {
            imprimir.innerHTML = `
            <p>El numero ${numero.value} tiene 1 cifra </p>`

        }
    }

}