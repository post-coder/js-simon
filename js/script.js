/*
Sfruttiamo le timing functions per fare il conto alla rovescia per la pausa di questa mattina!
Ogni secondo il nostro countdown dovrà scalare fino alle 11:00 di stamattina!
*/


// memorizzazione elementi html
const secondsElement = document.querySelector("#seconds");
const minutesElement = document.querySelector("#minutes");
const hoursElement = document.querySelector("#hours");
const daysElement = document.querySelector("#days");



// memorizzo il momento attuale in una variabile
const now = new Date();
const nowTime = now.getTime();


// memorizzo la data bersaglio
const finalDate = new Date ("12-02-2024 11:23:45");
const finalDateTime = finalDate.getTime();

// finalDateTime: qui abbiamo memorizzato in maniera più semplice (per il computer) 
// la data el'orario prefissato per il countdown


// 1733133600000

// dobbiamo in qualche modo utilizzare il % (modulo)
// questo operatore ci aiuterà a dare un valore massimo ai secondi, minuti, ore ecc
// permettendoci di lavorare più chiaramente

// partendo da un valore in millisecondi,
// devo ottenere di volta in volta:

// secondi
const seconds = finalDateTime / 1000 % 60
// console.log(seconds);

// minuti
const minutes = Math.floor(finalDateTime / (1000 * 60) % 60);
// console.log(minutes);

// ore
// rimuovere il +1 in produzione
const hours = Math.floor(finalDateTime / (1000 * 60 * 60) % 24) + 1;
// console.log(hours) 

// giorni
const days =  Math.floor(finalDateTime / (1000 * 60 * 60 * 24) % 365)
// console.log(days)



// assegnazione dei valori in pagina
secondsElement.innerText = seconds;
minutesElement.innerText = minutes;
hoursElement.innerText = hours;
daysElement.innerText = days + " giorni,";