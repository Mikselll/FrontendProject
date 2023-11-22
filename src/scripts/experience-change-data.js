const dateItems = document.querySelectorAll('#experience .date');

dateItems.forEach((dateItem) => {
  dateItem.addEventListener('click', ({ target }) => {
    const activeDateItem = document.querySelector('#experience .date--active');
    activeDateItem.classList.remove('date--active');

    const dataActiveDate = activeDateItem.dataset.date;
    const activeDateInfoItem = document.querySelector(`[data-date-info='${dataActiveDate}']`);
    activeDateInfoItem.classList.remove('date-info--active');

    target.classList.add('date--active');

    const dataCurrentDate = target.dataset.date;
    const currentDateInfoItem = document.querySelector(`[data-date-info="${dataCurrentDate}"]`);
    currentDateInfoItem.classList.add('date-info--active');
  });
});
