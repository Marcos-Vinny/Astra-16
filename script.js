

document.addEventListener('DOMContentLoaded', () => {
  
  const discordLink = document.getElementById('discord-link');
  if (discordLink && discordLink.getAttribute('href') === '#') {
    console.warn('[ΛSTRA-16] Lembre-se de trocar o href do #discord-link pelo convite real do Discord.');
  }
  // Menu mobile
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('navlinks');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.classList.toggle('active', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen);
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
