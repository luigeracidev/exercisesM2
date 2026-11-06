/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/
/* SCRIVI QUI LA TUA RISPOSTA

function crazySum(num1, num2) {
    if (num1 === num2) {
        let sum = (num1 + num2) * 3
        return sum
    } else {
        let sum = num1 + num2
        return sum
    }
}

let numberOne = parseInt(prompt("Inserisci un numero intero"))
let numberTwo = parseInt(prompt("Inserisci un numero intero"))

let sumPrint = crazySum(numberOne, numberTwo)
console.log(sumPrint)

*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA
function boundary(num1) {
    if (num1 >= 20 && num1 <= 100 || num1 === 400) {
        let validation = true
        return validation
    } else {
        let validation = false
        return validation
    }
}

let numValidation = parseInt(prompt("Inserisci un numero intero"))
let finalValidation = boundary(numValidation)

console.log(finalValidation)

*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA

function reserveString(str) {
    return str.split("").reverse().join("")
}

let str = prompt("Scrivi la tua parola")
let finalStr = reserveString(str)
console.log(finalStr)

*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA DA FARE

let frase = "ciao come stai"
let paroleSuddivise = frase.split(" ") //otteniamo un array con tutte le parole
let parola //ciclo con cui otteniamo ogni singola parola
let primaLetteraMod //ciclo con cui otteniamo ogni singola lettera iniziale e la mettiamo in maiuscolo
let parolaMod //crea la combinazione tra la prima lettera modificata e il resto della parola
let fraseMod = "" //crea la combinazione della frase


function upperFirst(testo) {
    for (i = 0; i < testo.length; i++) {
        parola = testo[i]
        primaLetteraMod = parola.charAt(0).toUpperCase()
        parolaMod = primaLetteraMod + parola.slice(1)
        fraseMod += parolaMod + " "
    }
    return fraseMod
}

let test = upperFirst(paroleSuddivise)

console.log(test)

*/


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA

const num = 11
let numUniti = ""
let numAr


function giveMeRandom(n) {
    for (i = 0; i < n; i++) {
        const numR = Math.floor(Math.random() * 11)
        const numString = numR.toString()
        numUniti += numString
        numAr = numUniti.split("")
    }
    return numAr
}

const fnGiveMeRandom = giveMeRandom(num)

console.log(fnGiveMeRandom)

*/


//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

const base = 2
const altezza = 20

function area(l1, l2) {
    risultato = l1 * l2
    return risultato
}

let fnArea = area(base, altezza)

console.log(fnArea)

*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA

function crazyDiff(num) {
    let calcoloDiff = (num - 19)
    let diff = Math.abs(calcoloDiff)
    if (diff > 19) {
        let moltiplicazione = diff * 3
        console.log(`${moltiplicazione} è la moltiplicazione di ${diff} (differenza con numero 19) * 3`)
    } else {
        console.log(`${diff} è differenza con il numero 19`)
    }
}

let fnCrazyDiff = crazyDiff(100)
console.log(fnCrazyDiff)

 */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA

function codify(stringa) {
    if (stringa.startsWith("code") === true) {
        let strWithCode = stringa
        return strWithCode
    } else {
        let strWithCode = "code" + " " + stringa
        return strWithCode
    }
}

let fnCodify = codify("come stai?")
console.log(fnCodify)

*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/


/* SCRIVI QUI LA TUA RISPOSTA
function check3and7(num) {
    if (num % 3 === 0 || num % 7 === 0) {
        let risultato = true
        return risultato
    } else {
        let risultato = false
        return risultato
    }
}

let fnCheck3and7 = check3and7(16)
console.log(fnCheck3and7)

*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/
/* SCRIVI QUI LA TUA RISPOSTA
function cutString(str) {
    return str.slice(1, -1)
}

let fncutString = cutString("ciao come stai")
console.log(fncutString)


 */
