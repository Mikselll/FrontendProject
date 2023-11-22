const annoyingMessage = document.querySelector('.annoying-message');
const annoyingCloseButton = annoyingMessage.querySelector('.button--close');

annoyingCloseButton.addEventListener('click', () => {
  const twoMinutes = 120000;
  annoyingMessage.classList.remove('annoying-message--active');
  setTimeout(() => {
    annoyingMessage.classList.add('annoying-message--active');
  }, twoMinutes);
});