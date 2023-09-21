let totaleSom = 0;

while (true) {
    const getal = parseInt(prompt("Voer een getal in (stop met een negatief getal):"));

    if (getal < 0) {
        break;
    }

    totaleSom += getal;
}

document.write(`De som van de ingevoerde getallen is: ${totaleSom}`);
