// script.js - Main JavaScript

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navbarMenu = document.getElementById('navbarMenu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navbarMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navbarMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
}

// Language Selector
const langBtn = document.getElementById('langBtn');
const langMenu = document.getElementById('langMenu');

if (langBtn) {
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langMenu.classList.toggle('active');
    });

    // Language selection
    langMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = link.getAttribute('data-lang');
            if (window.i18n) {
                // Wait a bit to ensure languages are loaded
                setTimeout(() => {
                    window.i18n.setLanguage(lang);
                    langMenu.classList.remove('active');
                }, 100);
            }
        });
    });

    // Close language menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.language-selector')) {
            langMenu.classList.remove('active');
        }
    });
}

// Carousel
const carousel = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentSlide = 0;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[n].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

if (prevBtn) {
    prevBtn.addEventListener('click', prevSlide);
}

if (nextBtn) {
    nextBtn.addEventListener('click', nextSlide);
}

// Auto-rotate carousel every 5 seconds
setInterval(nextSlide, 5000);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        // Check if href is valid (not just "#")
        if (href && href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Booking Form Handling
const bookingForm = document.getElementById('bookingForm');
const hiddenIframe = document.getElementById('hidden_iframe');

if (bookingForm) {
    let formSubmitted = false;

    // Handle iframe load (successful submission)
    if (hiddenIframe) {
        hiddenIframe.addEventListener('load', function () {
            if (formSubmitted) {
                // Show success message
                const successMsg = window.i18n ? window.i18n.t('form_success') : 'Booking request sent successfully! We will contact you soon.';
                alert(successMsg);

                // Reset form
                bookingForm.reset();

                // Reset button state
                const submitBtn = bookingForm.querySelector('.btn-submit');
                if (submitBtn) {
                    submitBtn.textContent = window.i18n ? window.i18n.t('form_submit') : 'Send Booking Request';
                    submitBtn.disabled = false;
                }

                formSubmitted = false;
            }
        });
    }

    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Validate form
        if (!validateForm()) {
            return false;
        }

        // Check if Google Form URL is configured
        const action = this.getAttribute('action');
        if (!action || action === 'YOUR_GOOGLE_FORM_URL_HERE') {
            alert('Please configure your Google Form URL in the HTML file. See the comment in the booking form section.');
            return false;
        }

        // Show loading message
        const submitBtn = this.querySelector('.btn-submit');
        if (submitBtn) {
            submitBtn.textContent = window.i18n ? window.i18n.t('form_sending') : 'Sending...';
            submitBtn.disabled = true;
        }

        // Mark that form is being submitted
        formSubmitted = true;

        // Submit to Google Forms using iframe method
        // The form will submit normally and the iframe will handle the response
        this.submit();

        // Fallback: Reset button after 3 seconds in case iframe doesn't trigger
        setTimeout(() => {
            if (formSubmitted && submitBtn) {
                submitBtn.textContent = window.i18n ? window.i18n.t('form_submit') : 'Send Booking Request';
                submitBtn.disabled = false;
                formSubmitted = false;
            }
        }, 3000);
    });
}

// Form validation
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const date = document.getElementById('date').value;
    const passengers = document.getElementById('passengers').value;
    const pickup = document.getElementById('pickup').value.trim();
    const destination = document.getElementById('destination').value.trim();

    if (!name || !email || !phone || !date || !passengers || !pickup || !destination) {
        alert('Please fill in all required fields');
        return false;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    return true;
}

// Add form validation to submit button
const submitBtn = document.querySelector('.btn-submit');
if (submitBtn) {
    submitBtn.addEventListener('click', function (e) {
        if (!validateForm()) {
            e.preventDefault();
        }
    });
}

// Intersection Observer for scroll animations
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

document.querySelectorAll('.service-card, .contact-card, .review-card').forEach(element => {
    observer.observe(element);
});

// Add scroll event listener for navbar
document.addEventListener('DOMContentLoaded', () => {
    // Highlight active nav link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-menu a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
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
});

// Update service type options when language changes
function updateServiceTypeOptions() {
    const serviceTypeSelect = document.getElementById('service_type');
    if (serviceTypeSelect && window.i18n) {
        const options = serviceTypeSelect.querySelectorAll('option[data-i18n]');
        options.forEach(option => {
            const key = option.getAttribute('data-i18n');
            if (key) {
                option.textContent = window.i18n.t(key);
            }
        });
    }
}

// Initialize service type options on load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (window.i18n) {
            updateServiceTypeOptions();
        }
    }, 500);
});

console.log('VIP Service Taxi - Frontend Ready');
