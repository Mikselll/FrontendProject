const technologiesItemsLists = document.querySelectorAll('.info__technologies-items');

const data = ['Next.js', 'Typescript', 'PostgreSQL', 'Tailwindcss', 'Figma', 'Storybook', 'Git'];

const createTechnologiesItems = (text, list) => {
  const technologiesItem = document.createElement('li');
  technologiesItem.classList.add('item', 'body-3');
  technologiesItem.textContent = text;

  list.append(technologiesItem);
}

technologiesItemsLists.forEach((list) => {
  data.forEach((text) => createTechnologiesItems(text, list));
});

const lastTechnologiesItemsList = Array.from(technologiesItemsLists).at(-1);
lastTechnologiesItemsList.firstChild.textContent = 'React';