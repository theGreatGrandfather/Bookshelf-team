import { refs } from "./auth-refs"

export const openCloseModal = () => {
    refs.modalAuth.classList.toggle('hidden')
}

const signInMarkup = `<ul class="js_form_sign_in">
  <li class="form__element_email">
    <input
      type="email"
      class="form__element_email__input"
      id="email"
      required
    />
    <label for="email" class="form__element_name__input">Email</label>
  </li>

  <li class="form__element_password">
    <input
      type="password"
      class="form__element_password__input"
      id="password"
      required
    />

    <label for="password" class="form__element_name__input">Password</label>
  </li>
</ul>

<button type="submit" class="form__button_submit">Sign in</button>`

const signUpMarkup = `<ul class="js_form_sign_up">
  <li class="form__element_name">
    <input
      type="text"
      class="form__element_name__input"
      id="name"
      required
    />
    <label for="name" class="form__element_name__input">Name</label>
  </li>

  <li class="form__element_email">
    <input
      type="email"
      class="form__element_email__input"
      id="email"
      required
    />
    <label for="email" class="form__element_name__input">Email</label>
  </li>

  <li class="form__element_password">
    <input
      type="password"
      class="form__element_password__input"
      id="password"
      required
    />

    <label for="password" class="form__element_name__input">Password</label>
  </li>
</ul>

<button type="submit" class="form__button_submit">Sign in</button>`

const changeDisabledButton = () => {
    if (refs.changeButtons.children[0].disabled) {
        refs.changeButtons.children[0].disabled = false;
        refs.changeButtons.children[1].disabled = true;
    } else {
        refs.changeButtons.children[0].disabled = true;
        refs.changeButtons.children[1].disabled = false;
    }
}

export const onClickModal = e => {
    if (e.target.classList.contains('modal__button_close')) {
        openCloseModal();
    }

    if (e.target.classList.contains('js_button_sign_in')) {
        refs.authForm.innerHTML = signInMarkup;
        changeDisabledButton()
    }

    if (e.target.classList.contains('js_button_sign_up')) {
        refs.authForm.innerHTML = signUpMarkup;
        changeDisabledButton()
    }
}