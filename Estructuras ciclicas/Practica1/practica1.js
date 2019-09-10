sumacantidades();

function sumacantidades(){
    let b = 0;

    // Esctructora ciclica la cual se compone de un (variable inicializada, condicion logica e incrementador de la  variable, la cual nos ayuda a la ejecucion repetitiva de un bloque de codigo)
    for( let x=1; x<=10; x++){
        b += x;
        // console.log (`${b}+${x}`)
        // console.log(`resultado: ${b}`)
        // Se crea el elemento li por el metodo CreateEelement y se asigna a la variable newli
        let newli=document.createElement('li');
        // Se asigna el atributo id y class a la variable newli
        newli.setAttribute("id",`listan${x}`);
        newli.setAttribute("class", "list-group-item")
        // Se crea el nodo de texto por medio del metodo Createext
        let newcontent = document.createTextNode(b);
        newli.appendChild(newcontent);
        // Se inserta un hijo por medio del metodo appenChild a la variable newli
        let listadesordenada = document.getElementById('listanumerica'); 
        listadesordenada.appendChild(newli);






        
    }
}