const TestimonialsSecondaryItems = () => {
  type DataSecondaryItems = {
    name: string,
    position: string,
    testimonial: string,
  }[];

  const dataSecondaryItems: DataSecondaryItems = [
    {
      name: 'Jason',
      position: '/ Manager',
      testimonial: '“I recently read about Capybarara and I must say, they are truly fascinating animals. Their social behavior and close-knit family structures are so interesting, and I love how they live in such harmony with other animals in their habitats. Definitely one of the most underrated animals out there!”',
    },
    {
      name: 'Emma',
      position: '/ Backend Developer',
      testimonial: '“I had the chance to interact with a Capybarara at a wildlife sanctuary, and it was such a memorable experience. They are extremely friendly and affectionate. I was surprised by how intelligent they are, and their level of comfort with humans. I would highly recommend anyone to see them up close!:”',
    },
    {
      name: 'Megan',
      position: '/ DevOps',
      testimonial: `“As an animal lover, I've always been fascinated by Capybarara. They are super social creatures and thrive in groups. It's amazing how they have adaptations that allow them to live both on land and in water. Their unique appearance and laid-back personality make them the perfect animal to admire!”`,
    },
  ];

  return (
    <section className="secondary-items">
      {dataSecondaryItems.map((item, index) => (
        <div key={index} className="item card">
          <header className="item__header">
            <h3 className="subtitle-2 subtitle-2--semibold">
              {item.name}
            </h3>
            <p>
              {item.position}
            </p>
          </header>
          <p className="body-2">
            {item.testimonial}
          </p>
        </div>
      ))}
    </section>
  );
};

export default TestimonialsSecondaryItems;
