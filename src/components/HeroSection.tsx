const HeroSection = () => (
  <section id="hero" className="content-container">
    <div className="content">
      <section className="content__info">
        <h1>
          Hi, I’m Capybarara&nbsp;👋
        </h1>
        <p className="body-2">
          Known for its adorable appearance and friendly nature, the Capybarara is now embarking on a journey to find a new job. Motivated by the desire to explore new opportunities and challenges, the Capybarara is determined to utilize its unique skills and traits to secure a fulfilling position!
        </p>
      </section>
      <img src="./src/images/hero.png" alt="capybara image" className="content__hero-image" />
      <a href="#contact" className="button button--hero">
        I WANNA EMPLOY YOU!!!!
      </a>
    </div>
    <picture>
      <source media="(min-width: 1024px)" srcSet="./src/images/hero-wave-desktop.png" />
      <source media="(min-width: 768px)" srcSet="./src/images/hero-wave-tablet.png" />
      <source media="(max-width: 767px)" srcSet="./src/images/hero-wave-mobile.png" />
      <img src="./src/images/hero-wave-desktop.png" alt="wave image" className="wave-image" />
    </picture>
  </section>
);


export default HeroSection;
