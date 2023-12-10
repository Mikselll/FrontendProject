import '../styles/style.scss';

import ApiProvider from './ApiProvider';
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
    <ApiProvider>
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
    </ApiProvider>
  </>
);

export default App;
