const wrapLoader = document.querySelector('.wrapper-loader');
const loader = document.querySelector('.loader');

const loaderOn = () => {
    loader.classList.remove('hidden-loader');
    wrapLoader.classList.remove('hidden-loader');
}

const loaderOff = () => {
    loader.classList.add('hidden-loader');
    wrapLoader.classList.add('hidden-loader');
}
loaderOff()

export { loaderOn, loaderOff }



// у функціях де іду запит на початку ставимо loaderOn,
// у блок finally loaderOff

// <div class="wrapper-loader"></div><div class="loader"></div>

