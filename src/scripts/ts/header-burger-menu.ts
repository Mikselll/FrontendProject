const buttonOpen: HTMLButtonElement | null = document.querySelector('#header .button--open');
const buttonClose: HTMLButtonElement | null = document.querySelector('#header .button--close');
const burgerMenu: HTMLDivElement | null = document.querySelector('.burger-wrapper');
const burgerContent: HTMLDivElement | null = document.querySelector('.content-burger');
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