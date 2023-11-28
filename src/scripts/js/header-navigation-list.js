"use strict";
const dataNavigationItems = [
    { href: '#experience', text: 'Experience' },
    { href: '#work', text: 'Work' },
    { href: '#testimonials', text: 'Testimonials' },
    { href: '#contact', text: 'Contact' },
];
const createNavigationItem = (href, text, list) => {
    const navigationLink = document.createElement('a');
    navigationLink.classList.add('item', 'body-2', 'body-2--medium');
    navigationLink.setAttribute('href', href);
    navigationLink.textContent = text;
    const navigationListItem = document.createElement('li');
    navigationListItem.append(navigationLink);
    list.append(navigationListItem);
};
const navigationList = document.querySelector('.navigation__items');
const navigationBurgerList = document.querySelector('.navigation-burger__items');
if (navigationList && navigationBurgerList) {
    dataNavigationItems.forEach(({ href, text }) => {
        createNavigationItem(href, text, navigationList);
        createNavigationItem(href, text, navigationBurgerList);
    });
}
