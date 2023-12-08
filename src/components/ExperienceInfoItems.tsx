import cn from 'classnames';

const ExperienceInfoItems = ({ activeInfo }: { activeInfo: string }) => {
  type DataInfoItems = {
    [key: string]: string[];
  };

  const dataInfo: { id: string; text: string }[] = [
    { id: 'middle', text: 'Middle Frontend Developer' },
    { id: 'junior', text: 'Junior Frontend Developer' },
    { id: 'trainee', text: 'Trainee Frontend Developer' },
  ];
  const dataInfoItems: DataInfoItems = {
    middle: [
      'Collaborating with senior developers to enhance skills and learn new technologies',
      'Mentoring and providing guidance to junior frontend developers',
      'Optimizing the performance of web applications',
    ],
    junior: [
      'Participating in code reviews and receiving feedback',
      'Collaborating with UI/UX designers to implement usability and accessibility enhancements',
    ],
    trainee: [
      'Testing and debugging features or code snippets',
    ],
  };

  const dateInfoClass = (id: string) => cn('date-info', 'card', {
    'date-info--active': activeInfo === id,
  });

  return (
    <>
      {dataInfo.map(({ id, text }, index) => (
        <section key={index} className={dateInfoClass(id)}>
          <img src="./src/images/experience-logo.svg" alt="white logo" className="date-info__logo" />
          <div className="date-info__content">
            <h3 className="subtitle-2 subtitle-2--semibold">
              {text}
            </h3>
            <ul className="date-info__list">
              {dataInfoItems[id].map((text, index) => (
                <li key={index} className="item">
                  <p className="body-2">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  )
}

export default ExperienceInfoItems;
