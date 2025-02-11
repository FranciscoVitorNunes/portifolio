document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const header = document.getElementById("header");
    const icon = menuToggle.querySelector("i");
    const navLinks = document.querySelectorAll("#navbar a"); // Seleciona todos os links do menu

    // Alterna o menu ao clicar no botão
    menuToggle.addEventListener("click", function () {
        header.classList.toggle("active");
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
    });

    // Fecha o menu ao clicar em um link do menu
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            header.classList.remove("active");
            icon.classList.add("fa-bars");
            icon.classList.remove("fa-xmark");
        });
    });
});

function playClick() {
    const displayBrowser = document.querySelector('.window-browser')
    const displayCode = document.querySelector('.window-code');
    if (displayCode) {
        displayCode.style.display = 'none';
        displayBrowser.style.display = "block"
    }
}
function vsCodeClick() {
    const displayBrowser = document.querySelector('.window-browser')
    const displayCode = document.querySelector('.window-code');
    if (displayCode) {
        displayCode.style.display = 'block';
        displayBrowser.style.display = "none"
    }
}