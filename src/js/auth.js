import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";

// const auth = getAuth(app);
// ------------
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { app } from "./firebase";

const auth = getAuth(app);

const refSignUpForm = document.querySelector('.js_form_sign_in')
console.log(refSignUpForm);

const onSubmit = e => {
    e.preventDefault()
    
    const {name, email, password} = {
    name: e.currentTarget.name.value,
    email: e.currentTarget.email.value,
    password: e.currentTarget.password.value
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(userCredential);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });

    console.log(name);
}

refSignUpForm.addEventListener('submit', onSubmit)