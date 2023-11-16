const buttonOpen = document.querySelector('#header .button--open');
const buttonClose = document.querySelector('#header .button--close');
const burgerMenu = document.querySelector('.burger-wrapper');
const burgerContent = document.querySelector('.content-burger');
const burgerLinks = document.querySelectorAll('.navigation-burger__items .item');

buttonOpen.addEventListener('click', () => {
  burgerMenu.classList.add('burger-wrapper--active');
  burgerContent.classList.add('content-burger--active');
});

buttonClose.addEventListener('click', () => {
  burgerMenu.classList.remove('burger-wrapper--active');
  burgerContent.classList.remove('content-burger--active');
});

burgerLinks.forEach((link) => {
  link.addEventListener('click', () => {
    burgerMenu.classList.remove('burger-wrapper--active');
    burgerContent.classList.remove('content-burger--active');
  });
});
