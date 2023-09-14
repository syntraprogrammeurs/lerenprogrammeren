let hoeveelGetallen=Number(prompt("Hoeveel getallen?"));
let som =0;
for(let i=1;i<=hoeveelGetallen;i++){
    let getal=Number(prompt("Geef getal " + i + " in:"));
   // som = som + getal;
    som+= getal;
}
document.write("De totale som van " + hoeveelGetallen + " getallen is " + som);
