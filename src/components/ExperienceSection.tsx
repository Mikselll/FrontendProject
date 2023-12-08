import { useState } from 'react';
import SectionsHeader from './SectionsHeader';
import ExperienceDateItems from './ExperienceDateItems';
import ExperienceInfoItems from './ExperienceInfoItems';

const ExperienceSection = () => {
  const [activeInfo, setActiveInfo] = useState('middle');

  const changeInfo = (id: string) => () => setActiveInfo(id);

  return (
    <section id="experience" className="content-container">
      <div className="content">
        <SectionsHeader sectionId="experience" />
        <main className="content__main">
          <ExperienceDateItems activeInfo={activeInfo} changeInfo={changeInfo} />
          <ExperienceInfoItems activeInfo={activeInfo} />
        </main>
      </div>
    </section>
  );
};

export default ExperienceSection;
