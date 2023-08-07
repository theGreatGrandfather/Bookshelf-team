import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase";
import { onClickModal, openCloseModal } from "./auth-modal";
import { refs } from "./auth-refs";
import { Notify } from "notiflix";
import { loaderOn, loaderOff } from "./loader";
import { async } from "@firebase/util";

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
        loaderOn()
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
                    openCloseModal();
                    Notify.success(`Hello, ${name}, you successfully create new account`);
                }).catch((error) => {
                    // error помилки, обробляю через Notiflix
                    const errorMessage = error.message;
                    Notify.failure(`Update profile error: ${errorMessage}`);
                });
                loaderOff()
            });
    }

    // Авторизація
    if (e.target.children[0].classList.contains('js_form_sign_in')) {
        loaderOn()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Данні отримані про користувача після авторизації
                const user = userCredential.user;
                openCloseModal();
                Notify.success(`Hello, ${user.displayName}`);
            })
            .catch((error) => {
                // error помилки, обробляю через Notiflix
                const errorMessage = error.message;
                Notify.failure(`Sign in error: ${errorMessage}`)
            }).finally(() => {
                loaderOff();
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
      authorizedUser(name)
    // ...
  } else {
    // Користувач не авторизований
        Notify.info(`Please Sign-In/Sign-Up`)
    // ...
  }
});

const authorizedUser = (userName) => {
    refs.buttonSignUp.classList.add('hidden');
    refs.buttonUser.classList.remove('hidden');

    refs.buttonUser.children[1].textContent = userName;
}

const onClickUser = (e) => {
    const murkupLogOut = `<button class="js_log_out"> Log out
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3.33301 10H16.6663M16.6663 10L11.6663 5M16.6663 10L11.6663 15" stroke="#EAC645" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </button>`

console.log(e.currentTarget);
}

refs.authForm.addEventListener('submit', onSubmit);
refs.buttonSignUp.addEventListener('click', openCloseModal);
refs.modalAuth.addEventListener('click', onClickModal);
refs.buttonUser.addEventListener('click', onClickUser)

