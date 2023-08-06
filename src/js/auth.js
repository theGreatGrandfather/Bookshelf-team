import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase";
import { onClickModal, openCloseModal } from "./auth-modal";
import { refs } from "./auth-refs";
import { Notify } from "notiflix";

const auth = getAuth(app);

const onSubmit = e => {
    e.preventDefault()

    const { name, email, password } = {
        name: e.currentTarget.name.value,
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value
    }

    // Реєстрація
    if (e.target.children[0].classList.contains('js_form_sign_up')) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // userCredential данні користувача отримані відразу після реєстрації
                // ...
            })
            .catch((error) => {
                // error помилки, обробляю через Notiflix

                const errorMessage = error.message;
                Notify.failure(`Create profile error: ${errorMessage}`);
            }).finally(() => {
                // Сюди потрібно помістити те що потрібно оновлювати відразу після реєстрації
                // auth.currentUser Авторизований зараз юзер (відразу після реєстрації він авторизований)
                // другий параметр функції об'єкт з властивостями які потрібно оновити
                if (!auth.currentUser) {return}
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                    Notify.success(`Hello, ${name}, you successfully create new account`);
                    openCloseModal();
                }).catch((error) => {
                    // error помилки, обробляю через Notiflix
                    const errorMessage = error.message;
                    Notify.failure(`Update profile error: ${errorMessage}`);
                });
            });
    }

    // Авторизація
    if (e.target.children[0].classList.contains('js_form_sign_in')) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Данні отримані про користувача після авторизації
                const user = userCredential.user;
                Notify.success(`Hello, ${user.displayName}`);
            })
            .catch((error) => {
                // error помилки, обробляю через Notiflix
                const errorMessage = error.message;
                Notify.failure(`Sign in error: ${errorMessage}`)
            });
    }
}

// Перевірка чи користувач авторизований
// Повертає сповіщення з проханням авторизації якщо не авторизований
// Всі данні про користувача в user
// user = null якщо не авторизований
onAuthStateChanged(auth, (user) => {
    if (user) {
    //   Ім'я юзера можна отримати з name тут
    if(!user.displayName) {return}
      const name = user.displayName;
      Notify.info(`User ${name}`)
    // ...
  } else {
    // Користувач не авторизований
        Notify.info(`Please Sign-In/Sign-Up`)
    // ...
  }
});

refs.authForm.addEventListener('submit', onSubmit);
refs.buttonSignIn.addEventListener('click', openCloseModal)
refs.modalAuth.addEventListener('click', onClickModal)