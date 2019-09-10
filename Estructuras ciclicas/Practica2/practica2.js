let btnagregar = document.getElementById('btnagrear');
let calcular = document.getElementById('calcular');
let numeroinput=0;

eventlistener();

function eventlistener(){
    btnagregar.addEventListener('click', agregar);
    calcular.addEventListener('click', calcularprom)
}

function agregar(){

    numeroinput++;
    let DivRow=document.createElement('div');
    DivRow.setAttribute('class','row');

    let divcol=document.createElement('div');
    divcol.setAttribute('class','col-12');

    let divfromgroup=document.createElement('div');
    divfromgroup.setAttribute('class','form-group');

    let labelifg = document.createElement('label');

    let input = document.createElement('input');
    let textlabel = document.createTextNode(`Ingresa la edad del alumno ${numeroinput}`)
    labelifg.appendChild(textlabel);

    input.setAttribute('type','number');
    input.setAttribute('class','form-control');
    input.setAttribute('placeholder', 'Ingresa la clificaciòn del alumno');
    input.setAttribute('id', `edadalumno${numeroinput}`);

    let cajaalumnos = document.getElementById('cajaalumnos');
    cajaalumnos.appendChild(DivRow);

    DivRow.appendChild(divcol);
    divcol.appendChild(divfromgroup);
    divfromgroup.appendChild(labelifg);
    divfromgroup.appendChild(input);

}

function calcularprom(){
    let suma = 0;
    let promedio = 0;

    for(let x=1; x <=numeroinput; x++){
    let edad = Number(document.getElementById(`edadalumno${x}`).value);
    suma += edad;
    }
    promedio = suma/numeroinput;
    let imprimir = document.getElementById('imprimir');
    imprimir.innerText=promedio;
}