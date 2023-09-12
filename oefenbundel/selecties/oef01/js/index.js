
document.getElementById("controleerLeeftijd").onclick = function(){
// Vraag de gebruiker om hun leeftijd
    let leeftijd = document.getElementById("mijnLeeftijd").value;

// Controleer of de ingevoerde leeftijd minimaal 18 is
    if (leeftijd >= 18) {
        // Toon bericht als de gebruiker oud genoeg is

        console.log("Je bent " + leeftijd + " jaar oud. Je mag deelnemen aan de spelen van de nationale loterij.");
    } else {
        // Toon bericht als de gebruiker niet oud genoeg is
        console.log("Om deel te nemen aan de spelen van de nationale loterij moet je minimum 18 jaar oud zijn.");


    }
}



