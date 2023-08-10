const homePage = document.querySelector('.home'); 
const menuHome = document.querySelector('.menu-home'); 

const onHomeLoad = () => {
    homePage.classList.add('active');
    menuHome.classList.add('active');

} 

onHomeLoad();