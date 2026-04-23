// Intersection observer for subtle reveal on scroll (future-proof)
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('visible');
        });
    }, { threshold: 0.15 });
    document.querySelectorAll('.why-box, .cta-group').forEach(el => observer.observe(el));
}

// CTA shimmer re-trigger on hover (for accessibility focus too)
document.querySelectorAll('.cta-btn').forEach(btn => {
    btn.addEventListener('focus', () => btn.classList.add('focused'));
    btn.addEventListener('blur', () => btn.classList.remove('focused'));
});
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("navbar-toggle");
    const links = document.getElementById("navbar-links");

    if (toggle && links) {
        toggle.addEventListener("click", () => {
            const isExpanded = toggle.getAttribute("aria-expanded") === "true";
            toggle.setAttribute("aria-expanded", !isExpanded);
            links.classList.toggle("active");
        });

        // Close menu when a link is clicked
        const navLinks = links.querySelectorAll("a");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                toggle.setAttribute("aria-expanded", "false");
                links.classList.remove("active");
            });
        });
    }

    // Floating CTA visibility based on Hero section scroll
    const hero = document.querySelector('.hero') || document.querySelector('.legal-hero');
    const floatingCta = document.getElementById('floating-cta');
    
    if (hero && floatingCta) {
        const ctaObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // If hero is NOT intersecting (scrolled past), show button
                if (!entry.isIntersecting) {
                    floatingCta.classList.add('visible');
                } else {
                    floatingCta.classList.remove('visible');
                }
            });
        }, { threshold: 0.1 });
        
        ctaObserver.observe(hero);
    }
});
