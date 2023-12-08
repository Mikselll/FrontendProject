import SectionsHeader from './SectionsHeader';
import WorkProjectItems from './WorkProjectItems';

const WorkSection = () => (
  <section id="work" className="content-container">
    <div className="content">
      <SectionsHeader sectionId="work" />
      <WorkProjectItems />
    </div>
  </section>
);

export default WorkSection;
