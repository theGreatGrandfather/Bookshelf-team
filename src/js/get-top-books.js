import { getTopBooks } from './axios-get';
import { makeMarkupForBooks } from './markup-books';

const ulEl = document.querySelector('#best-sellers-container');
const ulElement = document.createElement('ul');
ulElement.classList.add('best_list');
ulEl.appendChild(ulElement);

const renderStartMarcup = async () => {
  try {
    const dataMarcup = await getTopBooks();

    if (dataMarcup.length > 0) {
      const windowInnerWidth = window.innerWidth;

      let numBooksPerRow = 5; 

      if (windowInnerWidth < 1440) {
        numBooksPerRow = 3; 
      }

      if (windowInnerWidth < 768) {
        numBooksPerRow = 1;
      }
      

      const firstIndexBooks = dataMarcup.map(({ books, list_name }) => {
        const booksSlice = books.slice(0, numBooksPerRow);
        return `<li class='best-item _list'> 
                  <h4 class='min-title'>${list_name}</h4>
                  <ul class='five-books'>
                      ${makeMarkupForBooks(booksSlice)}
                  </ul>
                  <button class='see_more' data-name="${list_name}">See More</button>
                </li>`;
      });

      ulEl.insertAdjacentHTML('afterbegin', '<h2 class="title_best-sellers">Best Sellers&nbsp;<span class="title_book">Books</span></h2>');
      ulElement.insertAdjacentHTML('beforeend', firstIndexBooks.join(''));
    }
  } catch (error) {
    console.error(error);
  }
};

renderStartMarcup();

// window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//   if (!e.matches) {
//     return
//   };
//   console.log('mobile => tablet');
// })

// window.matchMedia('(min-width: 1200px)').addEventListener('change', e => {
//   if (!e.matches) {
//     return
//   };
//   console.log('tablet => desktop');
// })




