document.querySelectorAll('.link-card, .socials a').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (link.getAttribute('href').startsWith('#')) event.preventDefault();
  });
});
