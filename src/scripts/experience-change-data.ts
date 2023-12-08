const dateItems = document.querySelectorAll<HTMLParagraphElement>('#experience .date');

dateItems.forEach((dateItem) => {
  dateItem.addEventListener('click', (event) => {
    const target = <HTMLParagraphElement>event.target;
    const activeDateItem = document.querySelector<HTMLParagraphElement>('#experience .date--active');
    activeDateItem?.classList.remove('date--active');

    const dataActiveDate = activeDateItem?.dataset.date;
    const activeDateInfoItem = document.querySelector<HTMLDivElement>(`[data-date-info='${dataActiveDate}']`);
    activeDateInfoItem?.classList.remove('date-info--active');

    target.classList.add('date--active');

    const dataCurrentDate = target.dataset.date;
    const currentDateInfoItem = document.querySelector<HTMLDivElement>(`[data-date-info='${dataCurrentDate}']`);
    currentDateInfoItem?.classList.add('date-info--active');
  });
});
