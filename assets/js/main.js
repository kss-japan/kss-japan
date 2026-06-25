document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  targets.forEach((el) => observer.observe(el));

  // Kinetic typography: hero headline reacts to scroll position
  const heroTitle = document.querySelector('.hero h1');
  const hero = document.querySelector('.hero');
  if (heroTitle && hero) {
    let ticking = false;
    const update = () => {
      const heroHeight = hero.offsetHeight;
      const progress = Math.min(Math.max(window.scrollY / heroHeight, 0), 1);
      const scale = 1 - progress * 0.03;
      heroTitle.style.transform = `scale(${scale})`;
      heroTitle.style.letterSpacing = `${-1 - progress * 0.5}px`;
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    });
  }
});
