/*
Zorg ervoor dat je 2 arrays inleest met willekeurige getallen.  De arrays tellen elk 10 getallen.
 Zorg ervoor dat een array wordt gemaakt in de derde array met enkel met enkel en alleen de even getallen vanuit de 2 vorige arrays.
 Daarnaast geef je de som van de oneven getallen ook terug van de eerste 2 arrays.
*/

let reeks1=[];
let reeks2=[];
let reeks3=[];
let somOneven = 0;
let getal = 0;
maxGetal = parseInt(prompt('Geef het max getal in:'));

for(let x=0;x<10;x++){
    reeks1.push(Math.floor(Math.random() * (maxGetal - 0 + 1) ) + 0);
    reeks2.push(Math.floor(Math.random() * (maxGetal - 0 + 1) ) + 0);

    if(reeks1[x]%2 == 0){
        reeks3.push(reeks1[x]);
        somOneven = somOneven + reeks1[x];
    }
    if(reeks2[x]%2 == 0){
        reeks3.push(reeks2[x]);
        somOneven = somOneven + reeks2[x];
    }
}
document.write(reeks1, '<br>');
document.write(reeks2, '<br>');
document.write(reeks3, '<br>');
document.write(`Som oneven getallen: ${somOneven}`)


