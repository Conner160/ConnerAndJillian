// Wedding Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initNavigation();
    initCountdown();
    initScrollAnimations();
    initRSVPForm();
    initSmoothScrolling();
});

// Navigation functionality
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Countdown Timer
function initCountdown() {
    // Set the wedding date - UPDATE THIS WITH ACTUAL WEDDING DATE
    const weddingDate = new Date('2024-12-31T18:00:00').getTime();
    
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
        return;
    }

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance < 0) {
            // Wedding day has passed
            daysElement.textContent = '000';
            hoursElement.textContent = '00';
            minutesElement.textContent = '00';
            secondsElement.textContent = '00';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysElement.textContent = days.toString().padStart(3, '0');
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
    }

    // Update countdown immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Scroll animations
function initScrollAnimations() {
    // Create intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in class to elements and observe them
    const animateElements = document.querySelectorAll('.section-header, .detail-card, .story-item, .gallery-item, .registry-item');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(251, 249, 247, 0.98)';
        } else {
            navbar.style.background = 'rgba(251, 249, 247, 0.95)';
        }
    });
}

// RSVP Form handling
function initRSVPForm() {
    const rsvpForm = document.getElementById('rsvp-form');
    
    if (!rsvpForm) return;

    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(rsvpForm);
        const data = {};
        
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Validate form
        if (!validateRSVPForm(data)) {
            return;
        }

        // Show loading state
        const submitBtn = rsvpForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;
        rsvpForm.classList.add('loading');

        // Simulate form submission (replace with actual submission logic)
        setTimeout(() => {
            // Reset form
            rsvpForm.reset();
            
            // Show success message
            showSuccessMessage();
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            rsvpForm.classList.remove('loading');
        }, 2000);
    });
}

// Validate RSVP form
function validateRSVPForm(data) {
    const errors = [];

    if (!data.firstName || data.firstName.trim().length < 2) {
        errors.push('Please enter a valid first name');
    }

    if (!data.lastName || data.lastName.trim().length < 2) {
        errors.push('Please enter a valid last name');
    }

    if (!data.email || !isValidEmail(data.email)) {
        errors.push('Please enter a valid email address');
    }

    if (!data.guests) {
        errors.push('Please select the number of guests');
    }

    if (!data.attending) {
        errors.push('Please let us know if you will be attending');
    }

    if (errors.length > 0) {
        showErrorMessage(errors.join('<br>'));
        return false;
    }

    return true;
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show success message
function showSuccessMessage() {
    const message = document.createElement('div');
    message.className = 'alert alert-success';
    message.innerHTML = `
        <div style="
            background: #d4edda;
            color: #155724;
            padding: 1rem;
            border-radius: 8px;
            margin-bottom: 1rem;
            border: 1px solid #c3e6cb;
            text-align: center;
        ">
            <strong>Thank you!</strong> Your RSVP has been submitted successfully. We can't wait to celebrate with you!
        </div>
    `;

    const form = document.getElementById('rsvp-form');
    form.parentNode.insertBefore(message, form);

    // Remove message after 5 seconds
    setTimeout(() => {
        message.remove();
    }, 5000);
}

// Show error message
function showErrorMessage(errors) {
    const message = document.createElement('div');
    message.className = 'alert alert-error';
    message.innerHTML = `
        <div style="
            background: #f8d7da;
            color: #721c24;
            padding: 1rem;
            border-radius: 8px;
            margin-bottom: 1rem;
            border: 1px solid #f5c6cb;
            text-align: center;
        ">
            <strong>Please correct the following errors:</strong><br>
            ${errors}
        </div>
    `;

    const form = document.getElementById('rsvp-form');
    form.parentNode.insertBefore(message, form);

    // Remove message after 5 seconds
    setTimeout(() => {
        message.remove();
    }, 5000);
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Gallery lightbox functionality (optional enhancement)
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('.gallery-img');
            openLightbox(img.src, img.alt);
        });
    });
}

// Simple lightbox function
function openLightbox(src, alt) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="lightbox-close">&times;</span>
            <img src="${src}" alt="${alt}" class="lightbox-img">
        </div>
    `;
    
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        cursor: pointer;
    `;
    
    const content = lightbox.querySelector('.lightbox-content');
    content.style.cssText = `
        position: relative;
        max-width: 90%;
        max-height: 90%;
    `;
    
    const img = lightbox.querySelector('.lightbox-img');
    img.style.cssText = `
        width: 100%;
        height: auto;
        max-height: 90vh;
        object-fit: contain;
    `;
    
    const closeBtn = lightbox.querySelector('.lightbox-close');
    closeBtn.style.cssText = `
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        z-index: 10001;
    `;
    
    document.body.appendChild(lightbox);
    
    // Close lightbox when clicking outside image or on close button
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target === closeBtn) {
            document.body.removeChild(lightbox);
        }
    });
    
    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && document.contains(lightbox)) {
            document.body.removeChild(lightbox);
        }
    });
}

// Utility functions
function debounce(func, wait) {
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

// Initialize gallery if needed
// Uncomment the line below to enable gallery lightbox functionality
// initGallery();

// Mobile menu animation enhancement
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            
            // Animated hamburger menu
            const bars = this.querySelectorAll('.bar');
            if (this.classList.contains('active')) {
                bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }
});