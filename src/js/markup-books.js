import { getCategoryList, getTopBooks, getBooksByCategory, getBookById } from './axios-get'

function makeMarkupForBooks(booksArray) {
  const markup = booksArray
    .map(
      ({ book_image, title, author, _id, description, buy_links }) => `<li class="book-item" class="_list"
      data-title="${title}"
      data-image="${book_image}"
      data-author="${author}"
      data-description="${description}"
      data-namebuy1="${buy_links[0].name}"
      data-urlbuy1="${buy_links[0].url}"
      data-namebuy2="${buy_links[1].name}"
      data-urlbuy2="${buy_links[1].url}"
      data-namebuy3="${buy_links[2].name}"
      data-urlbuy3="${buy_links[2].url}"
      >
    <a href="#" class="_link" class="book-item" data-id="${_id}">
      <div class="thumb">
        <img src="${book_image}" alt="Book cover" loading="lazy"/>
        <div class="overlay">
          <p class="overlay-text">quick view </p>
        </div>
      </div>
      <h3 class="book-title">${title}</h3>
      <p class="book-author">${author}</p>
    </a>
  </li>`
    )
    .join('\n');
  return markup;
}
export { makeMarkupForBooks }

// для прикладу. для const ulEl треба розкоментувати ul в 4.html

const ulEl = document.querySelector('.books-list')
async function createBook(category) {
    const response = await getBooksByCategory(category);
    console.log(response)
    ulEl.insertAdjacentHTML('beforeend', makeMarkupForBooks(response))
}
createBook('Audio Fiction')
