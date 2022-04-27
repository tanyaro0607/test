const $ = {};

//ф-я, создает модальное окно
_createModal = () => {
  const modal = document.createElement('div');
  modal.classList.add('wmodal');
  modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay">
      <div class="modal-window">
        <div class="modal-header">
          <span class="modal-close" data-close="false">&times;</span>
        </div>
        <div class="modal-body">
          <span class="modal-title">Привет, мир.</span>
        </div>
      </div>
    </div>
  `);

  document.body.appendChild(modal);
  return modal;
};

$.modal = () => {
  const $modal = _createModal();
  $modal.addEventListener('click', event => {
    if (event.target.dataset.close) {
      $modal.parentNode.removeChild($modal);;
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key == "Escape") {
      $modal.parentNode.removeChild($modal);;
    }
  });
};

$.modal();