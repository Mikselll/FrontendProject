import { useState } from 'react';
import cn from 'classnames';
import HeaderNavigationItems from './HeaderNavigationItems';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openBurgerMenu = () => setIsOpen(true);
  const closeBurgerMenu = () => setIsOpen(false);

  const burgerWrapperClass = cn('burger-wrapper', {
    'burger-wrapper--active': isOpen,
  });
  const burgerContentClass = cn('content-burger', {
    'content-burger--active': isOpen,
  })

  return (
    <header id="header" className="content-container">
      <section className="content">
        <img src="./src/images/header-logo.svg" alt="capybara logo" />
        <nav className="navigation">
          <ul className="navigation__items">
            <HeaderNavigationItems />
          </ul>
        </nav>
        <button
          type="button"
          className="button button--open"
          onClick={openBurgerMenu}
        >
        </button>
      </section>
      <div className={burgerWrapperClass}>
        <section className={burgerContentClass}>
          <div className="content-burger__logo-section">
            <img src="./src/images/header-logo.svg" alt="capybara logo" />
            <button
              type="button"
              className="button button--close"
              onClick={closeBurgerMenu}
            >
            </button>
          </div>
          <nav className="navigation-burger">
            <ul className="navigation-burger__items">
            <HeaderNavigationItems closeBurgerMenu={closeBurgerMenu}/>
            </ul>
          </nav>
        </section>
      </div>
    </header>
  );
};

export default Header;
