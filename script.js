// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

const kmToDestination = prompt("Quanti KM devi percorrere?");
const passengerAge = prompt("Qual\'è l\'età del passeggero?");
const pricePerKm = 0.21;
const minorDiscount = 20;
const over65Discount = 40;
let ticketPrice;
let priceCalculation;
let totalKmPrice = kmToDestination * pricePerKm;

if(passengerAge > 65){
  priceCalculation = (totalKmPrice / 100) * (100 - over65Discount);
} else if (passengerAge < 18){
  priceCalculation = (totalKmPrice / 100) * (100 - minorDiscount);
} else {
  priceCalculation = totalKmPrice;
}

// Output del prezzo finale
ticketPrice = priceCalculation.toFixed(2);
console.log(`Il prezzo del biglietto è: ${ticketPrice}€`);
alert(`Il prezzo del biglietto è: ${ticketPrice}€`)