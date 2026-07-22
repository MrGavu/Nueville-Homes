// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

function closeNav(){
  mainNav.classList.remove('is-open');
  navToggle.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
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

// Close menu when a nav link is tapped (mobile)
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeNav);
});

// Close on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeNav();
});

// Close if window is resized back to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 900) closeNav();
});
