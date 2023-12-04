const changeLettersColor = (text: string) => {
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
  const contact = document.querySelector<HTMLParagraphElement>(selector);
  const contactText = contact?.textContent;
  if (!contactText) return;
  const newContactText = changeLettersColor(contactText);
  contact.innerHTML = newContactText;
});
