var nome = prompt("qual è il tuo nome?");
var cognome = prompt("qual è il tuo cognome?");
var colorePreferito = prompt("qual è il tuo colore preferito?");
var numero = 19;
var password = nome + cognome + colorePreferito + numero;



// alert(password);

console.log(nome);
console.log(cognome);
console.log(colorePreferito);
console.log(numero);
console.log(password);

document.getElementById('pass').innerHTML = password;

// document.writeln(password);
