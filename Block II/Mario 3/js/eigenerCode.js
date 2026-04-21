document.addEventListener("DOMContentLoaded", () => {main();});

function main() {
    button = document.getElementById("butty");
    button.addEventListener("click", () => {
        buttyHandle();
    })

    
    protName = "Definetiv nicht MArio";

    texts = [
        "<b>" + protName + "</b> betritt das Level. Er fühlt sich klein. Er besitzt 0 Goldmünzen. <b>" + protName + "</b> kann nicht nach links gehen... also geht er nach rechts.",
        "Nach einiger Zeit kommt eine fies blickende Kanonenkugel auf <b>" + protName + "</b> zugeflogen."
    ];
    currentIndex = 0;
}


function buttyHandle(){
    schrifty = document.getElementById("gerahmterKasten");
    schrifty.innerHTML = "<p>" + texts[currentIndex] + "</p>";

    if (currentIndex < texts.length - 1) {
        currentIndex = currentIndex + 1;
    } else {
        currentIndex = 0;
    }
}