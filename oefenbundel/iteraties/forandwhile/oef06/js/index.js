/*
Schrijf een programma die een karakter telt in een tekenreeks(string).
 Tip: maak hierbij gebruik van een built-in functie. 

*/

let tekenReeks = prompt('Geef een zin in');
let karakter = prompt('Geef een karakter in');

var aantalKarakters = 0;
for (let plaats = 0; plaats < tekenReeks.length; plaats++)
{
    if (tekenReeks.charAt(plaats) == karakter)
    {
        aantalKarakters += 1;
    }
}
console.log(aantalKarakters);