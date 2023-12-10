import { useContext, useEffect, useState } from "react";
import cn from "classnames";
import axios from "axios";
import ApiContext from "../contexts/ApiContext";

type WorkItemsData = {
  subtitle: string;
  description: string;
  technologies: string[];
  imageFileName: string;
}[];

type StateWorkData = {
  title: string;
  shortDescription: string;
  items: WorkItemsData;
}

const WorkSection = () => {
  const api = useContext(ApiContext);

  const [stateWorkData, setStateWorkData] = useState<StateWorkData>({
    title: '',
    shortDescription: '',
    items: [],
  });
  const buttonsHref: string[] = ['https://capybarafacts.com', 'https://capybaratips.com', 'https://whatiscapybara.com'];

  const projectClass = (index: number) => cn('capybara-project', 'card', {
    'capybara-project--reverse': index % 2 !== 0,
  })

  useEffect(() => {
    const getWorkData = async () => {
      try {
        const response = await axios.get(`https://express-service-dun.vercel.app/work`);
        const data = response.data;
        setStateWorkData(data);
      } catch (error) {
        console.log(error);
      }
    }
    getWorkData();
  }, []);

  return (
    <section id="work" className="content-container">
      <div className="content">
        <header className='content__header content__header--gray'>
          <h2>
            {stateWorkData.title}
          </h2>
          <p className="subtitle-2">
          {stateWorkData.shortDescription}
          </p>
        </header>
        {stateWorkData.items.map((item, index) => (
        <section key={index} className={projectClass(index)}>
          <div className="capybara-project__image-wrapper capybara-project__image-wrapper--left">
            <img src={`${api}/assets/${item.imageFileName}`} alt="capybara tips image" className="capybara-project__image" />
          </div>
          <div className="capybara-project__info-wrapper">
            <div className="info">
              <h3 className="subtitle-2 subtitle-2--semibold">
                {item.subtitle}
              </h3>
              <p className="body-2">
                {item.description}
              </p>
              <ul className="info__technologies-items">
                {item.technologies.map((text, index) => (
                  <li key={index} className="item body-3">
                    {text}
                  </li>
                ))}
              </ul>
              <a href={buttonsHref[index]} className="button button--work"></a>
            </div>
          </div>
        </section>
      ))}
      </div>
    </section>
  );
};

export default WorkSection;
