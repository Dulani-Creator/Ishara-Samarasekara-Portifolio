
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    btn.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });

    // 2. Scroll Animation (Fade In)
    const fadeElements = document.querySelectorAll('.fade-in-section');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Trigger visibility immediately for elements already in viewport on load
    setTimeout(() => {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight) {
                element.classList.add('is-visible');
            }
        });
    }, 100);
});

// Project Details Toggle Function
function toggleProjectDetails(projectId, btnElement) {
    const detailsElement = document.getElementById(`project-details-${projectId}`);
    
    if (detailsElement.style.display === 'none' || detailsElement.style.display === '') {
        detailsElement.style.display = 'block';
        btnElement.innerHTML = '<i class="fas fa-chevron-up"></i> Show Less';
    } else {
        detailsElement.style.display = 'none';
        btnElement.innerHTML = '<i class="fas fa-chevron-down"></i> Learn More';
    }
}
