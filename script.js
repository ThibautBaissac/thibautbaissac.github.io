// ======================
// Mobile Menu Toggle
// ======================
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn?.addEventListener('click', () => {
    navLinks?.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');

    // Animate hamburger icon
    const spans = mobileMenuBtn.querySelectorAll('span');
    if (mobileMenuBtn.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(7px, 7px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
    } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    }
});

// Close mobile menu when clicking on a link
navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks?.classList.remove('active');
        mobileMenuBtn?.classList.remove('active');

        // Reset hamburger icon
        const spans = mobileMenuBtn?.querySelectorAll('span');
        if (spans) {
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        }
    });
});

// ======================
// Navbar Scroll Effect
// ======================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar?.classList.add('scrolled');
    } else {
        navbar?.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ======================
// Smooth Scroll for Anchor Links
// ======================
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

// ======================
// Scroll Animations
// ======================
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add data-scroll attribute to elements that should animate
const animateElements = document.querySelectorAll(`
    .skill-category,
    .timeline-item,
    .project-card,
    .contact-card
`);

animateElements.forEach(el => {
    el.setAttribute('data-scroll', '');
    observer.observe(el);
});

// ======================
// Active Section Highlighting
// ======================
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-links a');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinksAll.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ======================
// Parallax Effect for Hero
// ======================
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (hero) {
        const parallaxSpeed = 0.5;
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
});

// ======================
// Project Card Tilt Effect
// ======================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// ======================
// Typing Effect for Hero Title
// ======================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Optional: Uncomment to enable typing effect
// const heroTitle = document.querySelector('.hero-title');
// if (heroTitle) {
//     const text = heroTitle.textContent;
//     typeWriter(heroTitle, text, 50);
// }

// ======================
// Skill Progress Animation
// ======================
function animateSkillBars() {
    const skillCategories = document.querySelectorAll('.skill-category');

    skillCategories.forEach((category, index) => {
        setTimeout(() => {
            category.style.opacity = '0';
            category.style.transform = 'translateY(20px)';

            setTimeout(() => {
                category.style.transition = 'all 0.6s ease';
                category.style.opacity = '1';
                category.style.transform = 'translateY(0)';
            }, 50);
        }, index * 100);
    });
}

// Trigger skill animation when skills section is in view
const skillsSection = document.querySelector('.skills-section');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    skillsObserver.observe(skillsSection);
}

// ======================
// Timeline Animation on Scroll
// ======================
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 100);
            timelineObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-50px)';
    item.style.transition = 'all 0.6s ease';
    timelineObserver.observe(item);
});

// ======================
// Cursor Effect (Optional)
// ======================
function createCursorEffect() {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    cursor.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid #6366f1;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease;
        display: none;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.display = 'block';
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });

    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });
}

// Uncomment to enable custom cursor (desktop only)
// if (window.innerWidth > 768) {
//     createCursorEffect();
// }

// ======================
// Performance: Throttle Scroll Events
// ======================
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll-heavy functions
window.addEventListener('scroll', throttle(() => {
    highlightNavigation();
}, 100));

// ======================
// Console Easter Egg
// ======================
console.log('%c👋 Hello Developer!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cInterested in the code? Check out my GitHub: https://github.com/ThibautBaissac', 'font-size: 14px; color: #8b5cf6;');

// ======================
// Page Load Performance
// ======================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Log performance metrics
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
    }
});

// ======================
// Accessibility: Skip to Content
// ======================
const skipLink = document.createElement('a');
skipLink.href = '#about';
skipLink.textContent = 'Skip to content';
skipLink.className = 'skip-link';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--primary-color);
    color: white;
    padding: 8px 16px;
    text-decoration: none;
    z-index: 10000;
    transition: top 0.3s ease;
`;
skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});
skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

// ======================
// Keyboard Navigation Enhancement
// ======================
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && navLinks?.classList.contains('active')) {
        navLinks?.classList.remove('active');
        mobileMenuBtn?.classList.remove('active');
    }

    // Arrow keys for section navigation
    if (e.altKey) {
        const currentSection = Array.from(sections).find(section => {
            const rect = section.getBoundingClientRect();
            return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        });

        if (currentSection) {
            const allSections = Array.from(sections);
            const currentIndex = allSections.indexOf(currentSection);

            if (e.key === 'ArrowDown' && currentIndex < allSections.length - 1) {
                allSections[currentIndex + 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else if (e.key === 'ArrowUp' && currentIndex > 0) {
                allSections[currentIndex - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }
});

// ======================
// Print Styles Handler
// ======================
window.addEventListener('beforeprint', () => {
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', () => {
    document.body.classList.remove('printing');
});

// ======================
// Analytics (Placeholder)
// ======================
function trackEvent(category, action, label) {
    // Implement your analytics tracking here
    console.log(`Track: ${category} - ${action} - ${label}`);
}

// Track project card clicks
projectCards.forEach(card => {
    const projectName = card.querySelector('h3')?.textContent;
    const link = card.querySelector('.project-link');

    link?.addEventListener('click', () => {
        trackEvent('Projects', 'Click', projectName || 'Unknown');
    });
});

// Track social media clicks
document.querySelectorAll('.hero-social a, .contact-card').forEach(link => {
    link.addEventListener('click', (e) => {
        const platform = link.getAttribute('aria-label') || 'Unknown';
        trackEvent('Social', 'Click', platform);
    });
});
