import addToWatched from './addToWatched.js'
import addToQueue from './addToQueue.js'

function openModal(modalContent) {
  const modalContentRef = document.querySelector('.modal-content')
  const backdrop = document.querySelector('.backdrop')
  const modal = document.querySelector('.js-modal')

  modalContentRef.innerHTML = modalContent

  backdrop.classList.add('is-open')
  modal.classList.add('is-open')

  const btnWatched = modal.querySelector('.btn-watched')
  const btnQueue = modal.querySelector('.btn-queue')

  btnWatched.addEventListener('click', addToWatched)
  btnQueue.addEventListener('click', addToQueue)
}

export default openModal
