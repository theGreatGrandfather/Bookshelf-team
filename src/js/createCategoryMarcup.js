import { categoriesList } from './renderCategories';
import { getBooksByCategory } from "./axios-get";
import { mainBookList } from './get-top-books';
import { makeMarkupForBooks } from './markup-books';
export const categoryTitle = document.querySelector('.title_best-sellers');
const categoryAccent = document.querySelector('.title_book');


const createCategoryMarcup = async (category) => {
    return await getBooksByCategory(category);
};

const onCategoryClick = (e) => {
    if (e.target.hasAttribute('data-categories__item')) {
        
        const titleTExt = e.target.innerText.split(' ');
        titleTExt.pop();
        const accentText = e.target.innerText.split(' ')[e.target.innerText.split(' ').length - 1];
        createCategoryMarcup(e.target.innerText)
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