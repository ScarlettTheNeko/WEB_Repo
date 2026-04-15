document.addEventListener("DOMContentLoaded", () => {main();});

function main() {
    button = document.getElementById("butty");
    button.addEventListener("click", () => {
        buttyHandle();
    })
}

firstText = "<b>Mario</b> betritt das Level. Er fühlt sich klein. Er besitzt 0 Goldmünzen. <b>Mario</b> kann nicht nach links gehen... also geht er nach rechts."

function buttyHandle(){
    bildy = document.getElementById("bildy");
    bildy.remove();

    schrifty = document.getElementById("gerahmterKasten");
    schrifty.innerHTML = "<p>" + firstText + "<\p>";
}