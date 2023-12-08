type PropsSkillsListItems = {
  data: { 
    src: string; 
    text: string 
  }[];
}

const SkillsListItems = ({ data }: PropsSkillsListItems) => (
  <>
    {data.map(({ src, text }, index) => (
      <li key={index} className="item">
        <img src={src} alt={`${text} icon`} />
        <p className="body-1">
          {text}
        </p>
      </li>
    ))}
  </>
);

export default SkillsListItems;
