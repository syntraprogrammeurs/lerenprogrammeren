let aantalLijnen = Number(prompt("geef een even aantal lijnen in:"));

for (let i = 1; i <= (aantalLijnen/2); i++) {
    for (let j = 1; j <= i; j++) {
        document.write("*");
    }
    document.write("<br>");
}

for (let i = aantalLijnen/2; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        document.write("*");
    }1
    document.write("<br>");
}
