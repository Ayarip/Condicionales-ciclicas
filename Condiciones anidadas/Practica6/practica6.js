let btnautobuses = document.getElementById('calcular');
EventListener();

function EventListener(){
    autobuses.addEventListener('click',calcular);
}

let autobuses = document.getElementById('autobuses').value;

let kilometros = 0;
let resultado = 0;
let personas = 0;

function calcular(){
    if (personas>=20){
        if (autobuses==autobusesa){
            resultado=kilometros*1.5/personas
            resultado.innerHTML=resultado
        }
        if (autobuses==autobusesb){
        resultado=kilometros*2/personas
        resultado.innerHTML=resultado
        }
        if (autobuses==autobusesc){
            resultado=kilometros*2.5/personas
            resultado.innerHTML=resultado
        }
        if (autobuses==autobusesd){
            resultado=kilometros*3/personas
            resultado.innerHTML=resultado
        }
        }else{
            if (autobuses==autobusesa){
                resultado=kilometros*1.5/20
                resultado.innerHTML=resultado
            }
            if (autobuses==autobusesb){
            resultado=kilometros*2/20
            resultado.innerHTML=resultado
            }
            if (autobuses==autobusesc){
                resultado=kilometros*2.5/20
                resultado.innerHTML=resultado
            }
            if (autobuses==autobusesd){
                resultado=kilometros*3/20
                resultado.innerHTML=resultado
            }
        }
    }
