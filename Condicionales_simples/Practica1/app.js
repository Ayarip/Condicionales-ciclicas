let btnverificarstatus = document.getElementById('verificarstatus');
EventListener();

function EventListener() {
    btnverificarstatus.addEventListener('click', verificarstatus);
}

function verificarstatus() {
    let calificaciòn = (document.getElementById('calificaciòn').value);
    if (calificaciòn > 8) {
        let imprimirresultado = document.getElementById('imprimircalificacion');
        imprimirresultado.innerHTML = 'Aprobado';
    } else {
        let audio = document.getElementById('audiorep');
        audio.play();
        let imprimirresultado = document.getElementById('imprimircalificacion');
        imprimirresultado.innerHTML = 'Reprobado'
    }

}