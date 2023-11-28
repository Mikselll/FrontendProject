"use strict";
const contactNumber = document.querySelector('.contacts__number');
contactNumber === null || contactNumber === void 0 ? void 0 : contactNumber.addEventListener('click', (event) => {
    const currentTarget = event.currentTarget;
    const number = currentTarget.textContent;
    if (window.innerWidth <= 1023 || !number)
        return;
    navigator.clipboard.writeText(number);
    alert('Number copied');
});
