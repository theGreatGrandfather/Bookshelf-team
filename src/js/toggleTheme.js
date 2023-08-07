const checkBox = document.querySelector('.theme-switcher');
const body = document.querySelector('body');

const activeTheme = localStorage.getItem('theme');

const darkTheme = () => {
    body.classList.replace('qq', 'dark-theme');
    localStorage.setItem('theme', 'dark-theme');
}

const lightTheme = () => {
    body.classList.replace('dark-theme', 'qq');
    localStorage.setItem('theme', 'qq');
}

if (activeTheme === 'qq' || activeTheme === null) { 
    lightTheme();
} if (activeTheme === 'dark-theme') {
    darkTheme();
}

const onCheckBoxChange = (e) => {
    if (body.classList.contains('qq')) {
        darkTheme();
    } else {
        lightTheme();
    }
}
checkBox.addEventListener("change", onCheckBoxChange);