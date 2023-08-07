import { categoriesList } from './renderCategories';
import { getBooksByCategory } from "./axios-get";
import { mainBookList } from './get-top-books';
import { makeMarkupForBooks } from './markup-books';
import { loaderOn, loaderOff } from './loader';

export const categoryTitle = document.querySelector('.title_best-sellers'); 

export const createCategoryMarcup = async (category) => {
    return await getBooksByCategory(category);
};

const onCategoryClick = (e) => {
    if (e.target.hasAttribute('data-categories__item')) {
        e.preventDefault();
        // loaderOn();
        const list = document.querySelector('.categories__list');
        const category = list.getElementsByClassName('categories__link');

        const arr = Array.from(category);
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            element.classList.remove('active__link');
        }
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
                document.querySelector('#best-sellers-container').scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                // loaderOff();
            })
    }
};

categoriesList.addEventListener('click', onCategoryClick);