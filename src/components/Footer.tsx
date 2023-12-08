import SectionsHeader from './SectionsHeader';

const Footer = () => {
  const email = 'capibarara@gmail';
  const number = '+8 800 200-59-20';

  const paintText = (text: string) => {
    let spaceCount = 0;

    const newText = Array.from(text).map((letter, index) => {
      if (letter === ' ') {
        spaceCount += 1;
        return letter;
     }
      return spaceCount % 2 === index % 2 ? <span key={index} className="font-orange">{letter}</span> : letter;
    });

    return newText;
  };

  const copyNumber = (event: React.MouseEvent) => {
    const number = event.currentTarget.textContent;
    if (window.innerWidth < 1023 || number === null) return;
    navigator.clipboard.writeText(number);
    alert('Number copied');
  };

  return (
    <footer id="footer" className="content-container">
      <div className="content">
        <SectionsHeader sectionId="footer" />
        <main className="contacts">
          <p className="contacts__email subtitle-1 subtitle-1--xl">{paintText(email)}</p>
          <p className="contacts__number subtitle-1 subtitle-1--xl" onClick={copyNumber}>{paintText(number)}</p>
        </main>
      </div>
    </footer>
  );
};

export default Footer;
