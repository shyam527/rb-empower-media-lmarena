// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            company: document.getElementById('company').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value
        };

        // Here you would normally send the data to a server
        // For now, we'll just show a success message
        console.log('Form Data:', formData);
        
        // Show success message
        showSuccessMessage();
        
        // Reset form
        contactForm.reset();
    });
}

// Show Success Message Function
function showSuccessMessage() {
    // Create success message if it doesn't exist
    let successMsg = document.querySelector('.success-message');
    if (!successMsg) {
        successMsg = document.createElement('div');
        successMsg.className = 'success-message';
        successMsg.textContent = 'Thank you for your message! We will get back to you soon.';
        contactForm.parentNode.insertBefore(successMsg, contactForm);
    }
    
    successMsg.classList.add('show');
    
    // Hide message after 5 seconds
    setTimeout(() => {
        successMsg.classList.remove('show');
    }, 5000);
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Form Validation
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = '#e74c3c';
            isValid = false;
        } else {
            field.style.borderColor = '#ddd';
        }
        
        // Email validation
        if (field.type === 'email' && field.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                field.style.borderColor = '#e74c3c';
                isValid = false;
            }
        }
    });
    
    return isValid;
}

// Add validation to contact form
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        if (!validateForm(this)) {
            e.preventDefault();
            alert('Please fill in all required fields correctly.');
        }
    });
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and feature items
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.service-card, .feature, .value-item');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
});

// Add loading state to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.type === 'submit') return; // Skip for submit buttons
        
        // Add loading animation
        const originalText = this.textContent;
        this.innerHTML = originalText + '<span class="loading"></span>';
        this.style.pointerEvents = 'none';
        
        // Remove loading after 2 seconds (simulated)
        setTimeout(() => {
            this.innerHTML = originalText;
            this.style.pointerEvents = 'auto';
        }, 2000);
    });
});

// Console message
console.log('%c Welcome to RB Empower Media! ', 'background: #3498db; color: white; font-size: 20px; padding: 10px;');
console.log('Looking for digital marketing solutions? Contact us at info@rbempowermedia.com');