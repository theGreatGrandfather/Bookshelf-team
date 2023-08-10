import fonds from '../fonds.json';

const foundsList = document.querySelector('.support-ukraine__list');
const createFoundsMarcup = () => {
    return foundsList.innerHTML = fonds.map(({ title, url, img }) => `
        <li class='support-ukraine__item'>
            <a target="_blank" rel='noopener no-referrel nofollow' class='support-ukraine__link _link' href='${url}'>
                <img class='fonds-img' src="${img}" alt="${title}" width='auto' height='32px'>
            </a>
        </li>`
    ).join('');
}

createFoundsMarcup();