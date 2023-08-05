import fonds from '../fonds.json';

const foundsList = document.querySelector('.support-ukraine__list');
const createFoundsMarcup = () => {
    return foundsList.innerHTML = fonds.map(({ title, url }) => `
        <li class='support-ukraine__item'>
            <a target="_blank" rel='noopener no-referrel nofollow' class='support-ukraine__link _link' href='${url}'>${title}</a>
        </li>`
    ).join('');
}

createFoundsMarcup();