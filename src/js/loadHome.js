const homePage = document.querySelector('.home'); 
const menuHome = document.querySelector('.menu-home'); 
console.log('menuHome', menuHome)

const onHomeLoad = () => {
    homePage.classList.add('active');
    menuHome.classList.add('active');

} 

onHomeLoad();