import SectionsHeader from './SectionsHeader';
import SkillsListItems from './SkillsListItems';

const SkillsSection = () => {
  type DataSkillsItems = { src: string; text: string }[];

  const dataSkillsItems: DataSkillsItems = [
    { src: './src/images/skills-icon-javscript.png', text: 'Javascript' },
    { src: './src/images/skills-icon-typescript.png', text: 'Typescript' },
    { src: './src/images/skills-icon-react.png', text: 'React' },
    { src: './src/images/skills-icon-nextjs.png', text: 'Next.js' },
    { src: './src/images/skills-icon-nodejs.png', text: 'Node.js' },
  ];
  const dataSkillsItemsMobile: DataSkillsItems = [
    { src: './src/images/skills-icon-javscript.png', text: 'Javascript' },
    { src: './src/images/skills-icon-typescript.png', text: 'Typescript' },
    { src: './src/images/skills-icon-react.png', text: 'React' },
  ];

  return (
    <section id="skills" className="content-container">
      <div className="content">
        <SectionsHeader sectionId="skills" />
        <ul className="content__items">
          <SkillsListItems data={dataSkillsItems} />
        </ul>
        <ul className="content__items content__items--mobile">
          <SkillsListItems data={dataSkillsItemsMobile} />
        </ul>
      </div>
    </section>
  );
};

export default SkillsSection;
