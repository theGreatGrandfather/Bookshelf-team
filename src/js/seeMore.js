import { mainBookList } from './get-top-books';
import { makeMarkupForBooks } from './markup-books';
import { createCategoryMarcup, categoryTitle } from './createCategoryMarcup';

const onSeeMoreClick = (e) => {
    if (e.target.classList.contains('see_more')) {
        console.log('e', e.target.dataset.name);
        const titleTExt =  e.target.dataset.name.split(' ');
        titleTExt.pop();
        const accentText =  e.target.dataset.name.split(' ')[ e.target.dataset.name.split(' ').length - 1];
        createCategoryMarcup( e.target.dataset.name)
            .then((resp) => {
                categoryTitle.classList.add('no-change');
                categoryTitle.innerHTML = `${titleTExt.join(' ')}&nbsp
                <span class="title_book">${accentText}</span>`;

                mainBookList.innerHTML = makeMarkupForBooks(resp);
                console.log('resp', resp)
            })
    }
};

mainBookList.addEventListener('click', onSeeMoreClick);