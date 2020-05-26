// Variabili
var cognomeUtente = prompt("Digitare il proprio cognome")
var cognomeValido = false;
var databaseCognomi = ["Bianchi","Rossi","Duzioni","Balsano","Verdi"]

// Verifica dei caratteri del cognome
while ((!isNaN(cognomeUtente)) || (cognomeUtente=="")) {
  alert("Attenzione, inserire un cognome valido")
  cognomeUtente = prompt("Digitare il proprio cognome")
}
// Filtro per procedere dopo convalida
cognomeValido = true;
// Processo di inserimento cognome nel database
if (cognomeValido) {
  cognomeDefinitivo = cognomeUtente.toUpperCase();
  console.log(cognomeDefinitivo)
  databaseCognomi.push(cognomeDefinitivo);
  databaseCognomi.sort();
}
// Messaggi di conferma
alert("La lista dei cognomi è: " + databaseCognomi)
alert("Il tuo cognome è il " + (databaseCognomi.indexOf(cognomeDefinitivo) + 1) + "°");
