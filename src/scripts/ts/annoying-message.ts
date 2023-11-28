const annoyingMessage: HTMLDivElement | null = document.querySelector('.annoying-message');
const annoyingCloseButton: HTMLButtonElement | null | undefined = annoyingMessage?.querySelector('.button--close');

annoyingCloseButton?.addEventListener('click', () => {
  const twoMinutes = 120000;
  annoyingMessage?.classList.remove('annoying-message--active');
  setTimeout(() => {
    annoyingMessage?.classList.add('annoying-message--active');
  }, twoMinutes);
});