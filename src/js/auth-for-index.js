import { refs } from "./auth-refs";
import { onClickModal, openModal } from "./auth-modal";
import { registration, authorization, onLogOut, checkUserIsAuth } from "./auth";
checkUserIsAuth()

refs.buttonsSignUp[0].addEventListener('click', openModal);
refs.modalAuth.addEventListener('click', onClickModal)

const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password } = {
        name: e.currentTarget.name.value,
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value
    };

    if (e.target.children[0].classList.contains('js_form_sign_up')) {
        registration(email, password, name);
    } else {
        authorization(email, password);
    }
}

const openOrCloseButtonLogOut = () => {
    refs.buttonsLogOut[0].classList.toggle('hidden')
};

refs.modalAuth.addEventListener('click', onClickModal);
refs.authForm.addEventListener('submit', onSubmit);
refs.buttonsUser.forEach(buttonUser => buttonUser.addEventListener('click', openOrCloseButtonLogOut));
refs.buttonsLogOut.forEach(buttonUser => buttonUser.addEventListener('click', onLogOut));