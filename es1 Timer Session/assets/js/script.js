var testo = document.getElementById('testo');
var tempo = sessionStorage.getItem('tempo');

incrementa = () => {
    let aggiunto = tempo ++;
    testo.innerHTML = `${aggiunto} secondi di sessione aperta.`;
    sessionStorage.setItem('tempo', aggiunto);
}

setInterval(incrementa, 1000);