// Vraag de gebruiker om de tafel en het eindgetal
const tafel = parseInt(prompt("Voer de tafel in:"));
const eindGetal = parseInt(prompt("Voer het eindgetal in:"));

// Loop door de vermenigvuldigingen en schrijf ze naar het document
for (let i = 1; i <= eindGetal; i++) {
    let product = tafel * i;
    document.write(`${tafel} x ${i} = ${product}`);
    if (i % 3 === 0 || i === eindGetal) {
        document.write("<br>");
    } else {
        document.write(", ");
    }
}
