document.getElementById("checkLeeftijd").onclick = function() {
    let geboortejaar = Number(document.getElementById('geboortejaar').value);
    let lopendJaar = Number(document.getElementById('lopendJaar').value);

    let leeftijd = lopendJaar - geboortejaar;

    if (leeftijd >= 0) {
        if (leeftijd >= 18) {
            alert('Vanaf nu mag, kan en beslis ik alles, binnen de wettelijke grenzen.');
        } else {
            alert('Gelukkig heb ik mijn ouders die alles voor me regelen.');
        }
    } else {
        alert('Ongeldige invoer: het geboortejaar kan niet later zijn dan het lopende jaar.');
    }
}