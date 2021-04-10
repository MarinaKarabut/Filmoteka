import addToWatched from './addToWatched.js'
import addToQueue from './addToQueue.js'

function openModal(modalContent) {
  const modalContentRef = document.querySelector('.modal-content')
  const backdrop = document.querySelector('.backdrop')
  const modal = document.querySelector('.js-modal')
  modalContentRef.innerHTML = modalContent
  //  найти внутри модалки "добавить в просмотренные - addToWatched()" , "добавить в планы - addToQueue()" и повесить
  // слушатели которые добавляет в localStorage id фильмов
  backdrop.classList.add('is-open')
  modal.classList.add('is-open')
  const btnWatched = document.querySelector('.btn-watched')
  const btnQueue = document.querySelector('.btn-queue')
  btnWatched.addEventListener('click', addToWatched)
  btnQueue.addEventListener('click', addToQueue)
}

export default openModal
