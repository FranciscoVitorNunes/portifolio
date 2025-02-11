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
const text = "Olá! Meu nome é Francisco Vitor, sou desenvolvedor fullstack apaixonado por tecnologia, web e jogos.";
const skills = "HTML, CSS, JavaScript, React, Node.js, Python, Godot, SQL";
let index = 0;
let skillIndex = 0;
const typingElement = document.getElementById("typing-text");
const skillsElement = document.getElementById("skills");

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 35);
    } else {
        setTimeout(typeSkills, 400);
    }
}

function typeSkills() {
    if (skillIndex < skills.length) {
        skillsElement.innerHTML += skills.charAt(skillIndex);
        skillIndex++;
        setTimeout(typeSkills, 50);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);