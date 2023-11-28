"use strict";
const buttonOpen = document.querySelector('#header .button--open');
const buttonClose = document.querySelector('#header .button--close');
const burgerMenu = document.querySelector('.burger-wrapper');
const burgerContent = document.querySelector('.content-burger');
const burgerLinks = document.querySelectorAll('.navigation-burger__items .item');
buttonOpen === null || buttonOpen === void 0 ? void 0 : buttonOpen.addEventListener('click', () => {
    burgerMenu === null || burgerMenu === void 0 ? void 0 : burgerMenu.classList.add('burger-wrapper--active');
    burgerContent === null || burgerContent === void 0 ? void 0 : burgerContent.classList.add('content-burger--active');
});
buttonClose === null || buttonClose === void 0 ? void 0 : buttonClose.addEventListener('click', () => {
    burgerMenu === null || burgerMenu === void 0 ? void 0 : burgerMenu.classList.remove('burger-wrapper--active');
    burgerContent === null || burgerContent === void 0 ? void 0 : burgerContent.classList.remove('content-burger--active');
});
burgerLinks.forEach((link) => {
    link.addEventListener('click', () => {
        burgerMenu === null || burgerMenu === void 0 ? void 0 : burgerMenu.classList.remove('burger-wrapper--active');
        burgerContent === null || burgerContent === void 0 ? void 0 : burgerContent.classList.remove('content-burger--active');
    });
});
