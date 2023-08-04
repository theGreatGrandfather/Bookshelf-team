import { getTopBooks } from './axios-get';
import { makeMarkupForBooks } from './markup-books';

const ulEl = document.querySelector('#best-sellers-container');

console.log('ulEl', ulEl);
const screenWidth = window.screen.width;

const ulElement = document.createElement('ul');
ulElement.classList.add('best_list');
ulEl.appendChild(ulElement);

const renderStartMarcup = async () => {
  try {
    const dataMarcup = await getTopBooks();
    console.log('dataMarcup', dataMarcup);

    if (dataMarcup.length > 0) {

      const firstIndexBooks = dataMarcup.map(({books, list_name})=> {

        console.log('books', books),
        console.log('list_name', list_name)
        return `<li> 
                  <h4>${list_name}</h4>
                  <ul class='five-books'>
                      ${ makeMarkupForBooks(books)}
                  </ul>
                  <button class='see_more' data-name="${list_name}">See More</button>
                </li>`
      }
      )

      ulEl.insertAdjacentHTML('afterbegin', '<h2 class="title_best-sellers">Best Sellers <span class="title_book">Books</span></h2>');

      ulElement.insertAdjacentHTML('beforeend', firstIndexBooks.join(''));
      console.log('ulEl', ulEl);
    }
  } catch (error) {
    console.error(error);
  }
};

renderStartMarcup();





// import { getTopBooks } from './axios-get';
// import { makeMarkupForBooks, ulEl } from './markup-books';

// const renderStartMarcup = async () => {
//   try {
//     const dataMarcup = await getTopBooks();
//     console.log('dataMarcup', dataMarcup);

//     if (dataMarcup.length > 0) {
//       const firstIndexBooks = dataMarcup[0].books;
//       ulEl.insertAdjacentHTML('beforeend', makeMarkupForBooks(firstIndexBooks));
//       console.log('list_name', dataMarcup[0].list_name);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// renderStartMarcup();
