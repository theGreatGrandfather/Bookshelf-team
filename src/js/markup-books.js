export const makeMarkupForBooks = (booksArray) => {
  const markup = booksArray.map(
    ({ book_image, title, author, _id, list_name, description, buy_links }) => `
      <li class="book-item" class="_list  "
        data-title="${title}"
        data-image="${book_image}"
        data-author="${author}"
        data-listName="${list_name}"
        data-description="${description}"
        data-linkNameAmazon="${buy_links[0].name}"
        data-linkUrlAmazon="${buy_links[0].url}"
        data-linkNameApple="${buy_links[1].name}"
        data-linkUrlApple="${buy_links[1].url}"
        data-linkNameBarnes="${buy_links[2].name}"
        data-linkUrlBarnes="${buy_links[2].url}"
      >
        <a href="#" class="_link" class="book-item" data-id="${_id}">
          <div class="thumb">
            <img class="lazyload" src="" data-src="${book_image}" alt="${title}" loading="lazy" width='335'/>
            <div class="overlay">
              <p class="overlay-text">quick view </p>
            </div>
          </div>
          <h4 class="book-title">${title}</h4>
          <p class="book-author">${author}</p>
        </a>
      </li>
    `
  ).join('');
  return markup;
};



