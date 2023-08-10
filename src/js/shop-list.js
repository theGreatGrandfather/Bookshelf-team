import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { delBook } from './auth-send-data';
import { app } from './firebase';
import { Notify } from 'notiflix';
import { loaderOn, loaderOff } from './loader';

const confirmBtn = document.querySelector('.confirm__btn');

const refs = {
  defaultMarkup: document.getElementById('js-shl-default-container'),
  bookListEl: document.getElementById('js-shl-booklist'),
};

const createShopListMarkup = arr => {
  return arr
    .map(
      ({
        id,
        data: {
          img,
          title,
          listname,
          description,
          author,
          amazonLink,
          appleLink,
          barnesLink,
        },
      }) => `<li class="shopping-list__item shopping-list-card js-shl-card" data-id='${id}'>
          <img
            class="shopping-list-card__image"
            src="${img}"
            alt="${title}"
          />
          <div class="shopping-list-card__info">
            <h2 class="shopping-list-card__title">${title}</h2>
            <p class="shopping-list-card__category">${listname}</p>
            <p class="shopping-list-card__descr">
            ${description}
            </p>
            <div class="shopping-list-card__wrapper">
              <p class="shopping-list-card__author">${author}</p>
              <div class="shopping-list-card__links">
                <a
                  href="${amazonLink}"
                  target="_blank"
                  class="shopping-list-card__link shop-amazon _link amazon-link"
                  
                ></a>
                <a
                  href="${appleLink}"
                  target="_blank"
                  class="shopping-list-card__link shop-apple _link apple-link"
                  
                ></a>
                <a
                  href="${barnesLink}"
                  target="_blank"
                  class="shopping-list-card__link shop-barnes _link"
                ></a>
              </div>
            </div>
            <button class="shopping-list-card__button js-shl-del-btn" type="button">
              <svg
                class="shopping-list-card__button--icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </li>`
    )
    .join('');
};

const hideDefaultMarkup = () => {
  refs.defaultMarkup.style.display = 'none';
};

export const showDefaultMarkup = () => {
  refs.defaultMarkup.style.display = 'flex';
  
  confirmBtn.classList.add('is-hiden');
  Notify.info('There are no books in your list yet...');
 };

const onDelBtnClick = evt => {
  const doesContain = evt.target.classList.contains('js-shl-del-btn');
  if (!doesContain) {
    return;
  }
  const bookCardEl = evt.target.closest('.js-shl-card');
  const cardId = bookCardEl.dataset.id;
  bookCardEl.remove();
  delBook(cardId);

  if (!refs.bookListEl.children.length) {
    showDefaultMarkup();
  }
};

const launchBookDelBtn = () => {
  refs.bookListEl.addEventListener('click', onDelBtnClick);
};

const fillShopListWithBooks = arr => {
  hideDefaultMarkup();
  const shopListMarkup = createShopListMarkup(arr);
  refs.bookListEl.insertAdjacentHTML('beforeend', shopListMarkup);
  launchBookDelBtn();
};

const auth = getAuth(app);
const db = getFirestore(app);

const getBooksData = () => {
  onAuthStateChanged(auth, async user => {
    // loaderOn();
    if (user) {
      const email = user.email;
      const querySnapshot = await getDocs(collection(db, email));
      const arr = [];
      querySnapshot.forEach(doc => {
        const data = {
          id: doc.id,
          data: doc.data(),
        };
        arr.push(data);
      });
      if (!arr.length) {
        // confirmBtn.classList.add('is-hiden');
        // confirmBtn.classList.remove('is-hiden');
        // confirmBtn.classList.add('is-hiden');
        return showDefaultMarkup();
      }
      confirmBtn.classList.remove('is-hiden');
      fillShopListWithBooks(arr);
    } else {
      Notify.info(`Please Sign-In/Sign-Up`);
    }
    
  });
 
};

getBooksData();
