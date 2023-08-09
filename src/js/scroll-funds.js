let position = 0;
let slidesToShow = 6;
let slidesToScroll = 1.5;

const container = document.querySelector('.slider-container');
const list = document.querySelector('.support-ukraine__list');
const sliderButton = document.querySelector('.support-ukraine__btn');
const itemsSupport = document.querySelectorAll('.support-ukraine__item');
let itemsCount = itemsSupport.length;
const sliderItemHeight = 32;
const movePosition = slidesToScroll * sliderItemHeight;

itemsSupport.forEach((item) => {
  item.style.minHeight = `${sliderItemHeight}px`;
});

sliderButton.addEventListener('click', () => {
  const itemsBottom = getItemsBottom();

  if (itemsBottom >= slidesToScroll) {
    position -= movePosition;
  } else {
    position = 0;
  }

  list.style.transition = 'transform 0.3s ease-out';
  setPosition();

  setTimeout(() => {
    list.style.transition = '';
  }, 300);
});

window.addEventListener('resize', () => {
  itemsCount = itemsSupport.length;
  setPosition();
});

const setPosition = () => {
  list.style.transform = `translateY(${position}px)`;
};

function getItemsBottom() {
  const windowWidth = window.innerWidth;

  if (windowWidth >= 1440) {
    return itemsCount - (Math.abs(position) + slidesToShow * sliderItemHeight) / 39;
  } else if (windowWidth >= 768) {
    return itemsCount - (Math.abs(position) + slidesToShow * sliderItemHeight) / 40;
  } else {
    return itemsCount - (Math.abs(position) + slidesToShow * sliderItemHeight) / 55;
  }
}