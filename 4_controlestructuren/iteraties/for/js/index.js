//for loop

// for(teller;conditie;manipulatie van de teller){
//     uitvoering code
// }
//3de parameter

// optelling: i=i+1; i+=1; i++

let som = 0;
for(let i=1;i<=3;i++){
    let getal = Number(prompt("Geef getal " + i + " in:"));
    som = som + getal;
}
document.write(som);


