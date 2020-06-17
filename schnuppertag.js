/**
 * TODO: Variablen
 */
 
//Für Anzeige des Scores
function score() {
    var score_div = (document.getElementById("score").innerHTML =
        UserPoints + " - " + ComPoints);
}
setInterval(score, 50);
//Anzeige der Auswahl
function convert(word) {
    if (word === "Paper") return '<i class="far fa-hand-paper"></i>';
    if (word === "rock") return '<i class="far fa-hand-rock"></i>';
    return '<i class="far fa-hand-scissors"></i>';
}
function game(UserChoice) {
    //Anzeige der Auswahl von User und Com
    var box = document.getElementById("challenge");
    box.style.display = "inline-flex";
    var userDiv = document.getElementById("YourObject");
    userDiv.innerHTML = covert(UserChoice);
    var comDiv = document.getElementById("ComObject");
    comDiv.innerHTML = covert(ComChoice);
    /**
     * TODO: Gameabfragen
     */
    function continuGame() {
        /** 
         * TODO: Neue Auswahl com
        */
    }
    setTimeout(continuGame, 1200);
}
function win(bn) {
    //UserPoints aktualisieren und in HTML schreiben

    //Grüner Ring um User-Auswahl
    var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("red");
    //Grünen Ring nach 1.2sec entfernen
    setTimeout(() => {
        bn.classList.add("bn");
        bn.classList.remove("red");
    }, 1200);
}
function draw(bn) {
    //HTML Text anzeigen

    //Grauer Ring um User-Auswahl
    var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("green");
    //Grauen Ring nach 1.2sec entfernen
    setTimeout(() => {
        bn.classList.add("bn");
        bn.classList.remove("green");
    }, 1200);
}
function lose(bn) {
    //Com Points aktualisieren und HTML ausgeben
    
    //Roter Ring um User-Auswahl
    var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("gray");
    //Roten Ring nach 1.2sec entfernen
    setTimeout(() => {
        bn.classList.add("bn");
        bn.classList.remove("gray");
    }, 12000);
}