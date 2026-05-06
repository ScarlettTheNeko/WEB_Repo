document.addEventListener("DOMContentLoaded", () => main());

let products = [
    ["p1.webp", "Reithose", "169,99"],
    ["p2.webp", "Schabracke", "79,99"],
];

let currentIndex = 0;

function main(){
    setProduct();

    let buttyPrev = document.getElementById("prevItem");
    buttyPrev.addEventListener("click", () => prevItem());

    let buttyNext = document.getElementById("nextItem");
    buttyNext.addEventListener("click", () => nextItem());
}

function setProduct(){
    let img = document.getElementById("productPic");
    let name = document.getElementById("productName");
    let price = document.getElementById("productPrice");

    img.src = "img/" + products[currentIndex][0];
    name.innerHTML = products[currentIndex][1];
    price.innerHTML = products[currentIndex][2];
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