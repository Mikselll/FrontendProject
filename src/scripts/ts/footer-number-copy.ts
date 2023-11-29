const contactNumber = document.querySelector<HTMLParagraphElement>('.contacts__number');

contactNumber?.addEventListener('click', (event) => {
  const currentTarget = <HTMLParagraphElement>event.currentTarget;
  const number = currentTarget.textContent;
  if (window.innerWidth <= 1023 || !number) return;
  navigator.clipboard.writeText(number);
  alert('Number copied');
});