const annoyingMessage = document.querySelector<HTMLDivElement>('.annoying-message');
const annoyingCloseButton = annoyingMessage?.querySelector<HTMLButtonElement>('.button--close');

annoyingCloseButton?.addEventListener('click', () => {
  const twoMinutes = 120000;
  annoyingMessage?.classList.remove('annoying-message--active');
  setTimeout(() => {
    annoyingMessage?.classList.add('annoying-message--active');
  }, twoMinutes);
});