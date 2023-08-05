export const BOOK_LIST = 'book_list';

export const getItems = () => {
  const bookList = localStorage.getItem(BOOK_LIST);
  if (bookList) {
    return JSON.parse(bookList);
  }

  return [];
};  

export const getItem = id => {
  const bookList = getItems();
  return   bookList.find(book => book.id === id)  
}; 

export const removeItem = id => {
  const bookList = getItems();
  const index = bookList.findIndex((book) => book.id === id);
  bookList.splice(index, 1);

  localStorage.setItem(BOOK_LIST, JSON.stringify(bookList));
}; 

export const setItem = (data) => {
  const bookList = getItems();
  bookList.push(data);
  localStorage.setItem(BOOK_LIST, JSON.stringify(bookList));
}

