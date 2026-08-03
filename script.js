/* =========================================
   DATA SISWA - TINGGAL COPY-PASTE UNTUK NAMBAH!
   ========================================= */

// === TAMBAH SISWA BARU ===
// Copy dari objek di bawah, paste di bawahnya, lalu edit datanya.
// Tipe sosmed yang tersedia: "instagram", "tiktok", "whatsapp", "twitter", "youtube", "github"
// Logo SVG otomatis muncul sesuai tipe!

const students = [
    {
        id: 1,
        name: "Ahmad Sulaeman",
        absen: "01",
        role: "Anggota Kelas",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" },
        ]
    },
    {
        id: 2,
        name: "Alam Nur Siddiq",
        absen: "02",
        role: "Ketua Kelas",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    },
    {
        id: 3,
        name: "Alyanisa Hawany",
        absen: "03",
        role: "Sekretaris I",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    },
    {
        id: 4,
        name: "Ayu Humaira",
        absen: "04",
        role: "Bendahara I",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    },
    {
        id: 5,
        name: "Deriel Fazrian",
        absen: "05",
        role: "Anggota Kelas",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    },
    {
        id: 6,
        name: "Diaz Rasta Oktora",
        absen: "06",
        role: "Anggota Kelas",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    },
    {
        id: 7,
        name: "Dzul Arhamsyah",
        absen: "07",
        role: "Anggota Kelas",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    },
    {
        id: 8,
        name: "Fahrien Azhar Herdiana",
        absen: "08",
        role: "Anggota Kelas",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    },
    {
        id: 9,
        name: "Kikan Rosadi",
        absen: "09",
        role: "Anggota Kelas",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    },
    {
        id: 10,
        name: "Loris Resi Maulana",
        absen: "10",
        role: "Anggota Kelas",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    },
    {
        id: 11,
        name: "M. Fardan Fadilah",
        absen: "11",
        role: "Anggota Kelas",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    },
    {
        id: 12,
        name: "M. Nizar Khafi Muttaqien",
        absen: "12",
        role: "Seksi Keamanan I",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    },
    {
        id: 13,
        name: "Muhamad Ezzar Radithya",
        absen: "13",
        role: "Anggota Kelas",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    },
    {
        id: 14,
        name: "Muhamad Fajar Ardiansyah",
        absen: "14",
        role: "Anggota Kelas",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    },
    {
        id: 15,
        name: "Muhamad Faridz Akhdaan",
        absen: "15",
        role: "Anggota Kelas",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    },
    {
        id: 16,
        name: "Muhamad Kadafi",
        absen: "16",
        role: "Anggota Kelas",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    },
    {
        id: 17,
        name: "Muhamad Reihan Kaissya",
        absen: "17",
        role: "Anggota Kelas",
        img: "images/reihan.jpg",
        socials: [
            { type: "website", url: "https://reyy.pages.dev/" }
        ]
    },
    {
        id: 18,
        name: "Muhammad Abdul Latif",
        absen: "18",
        role: "Anggota Kelas",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    },
    {
        id: 19,
        name: "Muhammad Adly Maulidian",
        absen: "19",
        role: "Seksi Keamanan II",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    },
    {
        id: 20,
        name: "Muhammad Havizul Musida",
        absen: "20",
        role: "Anggota Kelas",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    },
    {
        id: 21,
        name: "Muhammad Ramdan",
        absen: "21",
        role: "Anggota Kelas",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    },
    {
        id: 22,
        name: "Muhammad Rasya Al Fatir",
        absen: "22",
        role: "Seksi Kebersihan I",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    },
    {
        id: 23,
        name: "Muhammad Yusri",
        absen: "23",
        role: "Anggota Kelas",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    },
    {
        id: 24,
        name: "Nadzira Rizqi Rahmadini",
        absen: "24",
        role: "Sekretaris II",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    },
    {
        id: 25,
        name: "Putri Aprilia Sutardi",
        absen: "25",
        role: "Seksi Kebersihan II",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    },
    {
        id: 26,
        name: "R Muhammad Duyeh",
        absen: "26",
        role: "Wakil Ketua",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    },
    {
        id: 27,
        name: "Ridho Nurcahyo",
        absen: "27",
        role: "Anggota Kelas",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    },
    {
        id: 28,
        name: "Rizqy Nurkholis",
        absen: "28",
        role: "Anggota Kelas",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    },
    {
        id: 29,
        name: "Shella Seltiani",
        absen: "29",
        role: "Anggota Kelas",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    },
    {
        id: 30,
        name: "Sihabudin Fadillah",
        absen: "30",
        role: "Anggota Kelas",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    },
    {
        id: 31,
        name: "Siti Azkya",
        absen: "31",
        role: "Bendahara II",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    },
    {
        id: 32,
        name: "Siti Nadiya Kirania",
        absen: "32",
        role: "Anggota Kelas",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    },
    {
        id: 33,
        name: "Viona Zimatia Nur Apriliani",
        absen: "33",
        role: "Anggota Kelas",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    },
    {
        id: 34,
        name: "Wanda Dwi Puspita",
        absen: "34",
        role: "Anggota Kelas",
        img: "images/contoh.jpg",
        socials: [
            { type: "instagram", url: "" }
        ]
    }
];

