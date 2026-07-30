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

orgNodes.forEach(node => {
    node.addEventListener('mouseenter', () => {
        node.classList.add('active-popup');
    });

    node.addEventListener('mouseleave', () => {
        node.classList.remove('active-popup');
    });

    node.addEventListener('click', (e) => {
        orgNodes.forEach(n => {
            if (n !== node) {
                n.classList.remove('active-popup');
            }
        });
        node.classList.toggle('active-popup');
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.org-node')) {
        orgNodes.forEach(node => node.classList.remove('active-popup'));
    }
});