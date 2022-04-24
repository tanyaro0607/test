const buttonYellow = document.querySelector('.btn-warning');
const buttonGreen = document.querySelector('.btn-success');
const main = document.querySelector('.main');
const collection = document.querySelector('.collection');
const collectionItems = document.querySelectorAll('.collection-item');
const myModal = $.modal();

buttonYellow.addEventListener('click', evt => {
  evt.preventDefault();
  main.classList.toggle('hidden');
});

buttonGreen.addEventListener('click', evt => {
  evt.preventDefault();
  const template = collectionItems[0].innerHTML;
  collectionItems[0].innerHTML = collectionItems[1].innerHTML;
  collectionItems[1].innerHTML = template;
  collectionItems[0].classList.toggle('collection-item--yellow');
  collectionItems[1].classList.toggle('collection-item--yellow');
  collectionItems[1].classList.toggle('collection-item--maroon');
  collectionItems[0].classList.toggle('collection-item--maroon');
});
