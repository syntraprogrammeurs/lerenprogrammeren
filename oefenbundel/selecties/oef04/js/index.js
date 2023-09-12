
// Vraag de gebruiker om hun geboortejaar en het lopende jaar
var geboortejaar = prompt("Voer je geboortejaar in:");
var lopendJaar = prompt("Voer het lopende jaar in:");

// Bereken de leeftijd
var leeftijd = lopendJaar - geboortejaar;

// Controleer of de leeftijd negatief is (bij ongeldige invoer)
if (leeftijd < 0) {
    console.log("Ongeldige invoer. Zorg ervoor dat het geboortejaar kleiner is dan het lopende jaar.");
} else {
    // Controleer of de gebruiker 18 jaar of ouder is
    if (leeftijd >= 18) {

        console.log("Vanaf nu mag, kan en beslis ik alles, binnen de wettelijke grenzen.");
    } else {
        console.log("Gelukkig heb ik mijn ouders die alles voor me regelen.");
    }
}
