import { getTopBooks } from './axios-get';
import { makeMarkupForBooks } from './markup-books';
import { categoryTitle } from './createCategoryMarcup';

export const mainBookList = document.querySelector('.best_list');
let numBooksPerRow = 5;
let savedMarkup = null;

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

const shouldRenderMarkup = () => {
  return !categoryTitle.classList.contains('no-change');
};

const renderStartMarkup = async () => {
  if (!shouldRenderMarkup()) return;

  try {
    const dataMarkup = await getTopBooks();
    if (dataMarkup.length === 0) return;

    const firstIndexBooks = dataMarkup.map(({ books, list_name }) => {
      const booksSlice = books.slice(0, numBooksPerRow);
      return `<li class='best-item _list'>
                <h4 class='min-title'>${list_name}</h4>
                <ul class='books-list'>
                    ${makeMarkupForBooks(booksSlice)}
                </ul>
                <button class='see_more' data-name="${list_name}">See More</button>
              </li>`;
    });

    mainBookList.innerHTML = firstIndexBooks.join('');
  } catch (error) {
    console.error(error);
  }
};

const handleResize = () => {
  numBooksPerRow = shouldRenderMarkup() ? determineNumBooksPerRow() : numBooksPerRow;
  renderStartMarkup();
};

const debouncedHandleResize = debounce(handleResize, 250);
window.addEventListener('resize', debouncedHandleResize);

if (shouldRenderMarkup()) {
  renderStartMarkup();
} else {
  savedMarkup = mainBookList.innerHTML; 
}

function determineNumBooksPerRow() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    return 1;
  } else if (window.matchMedia('(min-width: 768px) and (max-width: 1439px)').matches) {
    return 3;
  } else {
    return 5;
  }
}

const restoreMarkup = () => {
  if (!shouldRenderMarkup() && savedMarkup) {
    mainBookList.innerHTML = savedMarkup;
  }
};

window.addEventListener('resize', restoreMarkup);
