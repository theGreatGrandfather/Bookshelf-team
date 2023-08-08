const openModalButton = document.querySelector('.btn-aaaaaa');
const closeModalButton = document.querySelector('.footer-btn-close');
const modal = document.querySelector('.footer-modal');

export function hiddenBodyOverflow() {
  if (document.body.style.overflow === 'hidden') {
    document.body.style.overflow = 'visible';
  } else {
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  modal.classList.remove('show');
  hiddenBodyOverflow();
  document.removeEventListener('keydown', onEscKeyPress);
}

function onEscKeyPress(event) {
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



