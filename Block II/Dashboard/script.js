document.addEventListener("DOMContentLoaded", () => {main();});

function main(){
    const sidebarButton = document.getElementById("sidebar_button");
    sidebarButton.addEventListener("click", () => {sideBarHandling();});
}

function sideBarHandling() {
    sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("collapsed");
}