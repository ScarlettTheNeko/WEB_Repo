document.addEventListener("DOMContentLoaded", () => main());

let products = [
    ["p1.webp", "Reithose", "169,99", "Eine tolle Reithose ... Wahrscheinlich"],
    ["schabracke.png", "Schabracke", "69,69", "Wunderschöne Schabracke ... Einfach die beste"],
    ["OphenaSSilverProductMainGray-BG_720x.webp", "Sicherheitssteigbügel", "339", "Magnetische Sicheritssteigbügel"]
];

let currentIndex = 0;
let guthaben = 1000;
let summe = 0;
let istPate = false;

function main(){
    setProduct();

    let buttyPrev = document.getElementById("prevItem");
    buttyPrev.addEventListener("click", () => prevItem());

    let buttyNext = document.getElementById("nextItem");
    buttyNext.addEventListener("click", () => nextItem());

    let buyButty = document.getElementById("kaufen");
    buyButty.addEventListener("click", () => buyItem());

    let guthabenH = document.getElementById("Guthaben");
    guthabenH.innerHTML = "Guthaben: " + guthaben.toFixed(2).replace(".", ",") + " €";
}

function setProduct(){
    let img = document.getElementById("productPic");
    let name = document.getElementById("productName");
    let price = document.getElementById("productPrice");
    let desc = document.getElementById("productDesc");

    img.src = "img/" + products[currentIndex][0];
    name.innerHTML = products[currentIndex][1];
    price.innerHTML = products[currentIndex][2] + " €";
    desc.innerHTML = products[currentIndex][3];
}

function prevItem(){
    if (currentIndex == 0) {
        currentIndex = products.length - 1;
    } else {
        currentIndex--;
    }

    setProduct();
}

function nextItem(){
    if (currentIndex == products.length - 1){
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    setProduct();
}

function getPreis(index) {
    return parseFloat(products[index][2].replace(",", "."));
}


function checkGuthaben() {
    return guthaben >= getPreis(currentIndex);
}

function buyItem() {
    if (!checkGuthaben()) {
        window.alert("Guthaben nicht ausreichend!!!");
        return;
    }

    let readableTime = new Date().toLocaleString("de-DE");

    let productName = products[currentIndex][1];
    let price = getPreis(currentIndex);

    let table = document.getElementById("warenkorbTabelle");
    let row = table.insertRow(1);

    row.insertCell(0).innerHTML = readableTime;
    row.insertCell(1).innerHTML = productName;
    row.insertCell(2).innerHTML = price.toFixed(2).replace(".", ",") + " €";

    summe += price;
    guthaben -= price;

    document.getElementById("summeSign").innerHTML =
        "Summe: " + summe.toFixed(2).replace(".", ",") + " €";

    document.getElementById("Guthaben").innerHTML =
        "Guthaben: " + guthaben.toFixed(2).replace(".", ",") + " €";
}