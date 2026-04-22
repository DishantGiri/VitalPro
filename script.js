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
});
