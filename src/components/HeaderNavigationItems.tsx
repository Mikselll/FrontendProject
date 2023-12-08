const HeaderNavigationItems = ({ closeBurgerMenu }: { closeBurgerMenu?: () => void }) => {
  const dataNavigationItems = [
    { href: '#experience', text: 'Experience' },
    { href: '#work', text: 'Work' },
    { href: '#testimonials', text: 'Testimonials' },
    { href: '#contact', text: 'Contact' },
  ];

  return (
    <>
      {dataNavigationItems.map(({ href, text }, index) => (
        <li key={index}>
          <a
            href={href}
            className="item body-2 body-2--medium"
            onClick={closeBurgerMenu}
          >
            {text}
          </a>
        </li>
      ))}
    </>
  );
}

export default HeaderNavigationItems;
