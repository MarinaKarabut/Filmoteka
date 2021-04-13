import { showIframe } from './showFilmInfo.js'

function openModal(modalContent) {
  const modalContentRef = document.querySelector('.modal-content')
  const backdrop = document.querySelector('.backdrop')
  const modal = document.querySelector('.js-modal')

  modalContentRef.innerHTML = modalContent;

  backdrop.classList.add('is-open')
  modal.classList.add('is-open')

  // const btnWatched = modal.querySelector('.btn-watched')
  // const btnQueue = modal.querySelector('.btn-queue')
  const btnYoutube = modal.querySelector('.btn-youtube')

  btnYoutube.addEventListener('click', showIframe)
  // btnWatched.addEventListener('click', addToWatched)
  // btnQueue.addEventListener('click', addToQueue)
}

export default openModal;
