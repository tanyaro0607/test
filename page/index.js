const buttonYellow = document.querySelector('.btn-warning');
const buttonGreen = document.querySelector('.btn-success');
const main = document.querySelector('.main');
const collectionItems = document.querySelectorAll('.collection-item');

buttonYellow.addEventListener('click', evt => {
  main.classList.toggle('hidden');
});

buttonGreen.addEventListener('click', evt => {
  collectionItems[0].classList.toggle('collection-item--second');
  collectionItems[1].classList.toggle('collection-item--first');
});
