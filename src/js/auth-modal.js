import { refs } from "./auth-refs"

export const openCloseModal = () => {
  refs.modalAuth.classList.toggle('hidden');
  refs.iconBurger.classList.remove('hidden');
  refs.iconCross.classList.add('hidden');
  refs.menuContainer.classList.remove('is-open');   
  document.body.classList.remove('disable-scroll');
  if (document.body.style.overflow === 'hidden') {
    document.body.style.overflow = 'visible'
  } else {document.body.style.overflow = 'hidden'}
}

const signInMarkup = `<ul class="js_form_sign_in">
        <li class="form__element form__element_email">
          <input
          placeholder=""
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

const signUpMarkup = `<ul class="js_form_sign_up">
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