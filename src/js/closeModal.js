function closeModal(e) {
  e.preventDefault()
  modal.classList.remove('is-open')
  modalContentRef.innerHTML = ''
  // очищать modal-content и закрывать модальное окно
}

export default closeModal
