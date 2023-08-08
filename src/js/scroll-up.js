//scroll-up
const btnGoTop = document.querySelector(".go-top")
btnGoTop.hidden = true;

export const goTop = () => {
    if (window.scrollY > 0) {
        window.scrollBy(0, -82);
        setTimeout(goTop, 0);
    }
}

const onScroll = () => {
    const offset = window.scrollY;
    const coords = document.documentElement.clientHeight;
    if (offset*5 >= coords) {
        btnGoTop.hidden = false
    } else {
        btnGoTop.hidden = true;
    }
}

window.addEventListener('scroll', onScroll);
btnGoTop.addEventListener('click', goTop);