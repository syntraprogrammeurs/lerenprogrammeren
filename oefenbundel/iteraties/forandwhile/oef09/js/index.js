// Schrijf een programma die alle priemgetallen in een rij afdrukt.
//  Voorbeeld:
//      Vraag een eindgetal aan de gebruiker:
//      Alle getallen gelijk aan en lager dan het eindgetal dienen te worden getest. Zijn ze een
// priemgetal of niet.
//  Een priemgetal is enkel deelbaar door 1 en zichzelf.

let eindGetal = Number(prompt("Geef een eindgetal in:"));




for(let i=2   ; i<=eindGetal   ; i++){
    let isPriemGetal=true;
    for(let j=2;j<i;j++){
        if(i%j===0){
            isPriemGetal=false;
            break;
        }
    }
    if (isPriemGetal){
        document.write(i+" ");
    }
}