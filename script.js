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
