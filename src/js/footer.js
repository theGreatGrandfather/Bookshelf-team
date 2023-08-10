const openModalButton = document.querySelector('.footer-btn-modal');
const closeModalButton = document.querySelector('.footer-close-btn'); 
const modal = document.querySelector('.footer-modal');

export const hiddenBodyOverflow = () => {
  if (document.body.style.overflow === 'hidden') {
    document.body.style.overflow = 'visible';
  } else {
    document.body.style.overflow = 'hidden';
  }
}

const closeModal = () => {
  modal.classList.remove('show');
  hiddenBodyOverflow();
  document.removeEventListener('keydown', onEscKeyPress);
}

const onEscKeyPress = event => {
  if (event.key === 'Escape') {
    closeModal();
  }
}

openModalButton.addEventListener('click', () => {
  console.log("Button clicked!");
  modal.classList.add('show');
  hiddenBodyOverflow();
  document.addEventListener('keydown', onEscKeyPress);
});

closeModalButton.addEventListener('click', () => {
  closeModal();
});

modal.addEventListener('click', (event) => {
  if (event.target === modal || event.target.classList.contains('footer-overlay')) {
    closeModal();
  }
});
