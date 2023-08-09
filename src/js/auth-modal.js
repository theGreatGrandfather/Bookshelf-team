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
<svg
            class="lock-email"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M25.0832 21L17.3333 14M10.6666 14L2.91663 21M2.33325 8.16669L11.859 14.8347C12.6304 15.3747 13.016 15.6446 13.4356 15.7492C13.8061 15.8416 14.1937 15.8416 14.5643 15.7492C14.9838 15.6446 15.3695 15.3747 16.1408 14.8347L25.6666 8.16669M7.93325 23.3334H20.0666C22.0268 23.3334 23.0069 23.3334 23.7556 22.9519C24.4141 22.6163 24.9496 22.0809 25.2851 21.4223C25.6666 20.6736 25.6666 19.6935 25.6666 17.7334V10.2667C25.6666 8.3065 25.6666 7.32641 25.2851 6.57772C24.9496 5.91915 24.4141 5.38372 23.7556 5.04816C23.0069 4.66669 22.0268 4.66669 20.0666 4.66669H7.93325C5.97307 4.66669 4.99298 4.66669 4.24429 5.04816C3.58572 5.38372 3.05029 5.91915 2.71473 6.57772C2.33325 7.32641 2.33325 8.3065 2.33325 10.2667V17.7334C2.33325 19.6935 2.33325 20.6736 2.71473 21.4223C3.05029 22.0809 3.58572 22.6163 4.24429 22.9519C4.99298 23.3334 5.97307 23.3334 7.93325 23.3334Z"
              stroke="#111111"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
</li>

<li class="form__element form__element_password">
<input
  placeholder=""
  autocomplete="new-password"
  type="password"
  class="form__element__input form__element_password__input"
  id="password"
  required
/>

<label for="password" class="form__element__label">Password</label>
<svg class="lock-email" width="28" height="28">
  <use href="../images/sprite.svg#icon-lock"></use>
</svg>
</li>
      </ul>

      <button type="submit" class="form__button_submit">
        <span>Sign up</span>
      </button>`

const signUpMarkup = ` <ul class="js_form_sign_up _list">
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
  <svg
            class="lock-email"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              stroke = "var(--color-black)"
              fill = "var(--primery-bgc)"
              d="M25.0832 21L17.3333 14M10.6666 14L2.91663 21M2.33325 8.16669L11.859 14.8347C12.6304 15.3747 13.016 15.6446 13.4356 15.7492C13.8061 15.8416 14.1937 15.8416 14.5643 15.7492C14.9838 15.6446 15.3695 15.3747 16.1408 14.8347L25.6666 8.16669M7.93325 23.3334H20.0666C22.0268 23.3334 23.0069 23.3334 23.7556 22.9519C24.4141 22.6163 24.9496 22.0809 25.2851 21.4223C25.6666 20.6736 25.6666 19.6935 25.6666 17.7334V10.2667C25.6666 8.3065 25.6666 7.32641 25.2851 6.57772C24.9496 5.91915 24.4141 5.38372 23.7556 5.04816C23.0069 4.66669 22.0268 4.66669 20.0666 4.66669H7.93325C5.97307 4.66669 4.99298 4.66669 4.24429 5.04816C3.58572 5.38372 3.05029 5.91915 2.71473 6.57772C2.33325 7.32641 2.33325 8.3065 2.33325 10.2667V17.7334C2.33325 19.6935 2.33325 20.6736 2.71473 21.4223C3.05029 22.0809 3.58572 22.6163 4.24429 22.9519C4.99298 23.3334 5.97307 23.3334 7.93325 23.3334Z"
              stroke="#111111"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
</li>

<li class="form__element form__element_password">
  <input
    placeholder=""
    autocomplete="new-password"
    type="password"
    class="form__element__input form__element_password__input"
    id="password"
    required
  />

  <label for="password" class="form__element__label">Password</label>
  <svg class="lock-email" width="28" height="28">
    <use href="./images/sprite.svg#icon-lock"></use>
  </svg>
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