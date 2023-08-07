import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";
import { app } from "./firebase";
import { Notify } from "notiflix";

const auth = getAuth(app);
const db = getFirestore(app);

/**
 * Перевіряє чи користувач авторизований, якщо авторизований на його email
 * відправляє об'єкт властивостей книги наприклад {title: 'book', count: 10},
 * повертає ID об'єкта записаного в firestore Data Base
 * @param {Об'єект властивостей книги} bookData 
 */
export const pullBookData = async (bookData) => {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const email = user.email;

            try {
                const docRef = await addDoc(collection(db, email), bookData);
                return docRef.id;
            } catch (e) {
                const errorMessage = e.message;
                Notify.failure(`Error: ${errorMessage}`);
            };
            // ...
        } else {
            // Користувач не авторизований
            Notify.info(`Please Sign-In/Sign-Up`)
            // ...
        }
    });
};

/**
 * Отримувати базу книг
 */
const getBooksData = () => {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const email = user.email;

            const querySnapshot = await getDocs(collection(db, email));
            const arr = [];
            querySnapshot.forEach((doc) => {
                const data = {
                    id: doc.id,
                    data: doc.data()
                }
                arr.push(data)
            })
            return arr;
        } else {
            // Користувач не авторизований
            Notify.info(`Please Sign-In/Sign-Up`)
            // ...
        }
    });
};


/**
 * Видаляє елемент з id в базі данних, якщо юзер авторизований, можна імпортувати.
 * @param {id елемента який потрібно видалити (отриманий з бази данних)} docId 
 */
export const delBook = async (docId) => {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const email = user.email;
            await deleteDoc(doc(db, email, docId));
        }
    })
};

