document.addEventListener('DOMContentLoaded', () => {

  // Elements
  const menuToggle = document.getElementById('menuToggle');
  const siteNav = document.getElementById('siteNav');
  const siteHeader = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateScrollMargin() {
    if (siteHeader) {
      document.documentElement.style.setProperty(
        '--scroll-margin-top',
        `${siteHeader.getBoundingClientRect().height}px`
      );
    }
  }

  updateScrollMargin();
  window.addEventListener('resize', updateScrollMargin);

  // Mobile Menu Toggle
  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // Close mobile nav when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      if (siteNav && siteNav.classList.contains('open')) {
        siteNav.classList.remove('open');
      }

      // Do NOT manually update .active here.
      // Scrollspy is responsible for the active navigation state.
    });
  });

  // Scrollspy
  // The active navigation item is determined only by scroll position.
  // Scrollspy
const sections = Array.from(document.querySelectorAll('section[id]')).filter(section =>
  Array.from(navLinks).some(link => link.getAttribute('href') === `#${section.id}`)
);

function updateActiveNav() {
  let current = 'home';
  const scrollY = window.scrollY;
  const activationPoint = scrollY + window.innerHeight * 0.5;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;

    if (sectionTop <= activationPoint) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    const href = link.getAttribute('href').replace('#', '');
    link.classList.toggle('active', href === current);
  });
}

window.addEventListener('scroll', () => {
  updateActiveNav();

  const maxScrollDistance = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  const scrollProgress = maxScrollDistance > 0
    ? Math.round((window.scrollY / maxScrollDistance) * 100)
    : 100;

  console.log(`Scroll progress: ${scrollProgress}% (${Math.round(window.scrollY)}px / ${Math.round(maxScrollDistance)}px)`);
}, { passive: true });

// Set correct state immediately on page load
updateActiveNav();
});