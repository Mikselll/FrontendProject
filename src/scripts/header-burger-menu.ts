const buttonOpen = document.querySelector<HTMLButtonElement>('#header .button--open');
const buttonClose = document.querySelector<HTMLButtonElement>('#header .button--close');
const burgerMenu = document.querySelector<HTMLDivElement>('.burger-wrapper');
const burgerContent = document.querySelector<HTMLDivElement>('.content-burger');
const burgerLinks = document.querySelectorAll<HTMLAnchorElement>('.navigation-burger__items .item');

buttonOpen?.addEventListener('click', () => {
  burgerMenu?.classList.add('burger-wrapper--active');
  burgerContent?.classList.add('content-burger--active');
});

buttonClose?.addEventListener('click', () => {
  burgerMenu?.classList.remove('burger-wrapper--active');
  burgerContent?.classList.remove('content-burger--active');
});

burgerLinks.forEach((link) => {
  link.addEventListener('click', () => {
    burgerMenu?.classList.remove('burger-wrapper--active');
    burgerContent?.classList.remove('content-burger--active');
  });
});