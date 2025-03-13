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


document.addEventListener("DOMContentLoaded", function () {
    let skillsSection = document.getElementById("skills");
    let progressBars = document.querySelectorAll(".progress");

    function showProgress() {
        progressBars.forEach((bar) => {
            if (bar.classList.contains("html-progress")) bar.style.width = "92%";
            if (bar.classList.contains("css-progress")) bar.style.width = "85%";
            if (bar.classList.contains("js-progress")) bar.style.width = "71%";
            if (bar.classList.contains("python-progress")) bar.style.width = "72%";
            if (bar.classList.contains("c-progress")) bar.style.width = "79%";
            if (bar.classList.contains("java-progress")) bar.style.width = "81%";
        });
    }

    function checkScroll() {
        let sectionPos = skillsSection.getBoundingClientRect().top;
        let screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            showProgress();
        }
    }

    window.addEventListener("scroll", checkScroll);
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}