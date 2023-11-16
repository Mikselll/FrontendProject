const annoyingMessage = document.querySelector('.annoying-message');
const annoyingCloseButton = annoyingMessage.querySelector('.button--close');

annoyingCloseButton.addEventListener('click', () => {
  annoyingMessage.setAttribute('style', 'display: none');
  setTimeout(() => {
    annoyingMessage.setAttribute('style', 'display: flex');
  }, 120000);
});