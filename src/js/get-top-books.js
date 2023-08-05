import { getTopBooks } from './axios-get';
import { makeMarkupForBooks } from './markup-books';

const ulEl = document.querySelector('#best-sellers-container');

let numBooksPerRow = 5; 
let prevNumBooksPerRow = numBooksPerRow;

const renderStartMarkup = async () => {
  try {
    const dataMarkup = await getTopBooks();

    if (dataMarkup.length > 0) {
      const windowInnerWidth = window.innerWidth;

      if (windowInnerWidth < 768 && windowInnerWidth > 320) {
        numBooksPerRow = 1; 
      } else if (windowInnerWidth >= 768 && windowInnerWidth <= 1439) {
        numBooksPerRow = 3; 
      } else if (windowInnerWidth >= 1440) {
        numBooksPerRow = 5; 
      }

      if (prevNumBooksPerRow !== numBooksPerRow) {

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

        ulEl.innerHTML = ''; 
        ulEl.insertAdjacentHTML('afterbegin', '<h2 class="title_best-sellers">Best Sellers&nbsp;<span class="title_book">Books</span></h2>');
        ulEl.insertAdjacentHTML('beforeend', firstIndexBooks.join(''));
        prevNumBooksPerRow = numBooksPerRow; 
      }
    }
  } catch (error) {
    console.error(error);
  }
};

const handleResize = () => {
  renderStartMarkup();
  if (prevNumBooksPerRow === 5 && numBooksPerRow === 1) {

    ulEl.scrollTop = 0;
  }
};

window.addEventListener('resize', handleResize);

renderStartMarkup();


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





// import { getTopBooks } from './axios-get';
// import { makeMarkupForBooks } from './markup-books';

// export const ulEl = document.querySelector('#best-sellers-container');
// export const ulElement = document.createElement('ul');
// ulElement.classList.add('best_list');
// ulEl.appendChild(ulElement);

// const renderStartMarcup = async () => {
//   try {
//     const dataMarcup = await getTopBooks();

//     if (dataMarcup.length > 0) {
//       const windowInnerWidth = window.innerWidth;

//       let numBooksPerRow = 5; 

//       if (windowInnerWidth < 1440) {
//         numBooksPerRow = 3; 
//       }

//       if (windowInnerWidth < 768) {
//         numBooksPerRow = 1;
//       }
      

//       const firstIndexBooks = dataMarcup.map(({ books, list_name }) => {
//         const booksSlice = books.slice(0, numBooksPerRow);
//         return `<li class='best-item _list'> 
//                   <h4 class='min-title'>${list_name}</h4>
//                   <ul class='five-books'>
//                       ${makeMarkupForBooks(booksSlice)}
//                   </ul>
//                   <button class='see_more' data-name="${list_name}">See More</button>
//                 </li>`;
//       });

//       ulEl.insertAdjacentHTML('afterbegin', '<h2 class="title_best-sellers">Best Sellers&nbsp;<span class="title_book">Books</span></h2>');
//       ulElement.insertAdjacentHTML('beforeend', firstIndexBooks.join(''));
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// renderStartMarcup();



