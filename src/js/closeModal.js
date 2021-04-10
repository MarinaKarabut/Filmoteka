function closeModal(e) {
  e.preventDefault()
  const modal = document.querySelector('.js-modal')
  const backdrop = document.querySelector('.backdrop')
  const modalContentRef = document.querySelector('.modal-content')
  modal.classList.remove('is-open')
  backdrop.classList.remove('is-open')
  modalContentRef.innerHTML = ''
  // очищать modal-content и закрывать модальное окно
}

//
// const overlay = document.querySelector('.backdrop')
// overlay.addEventListener('click', onClickOverlay)

// function onClickOverlay(event) {
//   if (event.target === event.currentTarget) {
//     closeModal()
//   }
// }

// window.addEventListener('keydown', escapeClose)

// function escapeClose(event) {
//   if (event.code === 'Escape') {
//     closeModal()
//   }
// }

export default closeModal
