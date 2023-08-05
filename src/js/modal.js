import { setItem, getItem, removeItem } from './local-storage';

const el = {
  modal: document.getElementById('modal'),
  modalTitle: document.getElementById('modal-title'),
  modalAuthor: document.getElementById('modal-author'),
  modalDescr: document.getElementById('modal-description'),
  modalImg: document.getElementById('modal-image'),
  modalClose: document.getElementById('modal-close-btn'),
  amazonLink: document.getElementById('amazon-link'),
  appleLink: document.getElementById('apple-link'),
  barnesLink: document.getElementById('barnes-link'),
  addToList: document.getElementById('modal-add-to-list'),
  books: document.getElementById('best-sellers-container'),
};

let bookInfo = {};
let currentBookId;
let isBookAdded = false;

const onBookClick = e => {
  if (e.target.closest('.book-item')) {
    const bookItem = e.target.closest('.book-item');

    // get book data from attrs
    bookInfo = {
      id: bookItem.querySelector('._link').dataset.id,
      title: bookItem.dataset.title,
      img: bookItem.dataset.image,
      author: bookItem.dataset.author,
      description: bookItem.dataset.description,
      amazonLink: bookItem.dataset.linkurlamazon,
      appleLink: bookItem.dataset.linkurlapple,
      barnesLink: bookItem.dataset.linkurlbarnes,
      listname: bookItem.dataset.listname,
    };
  }

  // Insert book data to modal and save current BookId
  el.modalTitle.textContent = bookInfo.title;
  el.modalAuthor.textContent = bookInfo.author;
  el.modalDescr.textContent = bookInfo.description;
  el.modalImg.src = bookInfo.img;
  el.amazonLink.href = bookInfo.amazonLink;
  el.appleLink.href = bookInfo.appleLink;
  el.barnesLink.href = bookInfo.barnesLink;

  currentBookId = bookInfo.id;

  // check if this book has been already added to storage
  isBookAdded = getItem(bookInfo.id);
  if (!isBookAdded) {
    el.addToList.textContent = 'Add to shopping list';
  } else {
    el.addToList.textContent = 'Remove from the shopping list';
  }

  // open Modal
  el.modal.classList.toggle('modal-js');
};

const onCloseModal = () => {
  el.modal.classList.toggle('modal-js');
};

const toggleToList = () => {
  if (isBookAdded) {
    removeItem(currentBookId);
    el.addToList.textContent = 'Add to shopping list';
    isBookAdded = false;
  } else {
    setItem(bookInfo);
    el.addToList.textContent = 'Remove from the shopping list';
    isBookAdded = true;
  }
};

el.books.addEventListener('click', onBookClick);
el.modalClose.addEventListener('click', onCloseModal);
el.addToList.addEventListener('click', toggleToList);
