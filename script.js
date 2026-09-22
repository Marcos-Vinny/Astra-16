// ΛSTRA-16 : ALLIΛNCE — script.js
// Espaço livre pra você adicionar interatividade (menu mobile, animações, etc).

document.addEventListener('DOMContentLoaded', () => {
  // Exemplo: avisa no console se o link do Discord ainda não foi trocado
  const discordLink = document.getElementById('discord-link');
  if (discordLink && discordLink.getAttribute('href') === '#') {
    console.warn('[ΛSTRA-16] Lembre-se de trocar o href do #discord-link pelo convite real do Discord.');
  }

  // Exemplo: rolagem suave já é feita via CSS (scroll-behavior), mas se quiser
  // controlar via JS (offset por causa do nav fixo, etc), pode fazer aqui.
});
