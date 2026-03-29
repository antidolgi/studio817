// ===== MOBILE MENU =====
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelectorAll('.nav-links a');

burger?.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        burger.classList.remove('toggle');
    });
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== LAZY LOAD IMAGES =====
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
});

// ===== FORM SUBMISSION (VK Redirect) =====
const ctaButtons = document.querySelectorAll('.btn-primary, .btn-nav');

ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Track click (optional: add Yandex Metrika goal here)
        console.log('Booking button clicked');
    });
});

// ===== SCROLL INDICATOR HIDE ON SCROLL =====
const scrollIndicator = document.querySelector('.scroll-indicator');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.pointerEvents = 'none';
    } else {
        scrollIndicator.style.opacity = '1';
        scrollIndicator.style.pointerEvents = 'auto';
    }
});

// ===== CONSOLE WELCOME =====
console.log('%c📸 Studio 817', 'font-size: 20px; color: #e67e22; font-weight: bold;');
console.log('%cФотостудия в Воложде', 'font-size: 14px; color: #666;');
console.log('%c📞 +7 (911) 448-08-30', 'font-size: 12px; color: #999;');
