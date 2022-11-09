var result = document.getElementById('result');
var logBtn = document.getElementById('logBtn');
var delBtn = document.getElementById('deleteBtn');

//check iniziale local storage
const inizio = result.innerHTML = localStorage.getItem('utente', input);

if(inizio == '' || inizio == null) {
    result.innerHTML = 'No data';
} else {
    result.innerHTML = `Ciao, ${localStorage.getItem('utente', input)}`;
}

//click value
logBtn.addEventListener('click', () => {
    let input = document.getElementById('input').value;
    //submit value ricevuto
    result.innerHTML = input;
    //check spazio vuoto
    if (input == '') {
        result.innerHTML = 'Devi inserire un nome signor nessuno >:C';
    } else {
        result.innerHTML = `Ciao, ${input}`;
    }
    //salvataggio nome in storage
    localStorage.setItem('utente', input);
    //clear inputfield
    document.getElementById('input').value = '';
});

//click delete
delBtn.addEventListener('click', () => {
    localStorage.removeItem('utente');
    result.innerHTML = 'No data';
})