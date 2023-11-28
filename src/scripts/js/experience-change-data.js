"use strict";
const dateItems = document.querySelectorAll('#experience .date');
dateItems.forEach((dateItem) => {
    dateItem.addEventListener('click', (event) => {
        const target = event.target;
        const activeDateItem = document.querySelector('#experience .date--active');
        activeDateItem === null || activeDateItem === void 0 ? void 0 : activeDateItem.classList.remove('date--active');
        const dataActiveDate = activeDateItem === null || activeDateItem === void 0 ? void 0 : activeDateItem.dataset.date;
        const activeDateInfoItem = document.querySelector(`[data-date-info='${dataActiveDate}']`);
        activeDateInfoItem === null || activeDateInfoItem === void 0 ? void 0 : activeDateInfoItem.classList.remove('date-info--active');
        target.classList.add('date--active');
        const dataCurrentDate = target.dataset.date;
        const currentDateInfoItem = document.querySelector(`[data-date-info='${dataCurrentDate}']`);
        currentDateInfoItem === null || currentDateInfoItem === void 0 ? void 0 : currentDateInfoItem.classList.add('date-info--active');
    });
});
