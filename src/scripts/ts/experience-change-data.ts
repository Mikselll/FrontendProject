const dateItems = document.querySelectorAll<HTMLParagraphElement>('#experience .date');

dateItems.forEach((dateItem) => {
  dateItem.addEventListener('click', (event) => {
    const target = <HTMLParagraphElement>event.target;
    const activeDateItem: HTMLParagraphElement | null = document.querySelector('#experience .date--active');
    activeDateItem?.classList.remove('date--active');

    const dataActiveDate = activeDateItem?.dataset.date;
    const activeDateInfoItem: HTMLDivElement | null = document.querySelector(`[data-date-info='${dataActiveDate}']`);
    activeDateInfoItem?.classList.remove('date-info--active');

    target.classList.add('date--active');

    const dataCurrentDate = target.dataset.date;
    const currentDateInfoItem: HTMLDivElement | null = document.querySelector(`[data-date-info='${dataCurrentDate}']`);
    currentDateInfoItem?.classList.add('date-info--active');
  });
});
