let modal = document.querySelector(".modal"),
    button = document.querySelector(".reserve-button"),
    close = document.querySelector(".modal__close-button");

document.addEventListener('click', event => {
    if (event.target === button) {
        modal.classList.toggle('visible');
    }
    if (event.target === modal || event.target === close) {
        modal.classList.remove('visible');
    }
});
