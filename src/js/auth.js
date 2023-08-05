import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import { onClickModal, openCloseModal } from "./auth-modal";
import { refs } from "./auth-refs";

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
                const user = userCredential.user;
              
                console.log(user.displayName);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    if (e.target.children[0].classList.contains('js_form_sign_in')) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                console.log(user);
                console.log(user.displayName);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
}

refs.authForm.addEventListener('submit', onSubmit);
refs.buttonSignIn.addEventListener('click', openCloseModal)
refs.modalAuth.addEventListener('click', onClickModal)