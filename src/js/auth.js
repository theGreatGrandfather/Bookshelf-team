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

    if (e.target.children[0].classList.contains('js_form_sign_up')) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Notify.failure(`Create profile error: ${errorMessage}`)
            }).finally(() => {
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                    Notify.success(`Hello, ${name}, you successfully create new account`)
                }).catch((error) => {
                    const errorMessage = error.message;
                    Notify.failure(`Update profile error: ${errorMessage}`)
                });
            });
    }

    if (e.target.children[0].classList.contains('js_form_sign_in')) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                Notify.success(`Hello, ${user.displayName}`)
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                Notify.failure(`Sign in error: ${errorMessage}`)
            });
    }
}

onAuthStateChanged(auth, (user) => {
    if (user) {
    //   Ім'я юзера можна отримати з name тут
      const name = user.displayName;
      Notify.info(`User ${name}`)
    // ...
  } else {
    // User is signed out
        Notify.info(`Please Sign-In/Sign-Up`)
    // ...
  }
});


refs.authForm.addEventListener('submit', onSubmit);
refs.buttonSignIn.addEventListener('click', openCloseModal)
refs.modalAuth.addEventListener('click', onClickModal)