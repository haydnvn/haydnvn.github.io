// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Typing Animation
const typedName = document.getElementById('typed-name');
const typedSubtitle = document.getElementById('typed-subtitle');

const subtitleText = "AI Engineer & Software Developer";

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Start typing animation after page loads
window.addEventListener('load', () => {
    setTimeout(() => {
        typeWriter(typedSubtitle, subtitleText, 80);
    }, 2000);
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Active Navigation Link Highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Project Card Hover Effects handled by CSS

// Skill Items Animation Delay
document.querySelectorAll('.skill-item').forEach((skill, index) => {
    skill.style.animationDelay = `${index * 0.1}s`;
});

// Contact Links Hover Effect
document.querySelectorAll('.contact-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        const icon = this.querySelector('i');
        icon.style.transform = 'scale(1.2) rotate(5deg)';
    });
    
    link.addEventListener('mouseleave', function() {
        const icon = this.querySelector('i');
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});





// Add CSS for cursor trail
const style = document.createElement('style');
style.textContent = `

    
    .nav-link.active {
        color: #00FF00;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);