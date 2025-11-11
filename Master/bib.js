function renderAktuelles(targetID, elements) {
    const target = document.getElementById(targetID);

    const html = elements.map(e => `
        <article class="aktuelles_element">
        <h3>${e.title}</h3>
        <p><strong>${e.zeitraum}$</strong></p>
        <p>${e.text}</p>
        </article>
    `).join("");

    target.innerHTML = html;
}