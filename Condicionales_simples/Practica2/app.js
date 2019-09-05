let nummayor = document.getElementById('nummayor');

let numero1 = document.getElementById('numero1');
let numero2 = document.getElementById('numero2');

eventlistener();

function eventlistener() {
    // Se asigna el evento change al input que pertenece el id "numero1"
    numero1.addEventListener('blur', validardatos);
    numero2.addEventListener('blur', validardatos);

}

// Estamos recibiendo el parametro event, debido que el metodo "addEventListener" esta invocando la funcion validardatos
function validardatos(evento) {
    console.log(event.target.value);

    // Se utilzo la funciòn IsNan para comprobar si el valor obtenido es un numero, en caso de que no sea un numero, se utilizo el metdodo para no permitirle al usuario cambiar de input

    if (isNaN(numero1.value)); {
        event.target.focus();
    }

    console.log(isNaN(event.target.value));
    console.log('x');
}

function compararvalores() {

    let imprimir = document.getElementById('imprimirmay')
    if (Number(numero1.value > numero2.value)) {
        imprimir.innerText = "El primer nùmero es el valor màs grande"
    } else {
        imprimir.innerText = "El segundo nùmero es el valor màs grande"
    }
}