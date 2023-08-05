import { getTopBooks } from './axios-get';
import { makeMarkupForBooks } from './markup-books';

export const mainBookList = document.querySelector('.best_list');
let numBooksPerRow = determineNumBooksPerRow();

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

const renderStartMarkup = async () => {
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
  numBooksPerRow = determineNumBooksPerRow();
  renderStartMarkup();
};

const debouncedHandleResize = debounce(handleResize, 250);
window.addEventListener('resize', debouncedHandleResize);

renderStartMarkup();

function determineNumBooksPerRow() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    return 1;
  } else if (window.matchMedia('(min-width: 768px) and (max-width: 1439px)').matches) {
    return 3;
  } else {
    return 5;
  }
}
