import axios from "axios";


const BASE_URL = 'https://books-backend.p.goit.global';
const categoryList = '/books/category-list';
const topBooks = '/books/top-books';
const categoryBooks = '/books/category'
const book = '/books/';  
        
async function getCategoryList() {
  try {
    const result = await axios.get(`${BASE_URL}${categoryList}`);
    return result.data
  } catch (error) {
    console.log(error)
  }
};

async function getTopBooks() {
  try {
    const result = await axios.get(`${BASE_URL}${topBooks}`);
    return result.data
  } catch (error) {
    console.log(error)
  }
  throw new Error(error);
};

async function getBooksByCategory(category) {
  try {
    const result = await axios.get((`${BASE_URL}${categoryBooks}`), {
      params: {category},
    } );
    return result.data
  } catch (error) {
    console.log(error)
  }
};

async function getBookById(id) {
  try {
    const result = await axios.get(`${BASE_URL}${book}${id}`);
    return result.data
  } catch (error) {
    console.log(error)
  }
};


export { getCategoryList, getTopBooks, getBooksByCategory, getBookById }

//для getBooksByCategory, getBookById потрібно передавати параметри 
// getBooksByCategory(category) getBookById(id)