// Vraag de gebruiker om hun geboortejaar en het lopende jaar
let geboortejaar = prompt("Voer je geboortejaar in:");
let lopendJaar = prompt("Voer het lopende jaar in:");

// Bereken de leeftijd
let leeftijd = lopendJaar - geboortejaar;

// Controleer of de gebruiker 18 jaar of ouder is
if (lopendJaar - geboortejaar >= 18) {
    document.write("Vanaf nu mag, kan en beslis ik alles, binnen de wettelijke grenzen.");
} else {
    document.write("Gelukkig heb ik mijn ouders die alles voor me regelen.");
}
