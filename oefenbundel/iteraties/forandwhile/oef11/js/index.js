// Vraag aan de gebruiker hoeveel Fibonacci-getallen er moeten worden weergegeven
const aantalGetallen = parseInt(prompt("Hoeveel Fibonacci-getallen wil je weergeven?"));

// Initialisatie van de eerste twee getallen in de reeks
let vorigGetal = 0;
let huidigGetal = 1;

// Loop om de Fibonacci-getallen te berekenen en weer te geven
for (let i = 0; i < aantalGetallen; i++) {
    document.write(vorigGetal + ", ");

    let volgendGetal = vorigGetal + huidigGetal;
    vorigGetal = huidigGetal;
    huidigGetal = volgendGetal;
}

// Sluit de reeks af met een puntkomma
document.write("...");
