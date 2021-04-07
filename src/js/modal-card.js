import refs from './refs.js'
import modalCardRender from '../templates/cardsOpenModalMovies.hbs'

refs.gallery.addEventListener('click', onClickGallery)

function onClickGallery(e) {
  e.preventDefault()
  if (e.target.nodeName !== 'IMG') {
    return
  }

  refs.modal.classList.add('is-open')
}
