let hp = 3;

document.addEventListener("DOMContentLoaded", () => {main();});

function main() {
    const button = document.getElementById("butty");
    button.addEventListener("click", () => {
        buttyHandle();
    });
    refreshHP();
}

function buttyHandle(){
    hp = hp + 1;
    refreshHP();
}

function refreshHP(){
    let html = `Leben: ${hp}`;
    const hpCounter = document.getElementById("hpCounter");
    hpCounter.innerHTML = html;
}
