// Typed.js Animation
var typed = new Typed("#element", {
    strings: ["I am a Web Developer", "Graphics Designer", "Photographer", "Programmer", "Game Developer", "AI specialist (BETA)", "Web Designer"], // Clean text
    typeSpeed: 50,
    backSpeed: 30,
    loop: true // Makes it loop infinitely
});

// Toggle Mobile Menu
function toggleMenu() {
    document.querySelector(".menu-box").classList.toggle("active");
}
