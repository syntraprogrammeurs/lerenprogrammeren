// Vraag aan de gebruiker de twee getallen
const getal1 = parseInt(prompt("Voer het eerste getal in:"));
const getal2 = parseInt(prompt("Voer het tweede getal in:"));

// Bereken het kleinste gemene veelvoud
let lcm = 0;

for (let i = Math.max(getal1, getal2); ; i += Math.max(getal1, getal2)) {
    if (i % getal1 === 0 && i % getal2 === 0) {
        lcm = i;
        break;
    }
}

// Toon het kleinste gemene veelvoud op het scherm
document.write(`Het kleinste gemene veelvoud van ${getal1} en ${getal2} is: ${lcm}`);
