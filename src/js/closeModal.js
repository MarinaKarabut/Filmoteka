export function closeModal() {
  const modal = document.querySelector('.js-modal')
  const backdrop = document.querySelector('.backdrop')
  const modalContentRef = document.querySelector('.modal-content')
  modal.classList.remove('is-open')
  backdrop.classList.remove('is-open')
  modalContentRef.innerHTML = ''
}

export function onClickOverlay(event) {
  if (event.target === event.currentTarget) {
    closeModal()
  }
}

export function escapeClose(event) {
  if (event.code === 'Escape') {
    closeModal()
  }
}
