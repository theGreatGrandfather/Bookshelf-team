import { getCategoryList, getBooksByCategory } from "./axios-get";
import {makeMarkupForBooks} from './markup-books';

const categoriesList = document.querySelector('.categories__list');
const qqq = document.querySelector('#best-sellers-container');

console.log('qqq', qqq)
const renderCategories = async () => {
    const categories = await getCategoryList();
        const markup = categories.map(
            ({ list_name }) => `
                <li class='categories__item _list'>
                    <a data-categories__item rel='noopener no-referrel nofollow' class='categories__link _link' href='#'>${list_name}</a>
                </li>`
        ).sort().join('');
    return markup;
}

renderCategories()
    .then((resp) => {
        categoriesList.insertAdjacentHTML('beforeend', resp);
    })
    .catch((err) => {
        console.log('err', err)
    });

const createCategoryMarcup = async (category) => {
    return resp = await getBooksByCategory(category);
}

const onCategoryClick = (e) => {
    if (e.target.hasAttribute('data-categories__item')) {
        console.log('e', e.target.innerText);

        createCategoryMarcup(e.target.innerText)
            .then((resp) => {
                console.log('resp', resp);
                console.log('makeMarkupForBooks(resp)', makeMarkupForBooks(resp))
                qqq.innerHTML = makeMarkupForBooks(resp);
            })
    }
}
    
categoriesList.addEventListener('click', onCategoryClick);


// ++++++++++++++++++++++++++++++++++++++++++++==

import fonds from '../fonds.json';

const foundsList = document.querySelector('.support-ukraine__list');
console.log('foundsList', foundsList)
const createFoundsMarcup = () => {
    console.log('fonds', fonds);
    return foundsList.innerHTML = fonds.map(({ title, url }) => `
        <li class='support-ukraine__item'>
            <a target="_blank" rel='noopener no-referrel nofollow' class='support-ukraine__link _link' href='${url}'>${title}</a>
        </li>`
    ).join('');
    // console.log('marcup', marcup)
    //  = marcup;
}

createFoundsMarcup();