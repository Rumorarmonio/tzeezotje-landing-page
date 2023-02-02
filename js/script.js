const popupButton = document.querySelector('.popup-menu__button'),
    popupWrapper = document.querySelector('.popup-menu'),
    popupMenu = document.querySelector('.popup-menu__list');

popupButton.addEventListener('click', () => popupMenu.classList.toggle('hide-popup'));

document.addEventListener('click', (elem) => {
    if (!popupWrapper.contains(elem.target))
        popupMenu.classList.add('hide-popup');
});
