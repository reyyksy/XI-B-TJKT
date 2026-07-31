const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const links = document.querySelectorAll('.nav-links li a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

const orgNodes = document.querySelectorAll('.org-node');

// Tampilkan semua popup-card secara default tanpa perlu klik/hover
orgNodes.forEach(node => node.classList.add('active-popup'));

const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".slider-dots");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let current = 0;

slides.forEach((_, i) => {
    const dot = document.createElement("span");
    if(i === 0) dot.classList.add("active");
    dot.onclick = () => showSlide(i);
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".slider-dots span");

function showSlide(i){
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");

    current = (i + slides.length) % slides.length;

    slides[current].classList.add("active");
    dots[current].classList.add("active");
}

next.onclick = () => showSlide(current + 1);
prev.onclick = () => showSlide(current - 1);

let auto = setInterval(() => {
    showSlide(current + 1);
}, 4000);

const slider = document.querySelector(".hero-slider");

slider.addEventListener("mouseenter", () => clearInterval(auto));

slider.addEventListener("mouseleave", () => {
    auto = setInterval(() => {
        showSlide(current + 1);
    }, 4000);
});