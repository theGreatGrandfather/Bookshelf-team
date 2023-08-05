const checkBox = document.querySelector('.theme-switcher');
const body = document.querySelector('body');

const onCheckBoxChange = (e) => {
    console.log('e', e);

    body.classList.toggle('dark-theme')
}

checkBox.addEventListener("change", onCheckBoxChange);