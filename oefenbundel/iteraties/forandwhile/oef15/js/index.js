let totaal = 0;
let aantalGetallen = parseInt(prompt("Hoeveel getallen wil je invoeren?"));
let teller = 1;

while (aantalGetallen > 0) {
    const getal = parseFloat(prompt(`Geef getal ${teller} in:`));
    totaal += getal;
    teller++;
    aantalGetallen--;
}

const gemiddelde = totaal / (teller - 1);

document.write(`De totale som van ${teller - 1} getallen is ${totaal}.<br>`);
document.write(`Het gemiddelde van de ${teller - 1} getallen is ${gemiddelde}.`);
