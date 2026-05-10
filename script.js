const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const yearEl = document.getElementById('year');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

if (form && formMessage) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    formMessage.textContent = 'Thanks for reaching out. The Gooch team will contact you soon.';
    form.reset();
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
