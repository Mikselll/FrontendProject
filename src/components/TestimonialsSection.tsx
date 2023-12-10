import SectionsHeader from './SectionsHeader';
import TestimonialsSecondaryItems from './TestimonialsSecondaryItems';

const TestimonialsSection = () => (
  <section id="testimonials" className="content-container">
    <div className="content">
      <SectionsHeader sectionId="testimonials" />
      <main className="content__items">
        <section className="main-item card">
          <header className="main-item__header">
            <img src="./src/images/testimonials-sarah.png" alt="sarah frontend developer" />
            <div className="main-item__developer-info">
              <h3 className="subtitle-1">
                Sarah
              </h3>
              <p className="subtitle-2">
                Frontend Developer
              </p>
            </div>
          </header>
          <p className="body-2">
            “I had the opportunity to see a Capibarara at the zoo, and it was such an incredible experience! They are such gentle creatures and so fascinating to watch. Their size and calm nature definitely make them unique among other animal species.”
          </p>
        </section>
        <TestimonialsSecondaryItems />
      </main>
    </div>
  </section>
);

export default TestimonialsSection;
