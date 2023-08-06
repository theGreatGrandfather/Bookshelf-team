// const list = [
//   {
//     id: '643282b2e85766588626a132',
//     title: 'I WILL FIND YOU',
//     img: 'https://storage.googleapis.com/du-prd/books/images/9781538748367.jpg',
//     author: 'Harlan Coben',
//     description:
//       'A man imprisoned for murdering his 3-year-old son becomes convinced his son is still alive and plans an escape. Read by Steven Weber. 10 hours, 16 minutes unabridged.',
//     amazonLink: 'https://www.amazon.com/dp/1538748363?tag=NYTBSREV-20',
//     appleLink: 'https://goto.applebooks.apple/9781543661385?at=10lIEQ',
//     barnesLink:
//       'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781543661385',
//     listname: 'Audio Fiction',
//   },
//   {
//     id: '643282b1e85766588626a0b4',
//     title: "I'M GLAD MY MOM DIED",
//     img: 'https://storage.googleapis.com/du-prd/books/images/9781982185824.jpg',
//     author: 'Jennette McCurdy',
//     description:
//       'The actress and filmmaker describes her eating disorders and difficult relationship with her mother. Read by the author. 6 hours, 25 minutes unabridged.',
//     amazonLink: 'https://www.amazon.com/dp/1982185821?tag=NYTBSREV-20',
//     appleLink: 'https://goto.applebooks.apple/9781797147949?at=10lIEQ',
//     barnesLink:
//       'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781797147949',
//     listname: 'Audio Nonfiction',
//   },
// ];

import { pullBookData } from './auth-send-data';
import { delBook } from './auth-send-data';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from './firebase';
import { Notify } from 'notiflix';

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
                  class="shopping-list-card__link --amazon _link"
                ></a>
                <a
                  href="${appleLink}"
                  target="_blank"
                  class="shopping-list-card__link --apple _link"
                ></a>
                <a
                  href="${barnesLink}"
                  target="_blank"
                  class="shopping-list-card__link --barnes _link"
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

const showDefaultMarkup = () => {
  refs.defaultMarkup.style.display = 'flex';
};

const onDelBtnClick = evt => {
  const isContains = evt.target.classList.contains('js-shl-del-btn');
  if (!isContains) {
    return;
  }
  const bookCardEl = evt.target.closest('.js-shl-card');
  const cardId = bookCardEl.dataset.id;
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
        Notify.info('There is no books in your list yet...');
        return showDefaultMarkup();
      }
      fillShopListWithBooks(arr);
    } else {
      Notify.info(`Please Sign-In/Sign-Up`);
    }
  });
};

getBooksData();

// const launchBookDelBtn = () => {
//   const bookDelBtn = document.getElementById('js-shl-del-btn');
//   bookDelBtn.addEventListener('click', onDelBtnClick);
// };

// refs.delBookBtn.addEventListener('click', onDelBtnClick);

/** const delBook = async (docId) => {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const email = user.email;
            await deleteDoc(doc(db, email, docId));
        }
    })
};*/
