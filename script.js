// Scroll effect for navbar
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Toggle mobile menu
function toggleMenu() {
  document.getElementById('menu').classList.toggle('open');
}
