document.getElementById("berekenSom").onclick = function() {
    let aantalGetallen = document.getElementById("aantalGetallen").value;
    let som = 0;

    for(let i = 1; i <= aantalGetallen; i++) {
        let getal = Number(document.getElementById("getal" + i).value);
        som += getal;
    }

    document.getElementById("output").innerHTML = "De totale som van " + aantalGetallen + " getallen is " + som + ".";
}

document.getElementById("aantalGetallen").addEventListener("input", function() {
    let aantalGetallen = document.getElementById("aantalGetallen").value;
    let getallenInput = document.getElementById("getallenInput");

    getallenInput.innerHTML = "";

    for(let i = 1; i <= aantalGetallen; i++) {
        let input = document.createElement("input");
        input.type = "number";
        input.id = "getal" + i;
        input.placeholder = "Geef getal " + i + " in";
        getallenInput.appendChild(input);
        getallenInput.appendChild(document.createElement("br"));
    }
});
