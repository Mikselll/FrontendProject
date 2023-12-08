const contactNumber = document.querySelector<HTMLParagraphElement>('.contacts__number');

contactNumber?.addEventListener('click', (event) => {
  const currentTarget = <HTMLParagraphElement>event.currentTarget;
  const number = currentTarget.textContent;
  const minDesktopWidth = 1023;
  if (window.innerWidth <= minDesktopWidth || number === null) return;
  navigator.clipboard.writeText(number);
  alert('Number copied');
});