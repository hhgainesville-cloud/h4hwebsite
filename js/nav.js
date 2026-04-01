// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links  = document.getElementById('navLinks');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
}
// Mobile dropdown toggles
document.querySelectorAll('.has-dropdown > a').forEach(a => {
  a.addEventListener('click', e => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      a.closest('.has-dropdown').classList.toggle('open');
    }
  });
});
// Highlight active page
const current = location.pathname.split('/').pop();
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href') && a.getAttribute('href').endsWith(current)) {
    a.classList.add('active');
  }
});
