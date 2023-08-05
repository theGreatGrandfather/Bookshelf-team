import { getCategoryList } from "./axios-get";

export const categoriesList = document.querySelector('.categories__list');

const renderCategories = async () => {
    const categories = await getCategoryList();
    const markup = categories.map(
        ({ list_name }) => `
                <li class='categories__item _list'>
                    <a data-categories__item rel='noopener no-referrel nofollow' class='categories__link _link' href='#'>${list_name}</a>
                </li>`
    ).sort().join('');
    return markup;
};

renderCategories()
    .then((resp) => {
        categoriesList.insertAdjacentHTML('beforeend', resp);
    })
    .catch((err) => {
        console.log('err', err)
    });

