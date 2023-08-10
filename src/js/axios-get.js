import axios from "axios";
import { Notify } from "notiflix";


const BASE_URL = 'https://books-backend.p.goit.global';
const categoryList = '/books/category-list';
const topBooks = '/books/top-books';
const categoryBooks = '/books/category'
const book = '/books/';  
        
const getCategoryList = async () => {
  try {
    const result = await axios.get(`${BASE_URL}${categoryList}`);
    return result.data
  } catch (error) {
    Notify.failure(`Something went wrong. Try to reload the page`);
  }
};

const getTopBooks = async () =>{
  try {
    const result = await axios.get(`${BASE_URL}${topBooks}`);
    return result.data
  } catch (error) {
    Notify.failure(`Something went wrong. Try to reload the page`);
  }
  throw new Error(error);
};

const getBooksByCategory = async (category) => {
  try {
    const result = await axios.get((`${BASE_URL}${categoryBooks}`), {
      params: {category},
    } );
    return result.data
  } catch (error) {
    Notify.failure(`Something went wrong. Try to reload the page`);
  }
};

const getBookById = async (id) => {
  try {
    const result = await axios.get(`${BASE_URL}${book}${id}`);
    return result.data
  } catch (error) {
    Notify.failure(`Something went wrong. Try to reload the page`);
  }
};


export { getCategoryList, getTopBooks, getBooksByCategory, getBookById }

//для getBooksByCategory, getBookById потрібно передавати параметри 
// getBooksByCategory(category) getBookById(id)