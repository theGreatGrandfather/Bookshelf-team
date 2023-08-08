const body = document.querySelector('body');
const modal = document.querySelector('.modal__form__backdrop');
const confirmBtn = document.querySelector('.form__button_submit');

const onSBtnClick = (e) => {
    e.preventDefault();
    console.log('e', e);

} 


confirmBtn.addEventListener('click', onSBtnClick);