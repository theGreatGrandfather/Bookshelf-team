import { setItem, getItem, removeItem } from './local-storage';

const el = {
  body: document.querySelector('body'),
  modal: document.getElementById('modal'),
  modalInner: document.getElementById('modal-inner'),
  modalTitle: document.getElementById('modal-title'),
  modalAuthor: document.getElementById('modal-author'),
  modalDescr: document.getElementById('modal-description'),
  modalImg: document.getElementById('modal-image'),
  modalClose: document.getElementById('modal-close-btn'),
  amazonLink: document.getElementById('amazon-link'),
  appleLink: document.getElementById('apple-link'),
  barnesLink: document.getElementById('barnes-link'),
  addToList: document.getElementById('modal-add-to-list'),
  modalGreetings: document.getElementById('modal-greetings-text'),
  books: document.getElementById('best-sellers-container'),
};

const BUTTON_ADD_TEXT = 'Add to shopping list';
const BUTTON_REMOVE_TEXT = 'Remove from the shopping list';
let bookInfo = {};
let currentBookId;
let isBookAdded = false;

const onBookClick = e => {
  e.preventDefault();
  if (!e.target.closest('.book-item')) return;

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
    el.addToList.textContent = BUTTON_ADD_TEXT;
    el.modalGreetings.classList.add('modal-greetings-text-js');
  } else {
    el.addToList.textContent = BUTTON_REMOVE_TEXT;
    el.modalGreetings.classList.remove('modal-greetings-text-js');
  }

  // open Modal
  el.body.classList.add('no-scroll-js');
  el.modal.classList.toggle('modal-js');
};

const onCloseModal = () => {
  el.modal.classList.add('modal-js');
  el.body.classList.remove('no-scroll-js');
};

const onCloseModalESC = e => {
  if (e.key === 'Escape') {
    onCloseModal();
  }
};

const toggleToList = () => {
  if (!isBookAdded) {
    setItem(bookInfo);
    el.addToList.textContent = BUTTON_REMOVE_TEXT;
    el.modalGreetings.classList.remove('modal-greetings-text-js');
    isBookAdded = true;
  } else {
    removeItem(currentBookId);
    el.addToList.textContent = BUTTON_ADD_TEXT;
    el.modalGreetings.classList.add('modal-greetings-text-js');
    isBookAdded = false;
  }
};

el.books.addEventListener('click', onBookClick);
el.modalClose.addEventListener('click', onCloseModal);
el.addToList.addEventListener('click', toggleToList);
document.addEventListener('keydown', onCloseModalESC);
el.modal.addEventListener('click', onCloseModal);
el.modalInner.addEventListener('click', e => e.stopPropagation());
