// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Stop observing once it's shown
        }
    });
}, observerOptions);

document.querySelectorAll('.hidden').forEach((section) => {
    observer.observe(section);
});

// Typed.js Initialization (Typing Effect in Hero)
if (document.querySelector('.typed-role')) {
    new Typed('.typed-role', {
        strings: ['Backend Developer.', 'CS Student.', 'AI Enthusiast.', 'Problem Solver.'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    });
}

// Particles.js Initialization (Background Effect)
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 40,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#64ffda" // Neon cyan to match primary color
      },
      "shape": {
        "type": "circle",
      },
      "opacity": {
        "value": 0.2,
        "random": false,
      },
      "size": {
        "value": 3,
        "random": true,
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#64ffda",
        "opacity": 0.1,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 0.5
          }
        },
        "push": {
          "particles_nb": 4
        }
      }
    },
    "retina_detect": true
});

// Copy email to clipboard
const copyEmailBtn = document.getElementById('copy-email-btn');
const emailToast = document.getElementById('email-toast');

if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const email = copyEmailBtn.getAttribute('data-email');
        navigator.clipboard.writeText(email).then(() => {
            emailToast.classList.add('show-toast');
            setTimeout(() => {
                emailToast.classList.remove('show-toast');
            }, 2000);
        });
    });
}

