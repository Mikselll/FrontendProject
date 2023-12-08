import '../styles/style.scss';

import Header from './Header';
import HeroSection from './HeroSection';
import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection';
import WorkSection from './WorkSection';
import TestimonialsSection from './TestimonialsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import AnnoyingMessage from './Annoying-message';

const App = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <WorkSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
    <Footer />
    <AnnoyingMessage />
  </>
);

export default App;
