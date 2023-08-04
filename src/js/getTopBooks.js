import { getTopBooks } from './axios-get';
import {makeMarkupForBooks, ulEl} from './markup-books';


console.log('ulEl', ulEl)
const renderStartMarcup = async () => {
  const dataMarcup = await getTopBooks();
  console.log('dataMarcup', dataMarcup);
  dataMarcup.map(({ books, list_name }) =>
    
  ulEl.insertAdjacentHTML('beforeend', makeMarkupForBooks(books))
  )
  console.log('list_name', list_name);
}
renderStartMarcup();