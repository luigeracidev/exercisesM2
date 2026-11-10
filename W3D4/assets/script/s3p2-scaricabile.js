// Il tuo compito è creare un sito e-commerce per Smartphones.
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto.
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// FATTO ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// FATTO ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// FATTO ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// FATTO ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// FATTO ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// FATTO ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// FATTO ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// FATTO ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// FATTO ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
// FATTO ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// FATTO ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata


function h1Mod() {
    const h1 = document.querySelector("h1")
    h1.innerText = "Negozio di Luigi"
}

// invocazione funzione h1Mod
// h1Mod()


function backgroundChange() {
    const backgroundChange = document.querySelector("body")
    backgroundChange.style.backgroundColor = "red"
}


//invocazione funzione backgroundChange
//backgroundChange()

function changeAddressFooter() {
    const changeAddFooter = document.querySelector("footer p:last-child")
    changeAddFooter.innerText = "Via Garibaldi 94, 95121 - Catania"
}

//invocazione funzione changeAddressFooter
//changeAddressFooter()


function addClass() {
    const AddClassLink = document.querySelectorAll("table tbody tr th a")
    for (i = 0; i < AddClassLink.length; i++) {
        AddClassLink[i].classList.add("add-class")
    }
}

//invocazione addClass
//addClass()

function onoff() {
    const createClass = document.querySelectorAll("div.table-image img")
    for (i = 0; i < createClass.length; i++) {
        createClass[i].classList.toggle("class-image")
    }
}

//scrivere differenti color nel css abbinati ad una class
//creiamo un aggiunta class per ogni colore
//

function changeColorPrice() {
    const elementsPrice = document.querySelectorAll("tbody tr th:nth-child(4)")
    const color = ["price-yellow", "price-blue", "price-green", "price-magenta"]
    const numRandom = Math.floor(Math.random() * 4)


    for (let element of elementsPrice) {
        element.classList.add(color[numRandom])
    }

}