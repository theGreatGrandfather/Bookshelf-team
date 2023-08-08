import { refs } from "./auth-refs";
import { onClickModal, openModal, closeModal } from "./auth-modal";
import { loaderOn, loaderOff } from "./loader";
import { Notify } from "notiflix";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { registration } from "./auth";


refs.buttonsSignUp[0].addEventListener('click', openModal);
refs.modalAuth.addEventListener('click', onClickModal)

const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password } = {
        name: e.currentTarget.name.value,
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value
    };

    registration(email, password, name)
}

refs.modalAuth.addEventListener('click', onClickModal);
refs.authForm.addEventListener('submit', onSubmit);