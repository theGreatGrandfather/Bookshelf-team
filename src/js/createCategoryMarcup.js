import { categoriesList } from './renderCategories';
import { getBooksByCategory } from "./axios-get";
import { mainBookList } from './get-top-books';
import { makeMarkupForBooks } from './markup-books';
export const categoryTitle = document.querySelector('.title_best-sellers'); 

export const Categor = document.querySelectorAll('a.categories__link');
console.log('Categor', Categor);

for (const entry of Categor.entries()) {
  console.log(entry);
}

Categor.forEach(function (currentValue, currentIndex, listObj) {
  console.log(`${currentValue}, ${currentIndex}, ${this}`);
}, "myThisArg");

for (const value of Categor.values()) {
  console.log(value);
}
const list = document.querySelector('.categories__list');
const qwe = list.getElementsByClassName('item');
console.log('qwe', qwe)



export const createCategoryMarcup = async (category) => {
    return await getBooksByCategory(category);
};

const onCategoryClick = (e) => {
    if (e.target.hasAttribute('data-categories__item')) {
        e.preventDefault();
        e.target.classList.add('active__link');
        const titleTExt = e.target.dataset.listname.split(' ');
        titleTExt.pop();
        const accentText = e.target.dataset.listname.split(' ')[e.target.dataset.listname.split(' ').length - 1];
        createCategoryMarcup(e.target.dataset.listname)
            .then((resp) => {
                categoryTitle.classList.add('no-change');
                categoryTitle.innerHTML = `${titleTExt.join(' ')}&nbsp
                <span class="title_book">${accentText}</span>`;
                mainBookList.innerHTML = makeMarkupForBooks(resp);
                console.log('resp', resp)
            })
    }
};

categoriesList.addEventListener('click', onCategoryClick);