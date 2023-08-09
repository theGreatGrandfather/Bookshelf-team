// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
// import { app } from "./firebase";
// import { onClickModal, openCloseModal } from "./auth-modal";
// import { refs } from "./auth-refs";
// import { Notify } from "notiflix";
// // import { loaderOn, loaderOff } from "./loader";

// const auth = getAuth(app);

// const onSubmit = e => {
//     e.preventDefault()

//     const { name, email, password } = {
//         name: e.currentTarget.name.value,
//         email: e.currentTarget.email.value,
//         password: e.currentTarget.password.value
//     }

//     // Реєстрація
//     if (e.target.children[0].classList.contains('js_form_sign_up')) {
//         // loaderOn()
//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 // userCredential данні користувача отримані відразу після реєстрації
//                 // ...
//             })
//             .catch((error) => {
//                 // error помилки, обробляю через Notiflix

//                 const errorMessage = error.message;
//                 Notify.failure(`Create profile error: ${errorMessage}`);
//             }).finally(() => {
//                 // Сюди потрібно помістити те що потрібно оновлювати відразу після реєстрації
//                 // auth.currentUser Авторизований зараз юзер (відразу після реєстрації він авторизований)
//                 // другий параметр функції об'єкт з властивостями які потрібно оновити
//                 if (!auth.currentUser) {return}
//                 updateProfile(auth.currentUser, {
//                     displayName: name,
//                 }).then(() => {
//                     openCloseModal();
//                     authorizedUser(name)
//                     Notify.success(`Hello, ${name}, you successfully create new account`);
//                 }).catch((error) => {
//                     // error помилки, обробляю через Notiflix
//                     const errorMessage = error.message;
//                     Notify.failure(`Update profile error: ${errorMessage}`);
//                 });
//                 // loaderOff()
//             });
//     }

//     // Авторизація
//     if (e.target.children[0].classList.contains('js_form_sign_in')) {
//         // loaderOn()
//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 // Данні отримані про користувача після авторизації
//                 const user = userCredential.user;
//                 openCloseModal();
//                 Notify.success(`Hello, ${user.displayName}`);
//             })
//             .catch((error) => {
//                 // error помилки, обробляю через Notiflix
//                 const errorMessage = error.message;
//                 Notify.failure(`Sign in error: ${errorMessage}`)
//             }).finally(() => {
//                 // loaderOff();
//             });
//     }
// }

// // Перевірка чи користувач авторизований
// // Повертає сповіщення з проханням авторизації якщо не авторизований
// // Всі данні про користувача в user
// // user = null якщо не авторизований
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//     //   Ім'я юзера можна отримати з name тут
//     if(!user.displayName) {return}
//         const name = user.displayName;
//         authorizedUser(name)
//         refs.buttonsLogOut[1].classList.remove('hidden')
//     // ...
//     } else {
//     // Користувач не авторизований
//     refs.buttonsLogOut[1].classList.add('hidden')
//     // ...
//     }
// });

// const authorizedUser = (userName) => {
//     refs.buttonsSignUp.forEach(buttonSignUp => buttonSignUp.classList.add('hidden'));
//     refs.buttonsUser.forEach(buttonUser => buttonUser.classList.remove('hidden'));

//     refs.buttonsUser.forEach(buttonUser => buttonUser.children[1].textContent = userName);
// }

// const unAuthorizedUser = () => {
//     refs.buttonsSignUp.forEach(buttonSignUp => buttonSignUp.classList.remove('hidden'));
//     refs.buttonsUser.forEach(buttonUser => buttonUser.classList.add('hidden'));
// }

// const openCloseButtonLogOut = () => {
//     refs.buttonsLogOut[0].classList.toggle('hidden')
// }

// const onLogOut = () => {
//     signOut(auth).then(() => {
//         Notify.success('Sign-out successful.')
//         unAuthorizedUser();
//         openCloseButtonLogOut();
//         refs.buttonsLogOut[1].classList.add('hidden')
//     }).catch((error) => {
//         const errorMessage = error.message;
//         Notify.failure(`An error happened: ${errorMessage}`)
//     });
// };
// refs.buttonsSignUp.forEach(el => console.log(el))
// // refs.authForm.addEventListener('submit', onSubmit);
// refs.buttonsSignUp.forEach(buttonSignUp => buttonSignUp.addEventListener('click', openCloseModal));
// // refs.modalAuth.addEventListener('click', onClickModal);
// refs.buttonsUser.forEach(buttonUser => buttonUser.addEventListener('click', openCloseButtonLogOut));
// refs.buttonsLogOut.forEach(buttonLogOut => buttonLogOut.addEventListener('click', onLogOut));