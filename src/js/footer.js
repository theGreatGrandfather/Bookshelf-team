const openModalButton = document.querySelector('.btn-aaaaaa');
const closeModalButton = document.querySelector('.footer-btn-close'); 
const modal = document.querySelector('.footer-modal');

export const hiddenBodyOverflow = () => {
  if (document.body.classList.contains('no-scroll-js')) {
    document.body.classList.remove('no-scroll-js');
  } else {
    document.body.classList.add('no-scroll-js');
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
