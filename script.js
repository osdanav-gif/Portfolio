const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const sections = document.querySelectorAll('main section[id]');
const updateActiveNav = () => {
  const current = [...sections].find((section) => {
    const bounds = section.getBoundingClientRect();
    return bounds.top <= 160 && bounds.bottom >= 160;
  });

  navLinks.forEach((link) => {
    link.classList.toggle('is-active', current?.id === link.getAttribute('href').slice(1));
  });
};

window.addEventListener('scroll', updateActiveNav, { passive: true });
