const contactSelectors = ['.contacts__email', '.contacts__number'];

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

contactSelectors.forEach((selector) => {
  const contact = document.querySelector(selector);
  const contactText = contact.textContent;
  const newContactText = changeLettersColor(contactText);
  contact.innerHTML = newContactText;
});
