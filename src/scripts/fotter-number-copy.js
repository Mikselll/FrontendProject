const contactNumber = document.querySelector('.contacts__number');

contactNumber.addEventListener('click', (event) => {
  if (window.innerWidth > 1023) {
    navigator.clipboard.writeText(event.currentTarget.textContent);
    alert('Телефон скопирован');
  }
});
