let lijstNamen = [];
let aantalNamen = parseInt(prompt('Hoeveel namen wenst u in te geven?'));
for(x=0;x<= aantalNamen;x++){
    lijstNamen.push(prompt('Geef een naam in:'));
}
lijstNamen.sort();
document.write(lijstNamen);