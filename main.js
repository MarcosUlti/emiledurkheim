const hud = document.querySelector('.optionlmao');
const hudimg = document.querySelector('#hudimg');

hudimg.addEventListener('click', () => {
  hud.classList.toggle('active');
});