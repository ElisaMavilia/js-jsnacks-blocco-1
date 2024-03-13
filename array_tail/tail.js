/* Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
Stampiamo poi gli ultimi 5 elementi dell'Array
Bonus:
Chiediamo all'utente quanti elementi dell'array dovremo stampare
Suggerimenti:
Probabilmente conviene controllare che il numero di elementi della coda non sia più grande del numero di elementi totali dell'array */

let numbers = [];
let userNumbers = parseInt(prompt("Quanti numeri vuoi inserire?"));
console.log (userNumbers);
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}



let randomNumbers = getRndInteger(1, 100);
console.log (randomNumbers);

/* /* for (let i = 1; t=100; i<t) i++; { */
    /* randomNumbers= userNumbers.push (Math.round(Math.random() * t));
} */







