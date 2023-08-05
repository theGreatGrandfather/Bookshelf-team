const openModalBtn = document.getElementById("openModal")
const modalWindow = document.getElementById("modalW")
const modalContent = document.getElementById("modal-content")
const closeModalBtn = document.getElementById("closeModal")

console.log('test khjlkjllkj')

// on click on book .book-item add...((e) => {
 
// } )
// from event read book data from data atr
// save to the const
// 

const bookList = document.querySelector(".book-items");

// bookItem.addEventListener('click', (e) => {
//     console.log(e.target)
// })

// bookItem.addEventListener("click", onBookItemClick)
const onBookItemClick = (e)=>{ 
    console.log('sdcsdcscsdc ', e.target)
}
bookList.addEventListener("click", onBookItemClick)


const basketList = document.querySelector('.basket__list');


const onCartButtonClick = (e) => {
    if (e.target.hasAttribute('data-card')) {
        const card = e.target.closest('.book__item');
        const poductInfo = {
            id: card.dataset.id,
            img: card.querySelector('.book__img').getAttribute('src'),
            title: card.querySelector('.book-title').innerText,
            price: card.querySelector('.book__price').querySelector('.book__price__value').innerText,
        } 
        console.log('poductInfo', poductInfo);

        const poductInfoJSON = JSON.stringify(poductInfo);
        localStorage.setItem(`1111`, JSON.stringify(poductInfo));



    }
} 


window.addEventListener('click', onCartButtonClick);

// const bookSearch = (e) => {
//     console.log("event", e);
// }

// bookIt.addEventListener("click", bookSearch);



//  document.addEventListener('click', (e) => {
//      e.target
//      const title = dataa-ttr


//      titleEl.append(title)

//     toggle()
// })



