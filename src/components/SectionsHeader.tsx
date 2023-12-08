import cn from "classnames";

const SectionsHeader = ({ sectionId } : { sectionId: string }) => {
  type DataSection = {
    id: string,
    title: string,
    subtitle: string,
    color: string,
  };

  const dataSections: DataSection[] = [
    {
      id: 'skills',
      title: 'Skills',
      subtitle: 'The skills, tools and technologies Capybarara really good at:',
      color: 'gray',
    },
    {
      id: 'experience',
      title: 'Experience',
      subtitle: 'Here is a quick summary of Capibarara most recent experiences:',
      color: 'orange',
    },
    {
      id: 'work',
      title: 'Work',
      subtitle: 'Some of the noteworthy projects Capibarara have built:',
      color: 'gray',
    },
    {
      id: 'testimonials',
      title: 'Testimonials',
      subtitle: 'Nice things people have said about me:',
      color: 'orange',
    },
    {
      id: 'contact',
      title: 'Contact Capibarara',
      subtitle: 'Do you wanna chat with Capibarara? Then send the request!',
      color: 'gray',
    },
    {
      id: 'footer',
      title: 'Get in touch',
      subtitle: `What’s next? Feel free to reach out to Capibarara if you're looking for a developer, have a query, or simply want to connect.`,
      color: 'gray',
    },
  ];

  const currentSection: DataSection | undefined = dataSections.find(({ id }) => id === sectionId);

  const headerClass = cn('content__header', {
    'content__header--gray': currentSection?.color === 'gray',
    'content__header--orange': currentSection?.color === 'orange',
  });
  return (
    <header className={headerClass}>
      <h2>
        {currentSection?.title}
      </h2>
      <p className="subtitle-2">
        {currentSection?.subtitle}
      </p>
    </header>
  );
};

export default SectionsHeader;
