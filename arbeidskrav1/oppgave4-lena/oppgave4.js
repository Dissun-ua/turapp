
//lyttefunksjon
function slettAvsnitt(e) {
    e.target.remove();
}
function leggTilTekst(e) {
//Få tak i tekstområdet, få tak i teksten
let tekstOmråde = document.querySelector("#txtBoksId");
let teksten = tekstOmråde.value;
alert(teksten);

// vise teksten i en p-element lenger ned på nettsiden
const kroppen = document.body;
let avsnitt = document.createElement("p");
let tekstNode = document.createTextNode(teksten);
avsnitt.appendChild(tekstNode);
kroppen.appendChild(avsnitt);
avsnitt.addEventListener("click", slettAvsnitt );
}

// få tak i knappen
const knapp = document.querySelector("#leggTilKnapp");
// legge til lytter på knappen
knapp.addEventListener("click", leggTilTekst);



