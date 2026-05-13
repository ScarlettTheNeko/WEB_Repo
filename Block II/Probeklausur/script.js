document.addEventListener("DOMContentLoaded", () => main());

let anzahlVögel = 300;
let verbrauchProVogelInGramm = 400;

function main(){
    const textContainer = document.getElementById("computeTestDivContent");

    let verbrauchGesamtInGramm = anzahlVögel * verbrauchProVogelInGramm;
    let verbrauchGesamtInKG = verbrauchGesamtInGramm / 1000;

    let inHTML = `Wir haben derzeit ${anzahlVögel} Vögel im Tierpark. Jeder Vogel benötigt ${verbrauchProVogelInGramm} Gramm Futter pro Tag. Insegsamt braucht der Tierpark ${verbrauchGesamtInKG} KG Futter pro Tag. Werde doch <a href="fanshop.html">Pate!</a>`;
    textContainer.innerHTML = inHTML;

    setProduct(0);
}

function setProduct(index){
    let img = document["#productPic"];
    let name = document["#productName"];
    let price = document["#productPrice"];

    img.src = products[index][0];
    name.innerHTML = products[index][1];
    price.innerHTML = products[index][2];
}