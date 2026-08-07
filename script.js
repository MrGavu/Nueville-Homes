// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

function closeNav(){
  mainNav.classList.remove('is-open');
  navToggle.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
  if (typeof closeDropdowns === 'function') closeDropdowns();
}

function openNav(){
  mainNav.classList.add('is-open');
  navToggle.classList.add('is-open');
  navToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.contains('is-open');
  isOpen ? closeNav() : openNav();
});

// Close menu when a nav link is tapped (mobile) — except the Projects
// trigger, which toggles its dropdown instead of navigating away
mainNav.querySelectorAll('a').forEach(link => {
  if (link.classList.contains('nav-dropdown-trigger')) return;
  link.addEventListener('click', closeNav);
});

// Close on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape'){
    closeNav();
    closeDropdowns();
  }
});

// Projects dropdown — tap to toggle (mobile/touch), hover handles desktop via CSS
const dropdownTrigger = document.querySelector('.nav-item.has-dropdown > .nav-dropdown-trigger');
const dropdownItem = document.querySelector('.nav-item.has-dropdown');

function closeDropdowns(){
  if (dropdownItem) dropdownItem.classList.remove('is-open');
}

if (dropdownTrigger && dropdownItem){
  dropdownTrigger.addEventListener('click', (e) => {
    if (window.innerWidth <= 900){
      e.preventDefault();
      dropdownItem.classList.toggle('is-open');
    }
  });
}

// Close dropdown when clicking elsewhere
document.addEventListener('click', (e) => {
  if (dropdownItem && !e.target.closest('.nav-item.has-dropdown')) closeDropdowns();
});

// Close if window is resized back to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 900) closeNav();
});

// Header switches from transparent-over-hero to solid once the page scrolls
const siteHeader = document.getElementById('siteHeader');
const hero = document.getElementById('hero');

function updateHeaderState(){
  const threshold = hero ? hero.offsetHeight - 90 : 80;
  siteHeader.classList.toggle('is-scrolled', window.scrollY > threshold);
}

updateHeaderState();
window.addEventListener('scroll', updateHeaderState, { passive: true });
window.addEventListener('resize', updateHeaderState);

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Gentle reveal-on-scroll for section headings and cards
const revealTargets = document.querySelectorAll(
  '.section-head, .about-copy, .about-collage, .service-card, .gallery-item, .stat, .why-item, .testimonial-card'
);

if ('IntersectionObserver' in window && revealTargets.length){
  revealTargets.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  revealTargets.forEach(el => revealObserver.observe(el));
}