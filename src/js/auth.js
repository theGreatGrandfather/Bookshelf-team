import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "./firebase";
import { onClickModal, closeModal } from "./auth-modal";
import { refs } from "./auth-refs";
import { Notify } from "notiflix";
import { loaderOn, loaderOff } from "./loader";

Notify.init({
    cssAnimationStyle: "from-right"
})

export const registration = (email, password, name) => {
    loaderOn();
    const auth = getAuth(app);
    Notify.info('Registration...');
    createUserWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            Notify.failure(`Create profile error: ${error.message}`);
        }).finally(() => {
            const auth = getAuth(app);
            if (!auth.currentUser) {
                loaderOff();
                return;
            }
            updateProfile(auth.currentUser, {
                displayName: name,
            }).then(() => {
                closeModal();
                authorizedUser(name);
                Notify.success(`Hello, ${name}, you successfully create new account`);
            }).catch((error) => {
                const errorMessage = error.message;
                Notify.failure(`Update profile error: ${errorMessage}`);
            }).finally(() => loaderOff());
        });
};

export const authorization = (email, password) => {
    loaderOn();
    const auth = getAuth(app);
    Notify.info('Authorization...');
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            closeModal();
            Notify.success(`Hello, ${user.displayName}`);
        })
        .catch((error) => {
            const errorMessage = error.message;
            Notify.failure(`Sign in error: ${errorMessage}`)
        }).finally(() => {
            loaderOff();
        });
}

const authorizedUser = (userName) => {
    refs.buttonsSignUp.forEach(buttonSignUp => buttonSignUp.classList.add('hidden'));
    refs.buttonsUser.forEach(buttonUser => buttonUser.classList.remove('hidden'));

    refs.buttonsUser.forEach(buttonUser => buttonUser.children[1].textContent = userName);

    refs.buttonsLogOut[1].classList.remove('hidden');
}

const unAuthorizedUser = () => {
    refs.buttonsSignUp.forEach(buttonSignUp => buttonSignUp.classList.remove('hidden'));
    refs.buttonsUser.forEach(buttonUser => buttonUser.classList.add('hidden'));

    refs.buttonsLogOut.forEach(buttonUser => buttonUser.classList.add('hidden'));
}


export const checkUserIsAuth = () => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            Notify.info(`You are authorizated`)
            if (!user.displayName) { return }
            authorizedUser(user.displayName);
        } else {
            Notify.info(`You are UNauthorizated`)
            unAuthorizedUser();
        }
    });
};

export const onLogOut = () => {
    loaderOn();
    const auth = getAuth(app);
    signOut(auth).then(() => {
        Notify.success('Sign-out successful.')
        unAuthorizedUser();
    }).catch((error) => {
        const errorMessage = error.message;
        Notify.failure(`An error happened: ${errorMessage}`)
    }).finally(() => loaderOff());
}