//Attraverso un prompt chiedere all'utente la sua email.
var email = prompt('Ciao! inserisci la tue email e verifichiamo se sei in lista.');
console.log(email);
//Creare un array contenente una lista di email.
var iscritti = ['matteo@gmail.com', 'luca@gmail.com', 'sofia@gmail.com', 'antonio@hotmail.com', 'franco@gmail.com'];
console.log(iscritti);
//Controllare se l'email dell'utente è presente nell'array e stampare un messaggio appropriato.
var email_presente = false;
for (var i = 0; i < iscritti.length; i++) {
  if (email == iscritti[i]) {
    console.log('ok');
    email_presente = true;
  }
}
if (email_presente == true) {
  document.getElementById('ok').innerHTML = 'Fantastico sei in lista! Ci vediamo al concerto!';
} else {
  document.getElementById('ok').innerHTML = 'Mi dispiace, non sei in lista.';
}

//rendere il display visibile dopo l'invio
document.getElementById('stampa-risultato').setAttribute('class','visible');
