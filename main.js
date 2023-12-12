// Gunakan Anime.js untuk menambahkan animasi pada elemen-elemen tertentu
anime({
    targets: 'header',
    translateY: [-100, 0],
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    duration: 1000
});

anime({
    targets: '#about',
    translateY: [50, 0],
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    duration: 1000,
    delay: 500
});

anime({
    targets: '#skills ul',
    translateY: [30, 0],
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    duration: 1000,
    delay: 1000
});

anime({
    targets: 'footer',
    translateY: [50, 0],
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    duration: 1000,
    delay: 1500
});
function animateProject(element) {
    anime({
        targets: element,
        translateY: [-5, 0],
        easing: 'easeInOutQuad',
        duration: 300
    });
}

function resetProject(element) {
    anime({
        targets: element,
        translateY: [0, 0],
        easing: 'easeInOutQuad',
        duration: 300
    });
}
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Validasi formulir sebelum mengirim
    if (validateForm()) {
        // Simulasikan pengiriman formulir (Anda dapat menambahkan kode pengiriman nyata di sini)
        alert('Formulir berhasil dikirim!');
        // Bersihkan formulir setelah pengiriman berhasil
        contactForm.reset();
    }
});

function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        alert('Harap isi semua bidang formulir.');
        return false;
    }

    // Validasi email sederhana
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        alert('Format email tidak valid.');
        return false;
    }

    return true;
}
// Ambil elemen-elemen yang ingin diberikan efek paralaks
const header = document.querySelector('header');
const aboutSection = document.getElementById('about');
const skillsSection = document.getElementById('skills');
const portfolioSection = document.getElementById('portfolio');
const contactSection = document.getElementById('contact');

// Tambahkan event listener untuk mengupdate posisi elemen saat pengguna menggulir
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    // Header paralaks
    header.style.transform = 'translateY(' + scrollPosition * 0.3 + 'px)';

    // Bagian "About" paralaks
    aboutSection.style.backgroundPositionY = -scrollPosition * 0.1 + 'px';

    // Bagian "Skills" paralaks
    skillsSection.style.backgroundPositionY = -scrollPosition * 0.1 + 'px';

    // Bagian "Portfolio" paralaks
    portfolioSection.style.backgroundPositionY = -scrollPosition * 0.1 + 'px';

    // Bagian "Contact" paralaks
    contactSection.style.backgroundPositionY = -scrollPosition * 0.1 + 'px';
});
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('nav').offsetHeight,
                behavior: 'smooth'
            });
        }
    });
});
// Inisialisasi ScrollReveal
ScrollReveal().reveal('header', { delay: 200, origin: 'top', distance: '20px' });
ScrollReveal().reveal('#about', { delay: 400, origin: 'bottom', distance: '20px' });
ScrollReveal().reveal('#skills', { delay: 600, origin: 'bottom', distance: '20px' });
ScrollReveal().reveal('#portfolio', { delay: 800, origin: 'bottom', distance: '20px' });
ScrollReveal().reveal('#contact', { delay: 1000, origin: 'bottom', distance: '20px' });
// Tambahkan animasi menggunakan Anime.js
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('mouseover', function() {
        anime({
            targets: item,
            scale: 1.1,
            duration: 300
        });
    });

    item.addEventListener('mouseout', function() {
        anime({
            targets: item,
            scale: 1,
            duration: 300
        });
    });
});
// Import Anime.js jika belum dilakukan
// <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>

// Animasi untuk ikon TikTok
anime({
    targets: '#tiktok-icon',
    translateY: [-10, 0],
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    duration: 1000
});

// Animasi untuk ikon Twitter
anime({
    targets: '#twitter-icon',
    translateY: [-10, 0],
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    duration: 1000,
    delay: 200
});

// Animasi untuk ikon WhatsApp
anime({
    targets: '#whatsapp-icon',
    translateY: [-10, 0],
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    duration: 1000,
    delay: 400
});
