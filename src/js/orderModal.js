const body = document.querySelector('body');
const modal = document.querySelector('.modal__form__backdrop');
export const confirmBtn = document.querySelector('.form__button_submit');
const closeBnt = document.querySelector('.modal__form__close__bt');
const backdrop = document.querySelector('.modal__form__backdrop');


const onSBtnClick = (e) => {
    e.preventDefault();
    body.classList.toggle('no-scroll-js');
    modal.classList.toggle('is-hiden');
    document.addEventListener('keydown', onCloseModalESC);
    closeBnt.addEventListener('click', onModalCloseBtn);
    backdrop.addEventListener('click', onBackdropClick);
}; 

const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
        doModalClose();
    }

}

const onModalCloseBtn = (e) => {
    doModalClose();
}

const onCloseModalESC = (e) => {
    if (e.key === 'Escape') {
        doModalClose();
    }
}
const doModalClose = () => {
    body.classList.toggle('no-scroll-js');
    modal.classList.toggle('is-hiden');
    document.removeEventListener('keydown', onCloseModalESC);
    backdrop.removeEventListener('click', onBackdropClick);
    closeBnt.removeEventListener('click', onModalCloseBtn);
};

confirmBtn.addEventListener('click', onSBtnClick);