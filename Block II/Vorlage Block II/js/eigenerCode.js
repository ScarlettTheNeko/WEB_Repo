document.addEventListener("DOMContentLoaded", () => {main();});

function main() {
    button = document.getElementById("butty");
    button.addEventListener("click", () => {
        buttyHandle();
    })
}

function buttyHandle(){
    window.alert("Butty gedrückt!");
}