/* =========================================
   ICONS SVG UNTUK SOSMED
   ========================================= */
const socialIcons = {
    instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,

    tiktok: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.93 2.93 0 0 1 1.14.24V9.1a6.36 6.36 0 0 0-1.14-.11A6.18 6.18 0 0 0 4.26 15a6.18 6.18 0 0 0 6.18 6.18 6.19 6.19 0 0 0 6.18-6.18V9.41a7.94 7.94 0 0 0 4.6 1.46V7.46a4.9 4.9 0 0 1-1.63-.77z"/></svg>`,

    whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,

    twitter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,

    youtube: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,

    github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`,
    
    website: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
};

/* =========================================
   RENDER GRID SISWA
   ========================================= */
function renderStudentGrid() {
    const grid = document.getElementById('student-grid');
    if (!grid) return;

    grid.innerHTML = students.map(s => `
        <div class="card" data-id="${s.id}">
            <img src="${s.img}" alt="${s.name}" class="student-img">
            <h3>${s.name}</h3>
            <p>Absen: ${s.absen}</p>
        </div>
    `).join('');

    // Add click events
    grid.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.id);
            openModal(id);
        });
    });
}

/* =========================================
   MODAL POPUP
   ========================================= */
const modal = document.getElementById('student-modal');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const modalAbsen = document.getElementById('modal-absen');
const modalRole = document.getElementById('modal-role');
const modalSocials = document.getElementById('modal-socials');
const modalClose = document.getElementById('modal-close');

function openModal(id) {
    const s = students.find(st => st.id === id);
    if (!s) return;

    modalImg.src = s.img;
    modalImg.alt = s.name;
    modalName.textContent = s.name;
    modalAbsen.textContent = `No. Absen: ${s.absen}`;
    modalRole.textContent = s.role;

    modalSocials.innerHTML = s.socials.map(soc => `
        <a href="${soc.url}" target="_blank" rel="noopener" class="modal-social-link ${soc.type}">
            ${socialIcons[soc.type] || ''}
            <span>${capitalize(soc.type)}</span>
        </a>
    `).join('');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

/* =========================================
   NAVBAR HAMBURGER
   ========================================= */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const links = document.querySelectorAll('.nav-links li a');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

/* =========================================
   ORG NODE POPUP (INDEX PAGE)
   ========================================= */
const orgNodes = document.querySelectorAll('.org-node');
orgNodes.forEach(node => node.classList.add('active-popup'));

/* =========================================
   SLIDER - SWIPEABLE + AUTO 5 DETIK
   ========================================= */
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".slider-dots");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const slider = document.querySelector(".hero-slider");

if (slides.length > 0 && slider) {
    let current = 0;
    let autoTimer = null;
    const AUTO_DELAY = 5000; // 5 detik

    // Create dots
    slides.forEach((_, i) => {
        const dot = document.createElement("span");
        if (i === 0) dot.classList.add("active");
        dot.onclick = () => {
            showSlide(i);
            resetAutoTimer();
        };
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".slider-dots span");

    function showSlide(i) {
        slides[current].classList.remove("active");
        if (dots[current]) dots[current].classList.remove("active");

        current = (i + slides.length) % slides.length;

        slides[current].classList.add("active");
        if (dots[current]) dots[current].classList.add("active");
    }

    function nextSlide() {
        showSlide(current + 1);
    }

    function prevSlide() {
        showSlide(current - 1);
    }

    // Button controls
    if (nextBtn) nextBtn.onclick = () => { nextSlide(); resetAutoTimer(); };
    if (prevBtn) prevBtn.onclick = () => { prevSlide(); resetAutoTimer(); };

    // Auto-slide
    function startAuto() {
        autoTimer = setInterval(nextSlide, AUTO_DELAY);
    }

    function stopAuto() {
        if (autoTimer) clearInterval(autoTimer);
    }

    function resetAutoTimer() {
        stopAuto();
        startAuto();
    }

    // Swipe / drag support
    let startX = 0;
    let isDragging = false;
    let startTime = 0;

    slider.addEventListener("mousedown", (e) => {
        startX = e.clientX;
        isDragging = true;
        startTime = Date.now();
    });

    slider.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        startTime = Date.now();
    }, { passive: true });

    slider.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
    });

    slider.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
    }, { passive: true });

    function handleEnd(endX) {
        if (!isDragging) return;
        isDragging = false;
        const diff = startX - endX;
        const elapsed = Date.now() - startTime;

        // Minimum swipe distance 40px, max time 700ms
        if (Math.abs(diff) > 40 && elapsed < 700) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
            resetAutoTimer();
        }
    }

    slider.addEventListener("mouseup", (e) => {
        handleEnd(e.clientX);
    });

    slider.addEventListener("mouseleave", () => {
        isDragging = false;
    });

    slider.addEventListener("touchend", (e) => {
        handleEnd(e.changedTouches[0].clientX);
    });

    // Pause on hover (desktop)
    slider.addEventListener("mouseenter", () => {
        stopAuto();
    });

    slider.addEventListener("mouseleave", () => {
        startAuto();
    });

    // Start auto
    startAuto();
}

/* =========================================
   INIT
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    renderStudentGrid();
});