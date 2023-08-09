import { refs } from "./auth-refs";

const closeModalSasha = document.querySelector('.js_modal_auth');
const openModalButton = document.querySelector('.btn-aaaaaa');
const closeModalButton = document.querySelector('.footer-btn-close');

export const openModal = () => {
  refs.modalAuth.classList.remove('hidden');
  document.body.classList.add('no-scroll-js');
  document.addEventListener('keydown', onEscKeyPress);
}

export const closeModal = () => {
  refs.modalAuth.classList.add('hidden');
  document.body.classList.remove('no-scroll-js');
  document.removeEventListener('keydown', onEscKeyPress);
}

const onEscKeyPress = event => {
  if (event.key === 'Escape') {
    closeModal();
  }
}

openModalButton.addEventListener('click', () => {
  closeModalSasha.classList.add('hidden');
  hiddenBodyOverflow();
  openModal();
});

closeModalButton.addEventListener('click', () => {
  closeModal();
});

closeModalSasha.addEventListener('click', (event) => {
  if (event.target === closeModalSasha || event.target.classList.contains('modal_window')) {
    closeModal();
  }
});


const signInMarkup = `<ul class="js_form_sign_in _list">
        <li class="form__element form__element_email">
          <input
            placeholder=""
            autocomplete="email"
            type="email"
            class="form__element__input form__element_email__input"
            id="email"
            required
          />
          <label for="email" class="form__element__label">Email</label>
        </li>

        <li class="form__element form__element_password">
          <input
            placeholder=""
            autocomplete="password"
            type="password"
            class="form__element__input form__element_password__input"
            id="password"
            required
          />

          <label for="password" class="form__element__label">Password</label>
        </li>
      </ul>

      <button type="submit" class="form__button_submit">
        <span>Sign up</span>
      </button>`

const signUpMarkup = `<ul class="js_form_sign_up _list">
        <li class="form__element form__element_name">
          <input
            placeholder=""
            type="text"
            class="form__element__input form__element_name__input"
            id="name"
            required
          />
          <label for="name" class="form__element__label">Name</label>
        </li>

        <li class="form__element form__element_email">
          <input
            placeholder=""
            autocomplete="email"
            type="email"
            class="form__element__input form__element_email__input"
            id="email"
            required
          />
          <label for="email" class="form__element__label">Email</label>
        </li>

        <li class="form__element form__element_password">
          <input
            placeholder=""
            type="password"
            autocomplete="new-password"
            class="form__element__input form__element_password__input"
            id="password"
            required
          />

          <label for="password" class="form__element__label">Password</label>
        </li>
      </ul>

      <button type="submit" class="form__button_submit">
        <span>Sign up</span>
      </button>`

const disabledButtonSignUp = () => { 
  refs.changeButtons.children[0].disabled = true;
  refs.changeButtons.children[1].disabled = false;
}

const disabledButtonSignIn = () => { 
  refs.changeButtons.children[0].disabled = false;
  refs.changeButtons.children[1].disabled = true;
}

export const onClickModal = e => {
    if (e.target.classList.contains('modal__button_close')) {
        closeModal();
    }

    if (e.target.classList.contains('js_button_sign_in')) {
        refs.authForm.innerHTML = signInMarkup;
        disabledButtonSignIn()
    }

    if (e.target.classList.contains('js_button_sign_up')) {
        refs.authForm.innerHTML = signUpMarkup;
        disabledButtonSignUp()
    }
}