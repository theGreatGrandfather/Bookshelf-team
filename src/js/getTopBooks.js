import { getTopBooks } from './axios-get';
import {makeMarkupForBooks} from './markup-books';

const marcupContainer = document.querySelector('#best-sellers-container');


console.log('marcupContainer', marcupContainer)
const renderStartMarcup = async () => {
  const dataMarcup = await getTopBooks();
  console.log('dataMarcup', dataMarcup);
  dataMarcup.map(({ books, list_name }) =>  
    // console.log('first', makeMarkupForBooks(books))
    marcupContainer.insertAdjacentHTML('beforebegin', makeMarkupForBooks(books))
  )
  // console.log('list_name', list_name);
}
renderStartMarcup();