import cn from "classnames";

const WorkProjectItems = () => {
  type DataProjectItems = {
    src: string,
    title: string,
    text: string,
    btnHref: string,
  }[];

  const dataProjectItems: DataProjectItems = [
    {
      src: './src/images/work-facts.png',
      title: 'Capybara Facts',
      text: 'This site provides detailed and accurate information about capybaras. It covers various topics such as their habitat, physical characteristics, behavior, diet, and lifecycle. It may also include interesting facts and trivia about capybaras. The site aims to educate visitors who are interested in learning more about these unique creatures.',
      btnHref: 'https://capybarafacts.com',
    },
    {
      src: './src/images/work-tips.png',
      title: 'Capybara Tips',
      text: 'This website is dedicated to providing practical tips and guides on how to care for capybaras as pets. It covers essential topics such as feeding and nutrition, housing and environment setup, health and hygiene, socialization, and training. The site may also include testimonials or experiences shared by capybara owners or experts. It aims to assist individuals who are considering or already own capybaras as pets.',
      btnHref: 'https://capybaratips.com',
    },
    {
      src: './src/images/work-whatis.png',
      title: 'What Is Capybara',
      text: `This site serves as a comprehensive introduction to capybaras for those who are unfamiliar with the species. It covers basic information, such as the capybara's classification, origin, and distinct features. It may include images or illustrations to help readers visualize the animal. The site's main objective is to provide a general overview for individuals seeking introductory knowledge about capybaras.`,
      btnHref: 'https://whatiscapybara.com',
    },
  ];
  const dataItems: string[] = ['Next.js', 'Typescript', 'PostgreSQL', 'Tailwindcss', 'Figma', 'Storybook', 'Git'];

  const projectClass = (index: number) => cn('capybara-project', 'card', {
    'capybara-project--reverse': index % 2 !== 0,
  })

  return (
    <>
      {dataProjectItems.map((item, index) => (
        <section key={index} className={projectClass(index)}>
          <div className="capybara-project__image-wrapper capybara-project__image-wrapper--left">
            <img src={item.src} alt="capybara tips image" className="capybara-project__image" />
          </div>
          <div className="capybara-project__info-wrapper">
            <div className="info">
              <h3 className="subtitle-2 subtitle-2--semibold">
                {item.title}
              </h3>
              <p className="body-2">
                {item.text}
              </p>
              <ul className="info__technologies-items">
                {dataItems.map((text, index) => (
                  <li key={index} className="item body-3">
                    {text}
                  </li>
                ))}
              </ul>
              <a href={item.btnHref} className="button button--work"></a>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default WorkProjectItems;
