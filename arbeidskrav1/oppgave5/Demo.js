// for Registrering av ny bruker 
function Bruker(Epost, passord) {
  return Epost + " " + passord;
  
}

if (document.getElementById("brukerSkjema")) {
document.getElementById("brukerSkjema").addEventListener("submit", function(event) {
    event.preventDefault();
    let po = document.getElementById("po").value;
    let greeting ="passord for lite"; 
    if (po.length < 5 ) {
        greeting = "Passord for lite.";
    } else {
        greeting = "Passord godkjent."; 
    }
    document.getElementById("demo").innerHTML = greeting;
    
})
}; 

// for registrering av tur 
function Tur(turNavn, vanskelighetsgrad, turLengde, typeTur) {
  return turNavn + " " + vanskelighetsgrad + " " + turLengde + " " + typeTur;
  
}
if (document.getElementById("turSkjema")){
document.getElementById("turSkjema").addEventListener("submit", function(event) {
    event.preventDefault();
    let tnavn = document.getElementById("tnavn").value;
    let gradEnkel  = document.getElementById("gradEnkel").checked; 
    let gradMiddels  = document.getElementById("gradMiddels").checked; 
    let gradEksKre  = document.getElementById("gradEksKre").checked;
    let kortTur  = document.getElementById("kortTur").checked; 
    let halvTur  = document.getElementById("halvTur").checked; 
    let dagTur  = document.getElementById("dagTur").checked;
    let helgTur  = document.getElementById("helgTur").checked;
    let langTur  = document.getElementById("langTur").checked;
    let text ="";

    //sjekker om turnavn er skrevet inn 
    if (tnavn.length === 0 ) {
        text += "Skriv turnavn.<br>";
    } else {
        text += "Turnavn godkjent.<br>"; 
    }
    
    // sjekker om vanskelighetsgrad er valgt 
    if (gradEnkel || gradMiddels || gradEksKre) {
        text +="Vanskelighetsgrad valgt.<br>";
    } else {
        text += "Velg minst en vanskelighetsgrad.<br>";
    }

    // sjekker om turlende er valgt  
    if ( kortTur || halvTur || dagTur || helgTur || langTur) {
        text +="Turlengde valgt.<br>";
    } else {
        text += "Velg minst en turlengde.<br>";
    }
document.getElementById("demo").innerHTML = text;
})};