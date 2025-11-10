function renderAktuelles(targetID, elements) {
    const target = document.getElementById(targetID);

    const html = elements.map(e => `
        <div class="aktuelles_element">
        <h3>${e.title}</h3>
        <p>${e.text}</p>
        </div>
    `).join("");

    target.innerHTML = html;
}