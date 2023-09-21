// Vraag aan de gebruiker de twee getallen
const getal1 = parseInt(prompt("Voer het eerste getal in:"));
const getal2 = parseInt(prompt("Voer het tweede getal in:"));

// Bereken de grootste gemene deler
let gcd = 1;

for (let i = 1; i <= getal1 && i <= getal2; i++) {
    if (getal1 % i === 0 && getal2 % i === 0) {
        gcd = i;
    }
}

// Toon de grootste gemene deler op het scherm
document.write(`De grootste gemene deler van ${getal1} en ${getal2} is: ${gcd}`);
