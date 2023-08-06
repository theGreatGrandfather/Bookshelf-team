import fonds from '../fonds.json';

const foundsList = document.querySelector('.support-ukraine__list');
const createFoundsMarcup = () => {
    return foundsList.innerHTML = fonds.map(({ title, url, img }) => `
        <li class='support-ukraine__item'>
            <a target="_blank" rel='noopener no-referrel nofollow' class='support-ukraine__link _link' href='${url}'>
            <img src="https://photos.google.com/photo/AF1QipPo1_h4Uv5jmYaFMPe2Y8_nHtfhUG9Yr8Bt6s2k" alt="${title} width='100">
            </a>
        </li>`
    ).join('');
}

createFoundsMarcup();