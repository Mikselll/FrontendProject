"use strict";
const changeLettersColor = (text) => {
    let spaceCount = 0;
    const newText = Array.from(text).map((letter, index) => {
        if (letter === ' ') {
            spaceCount += 1;
            return letter;
        }
        return spaceCount % 2 === index % 2 ? `<span class='font-orange'>${letter}</span>` : letter;
    }).join('');
    return newText;
};
const contactSelectors = ['.contacts__email', '.contacts__number'];
contactSelectors.forEach((selector) => {
    const contact = document.querySelector(selector);
    const contactText = contact === null || contact === void 0 ? void 0 : contact.textContent;
    if (!contactText)
        return;
    const newContactText = changeLettersColor(contactText);
    contact.innerHTML = newContactText;
});
