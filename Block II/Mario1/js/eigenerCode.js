document.addEventListener("DOMContentLoaded", () => {main();});

function main() {
    button = document.getElementById("butty");
    button.addEventListener("click", () => {
        buttyHandle();
    })
}

function buttyHandle(){
    schrifty = document.getElementById("überschrift");
    if (schrifty) {
        schrifty.innerHTML = "Mario!";
    }
}