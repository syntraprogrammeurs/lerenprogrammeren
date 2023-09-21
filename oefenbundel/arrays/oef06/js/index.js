/*
Zorg ervoor dat je het alfabet in een array inleest in kleine letters.
Gebruik hiervoor een lus.
Zorg ervoor dat je deze array naar een andere array kopieert  en dat deze opgevuld is met het alfabet in hoofdletters
Je mag geen gebruiken maken van de functies lowercase of uppercase!
*/
let kleineletters = [];
let hoofdletters = [];
let teller = 97;
let test = String.fromCharCode(teller);

for(let x=0;x <=25;x++){
    kleineletters.push(String.fromCharCode(teller)); //a 97  A 65 = 32
    hoofdletters.push(String.fromCharCode(teller-32));
    teller++;
}
document.write(kleineletters,"<br>");
document.write(hoofdletters);


