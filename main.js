var email = prompt('Ciao! inserisci la tue email e verifichiamo se sei in lista.')
console.log(email);
var iscritti = ['matteo@gmail.com', 'luca@gmail.com', 'sofia@gmail.com', 'antonio@hotmail.com', 'franco@gmail.com']
console.log(iscritti);
for (var i = 0; i < iscritti.length; i++) {
  if (email == iscritti[i])
    console.log('ok');
  else {
    console.log('no');
  }
}
