function closeModal(e) {
  e.preventDefault()
  const modal = document.querySelector('.js-modal')
  const modalContentRef = document.querySelector('.modal-content')
  modal.classList.remove('is-open')
  modalContentRef.innerHTML = ''
  // очищать modal-content и закрывать модальное окно
}

export default closeModal
