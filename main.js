//Attraverso un prompt chiedere all'utente la sua email.
var email = prompt('Ciao! inserisci la tue email e verifichiamo se sei in lista.');
console.log(email);
//Creare un array contenente una lista di email.
var iscritti = ['matteo@gmail.com', 'luca@gmail.com', 'sofia@gmail.com', 'antonio@hotmail.com', 'franco@gmail.com'];
console.log(iscritti);
//Controllare se l'email dell'utente è presente nell'array e stampare un messaggio appropriato.
for (var i = 0; i < iscritti.length; i++) {
  if (email == iscritti[i]) {
    document.getElementById('ok').innerHTML = 'Fantastico sei in lista! Ci vediamo al concerto!';
  }
}

document.getElementById('stampa-risultato').setAttribute('class','visible');
