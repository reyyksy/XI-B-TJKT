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