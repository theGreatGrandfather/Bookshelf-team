import { doc } from "firebase/firestore";

const basketPage = document.querySelector('.shopping-list'); 
const shoppingList = document.querySelector('.menu-shopping-list');

const onBasketload = () => {
    basketPage.classList.add('active');
    shoppingList.classList.add('active');

} 

onBasketload();