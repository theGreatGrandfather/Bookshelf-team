import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app);

const refSignUpForm = document.querySelector('.js_form_sign_in')

const onSubmit = e => {
    e.preventDefault()
    console.log(1);
    const {name, email, password} = {
    name: e.currentTarget.name.value,
    email: e.currentTarget.email.value,
    password: e.currentTarget.password.value
    }

    console.log(name);

}

refSignUpForm.addEventListener('submit', onSubmit)