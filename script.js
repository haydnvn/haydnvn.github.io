// 2000s Internet JavaScript with all the classic effects!

// Visitor counter that increments
let visitorCount = parseInt(localStorage.getItem('visitorCount') || '1337');
visitorCount++;
localStorage.setItem('visitorCount', visitorCount.toString());
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('counter').textContent = visitorCount.toString().padStart(6, '0');
});

// Navigation functionality with 2000s flair
function showSection(sectionName) {
    // Hide all sections with fade effect
    const sections = document.querySelectorAll('.retro-section');
    sections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active');
    });

    // Show target section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.style.display = 'block';
        targetSection.classList.add('active');
        
        // Add some retro transition effect
        targetSection.style.opacity = '0';
        setTimeout(() => {
            targetSection.style.opacity = '1';
            targetSection.style.transition = 'opacity 0.5s ease-in-out';
        }, 50);
    }

    // Update navigation active state
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === sectionName) {
            link.classList.add('active');
        }
    });

    // Play a sound effect (if we had one)
    console.log('*BEEP BOOP* Navigating to ' + sectionName + '!');
}

// Add click listeners to navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            if (section) {
                showSection(section);
            }
        });
    });

    // Random retro effects
    addRetroEffects();
    
    // Easter eggs
    addEasterEggs();
    
    // Konami code support
    addKonamiCode();
});

// Add random retro effects
function addRetroEffects() {
    // Random sparkle effect on mouse move
    document.addEventListener('mousemove', function(e) {
        if (Math.random() < 0.05) { // 5% chance
            createSparkle(e.clientX, e.clientY);
        }
    });
    
    // Random popup messages
    setTimeout(() => {
        if (Math.random() < 0.3) { // 30% chance
            alert('Welcome to my AWESOME homepage! Don\'t forget to sign my guestbook! 😎');
        }
    }, 5000);
    
    // Status bar messages
    const statusMessages = [
        "Loading... Please wait...",
        "Welcome to cyberspace!",
        "You've got mail!",
        "Connection established",
        "Browsing the information superhighway...",
        "Error 404: Coolness not found... just kidding! 😉"
    ];
    
    let messageIndex = 0;
    setInterval(() => {
        window.status = statusMessages[messageIndex];
        messageIndex = (messageIndex + 1) % statusMessages.length;
    }, 3000);
}

// Create sparkle effect
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.fontSize = '16px';
    sparkle.style.zIndex = '9999';
    sparkle.style.animation = 'sparkle-fade 1s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
    }, 1000);
}

// Add sparkle animation CSS
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkle-fade {
        0% { 
            opacity: 1; 
            transform: scale(0) rotate(0deg); 
        }
        50% { 
            opacity: 1; 
            transform: scale(1) rotate(180deg); 
        }
        100% { 
            opacity: 0; 
            transform: scale(0) rotate(360deg); 
        }
    }
`;
document.head.appendChild(sparkleStyle);

// Easter eggs for the true 2000s experience
function addEasterEggs() {
    // Secret message in console
    console.log('%c🌟 Welcome to the Matrix, Neo! 🌟', 'color: #00ff00; font-size: 20px; font-weight: bold;');
    console.log('%cYou found the secret developer console! You must be a real hacker! 😎', 'color: #ff0000; font-size: 14px;');
    console.log('%c~ Type "showSecret()" for a surprise ~', 'color: #0000ff; font-style: italic;');
    
    // Global function for console easter egg
    window.showSecret = function() {
        alert('🎉 CONGRATULATIONS! 🎉\n\nYou discovered the secret developer message!\nYou are truly a master of the cyber arts!\n\n~ Welcome to the elite hackers club ~');
        
        // Change background temporarily
        const originalBg = document.body.style.background;
        document.body.style.background = 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'><rect width=\'100\' height=\'100\' fill=\'%23000\'/><text x=\'50\' y=\'50\' text-anchor=\'middle\' fill=\'%2300ff00\' font-size=\'10\'>MATRIX</text>