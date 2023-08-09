import { doc } from "firebase/firestore";

const refs = {
    btnHeaderMenu: document.querySelector('.header-menu'), 
    iconBurger: document.querySelector('.js-menu-open'),
    iconCross: document.querySelector('.js-menu-close'),
    menuContainer: document.querySelector('.js-menu-container'),
    btnLogOut: document.querySelector('.js_log_out'),
}
const body = document.body;

refs.iconBurger.addEventListener('click', (e) => {
    disableScroll();
    e.currentTarget.classList.add('hidden');
    refs.iconCross.classList.remove('hidden');
    refs.menuContainer.classList.add('is-open');
    
}
);

refs.iconBurger.removeEventListener('click', (e) => {
     disableScroll();
    e.currentTarget.classList.add('hidden');
    refs.iconCross.classList.remove('hidden');
    refs.menuContainer.classList.add('is-open');
   
})

refs.iconCross.addEventListener('click', (e) => {
     enableScroll();
    e.currentTarget.classList.add('hidden');
    refs.iconBurger.classList.remove('hidden');
    refs.menuContainer.classList.remove('is-open');   
})

refs.iconCross.removeEventListener('click', (e) => {
    enableScroll();
    e.currentTarget.classList.add('hidden');
    refs.iconBurger.classList.remove('hidden');
    refs.menuContainer.classList.remove('is-open');    
})

function enableScroll() {
body.classList.remove('disable-scroll')
}

function disableScroll() {
    body.classList.add('disable-scroll')
}
const homePage = document.querySelector('.home'); 
const basketPage = document.querySelector('.shopping-list'); 

// const onHomeClick = (e) => {
//     e.preventDefault();
//     homePage.classList.add('active');
//     basketPage.classList.remove('active');
//     window.location.href = 'https://thegreatgrandfather.github.io/apple/index.html';

// } 






// const onBasketClick = (e) => {
//     e.preventDefault();

//     homePage.classList.remove('active');
//     basketPage.classList.add('active');
//     window.location.href = 'https://thegreatgrandfather.github.io/apple/shopping-list.html';
// } 
// homePage.addEventListener('click', onHomeClick);
// basketPage.addEventListener('click', onBasketClick);