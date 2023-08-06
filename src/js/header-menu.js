const refs = {
    btnHeaderMenu: document.querySelector('.header-menu'), 
    iconBurger: document.querySelector('.js-menu-open'),
    iconCross: document.querySelector('.js-menu-close'),
    menuContainer: document.querySelector('.js-menu-container'),
    btnLogOut: document.querySelector('.js_log_out'),
}
const body = document.body;

refs.btnHeaderMenu.addEventListener('click', (e) => {
    console.log(e);
    e.currentTarget.classList.remove('hidden');
    refs.iconCross.classList.add('hidden');
}
);

