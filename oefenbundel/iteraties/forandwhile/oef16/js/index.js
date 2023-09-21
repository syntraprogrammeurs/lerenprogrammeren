const getal = parseInt(prompt("Voer een getal in:"));
let faculteit = 1;
let teller = getal;

while (teller > 0) {
    faculteit *= teller;
    teller--;
}

document.write(`De faculteit van ${getal} is: ${faculteit}`);
