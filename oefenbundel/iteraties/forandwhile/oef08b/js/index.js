

let eindGetal = Number(prompt("Geef een eindgetal in:"));


for(let i=1; i<=eindGetal; i*=2){
 if(i > 1){
  document.write(", ");
 }
 document.write(i);
}
