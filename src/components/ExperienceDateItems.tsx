import cn from 'classnames';

type PropsDateItems = {
  activeInfo: string;
  changeInfo: (id: string) => () => void;
}

const ExperienceDateItems = ({ activeInfo, changeInfo }: PropsDateItems) => {
  const dataDates: { id: string; text: string }[] = [
    { id: 'middle', text: 'May 2020 - Present' },
    { id: 'junior', text: 'Dec 2019 - May 2020' },
    { id: 'trainee', text: 'May 2019 - Dec 2019' },
  ];

  const dateClass = (id: string) => cn('date', 'card', `card--date-${id}`, 'body-2', {
    'date--active': activeInfo === id,
  })

  return (
    <>
      {dataDates.map(({ id, text }, index) => (
        <p
          key={index}
          className={dateClass(id)}
          onClick={changeInfo(id)}
        >
          {text}
        </p>
      ))}
    </>
  );
};

export default ExperienceDateItems;
