"use strict";
const annoyingMessage = document.querySelector('.annoying-message');
const annoyingCloseButton = annoyingMessage === null || annoyingMessage === void 0 ? void 0 : annoyingMessage.querySelector('.button--close');
annoyingCloseButton === null || annoyingCloseButton === void 0 ? void 0 : annoyingCloseButton.addEventListener('click', () => {
    const twoMinutes = 120000;
    annoyingMessage === null || annoyingMessage === void 0 ? void 0 : annoyingMessage.classList.remove('annoying-message--active');
    setTimeout(() => {
        annoyingMessage === null || annoyingMessage === void 0 ? void 0 : annoyingMessage.classList.add('annoying-message--active');
    }, twoMinutes);
});
