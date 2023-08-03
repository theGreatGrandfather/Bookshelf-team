import axios from "axios";


const BASE_URL = 'https://books-backend.p.goit.global';
const categoryList = '/books/category-list';
const topBooks = '/books/top-books';
const categoryBooks = '/books/category'
const book = '/books/';  //{id}
        
async function getCategoryList() {
  try {
    const result = await axios.get(`${BASE_URL}${categoryList}`);
    console.log(result)
    return result.data
  } catch (error) {
    console.log(error)
  }
};

async function getTopBooks() {
  try {
    const result = await axios.get(`${BASE_URL}${topBooks}`);
    console.log(result)
    return result.data
  } catch (error) {
    console.log(error)
  }
};

async function getyBooksByCategory(category) {
  try {
    const result = await axios.get((`${BASE_URL}${categoryBooks}`), {
      params: {category},
    } );
    console.log(result)
    return result.data
  } catch (error) {
    console.log(error)
  }
};

async function getBookById(id) {
  try {
    const result = await axios.get(`${BASE_URL}${book}${id}`);
    console.log(result)
    return result.data
  } catch (error) {
    console.log(error)
  }
};


export { getCategoryList, getTopBooks, getyBooksByCategory, getBookById}