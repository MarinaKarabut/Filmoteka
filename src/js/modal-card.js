import refs from './refs.js'
import modalCardRender from '../templates/cardsOpenModalMovies.hbs'
// import Функция Дани

const BASE_API = '923c2cf88ec4338da74c768a045101f0'
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie'
function getFilmById(id) {
  const IDURL = 'https://api.themoviedb.org/3/movie'
  const finalAddress = `${IDURL}/${id}?api_key=${BASE_API}`
  const idReq = fetch(finalAddress)

  return idReq
    .then(response => {
      if (!response.ok) {
        throw new Error('Запрос не удался')
      }
      const goodresponse = response.json()
      return goodresponse
    })
    .then(({original_title, overview, poster_path, vote_average, vote_count, popularity, genres}) => ({
      original_title,
      overview,
      poster_path,
      vote_average,
      vote_count,
      popularity,
      genres,
    }))
}

refs.gallery.addEventListener('click', onClickGallery)

function onClickGallery(e) {
  e.preventDefault()
  if (e.target.nodeName !== 'IMG') {
    return
  }

  refs.modal.classList.add('is-open')
  const id = e.target.dataset.index

  const dataSource = getFilmById(id)

  dataSource.then(result => {
    refs.modal.innerHTML = modalCardRender(result)
  })
}

// refs.buttonClose.addEventListener('click', callbackClose)

// function callbackClose() {
//   refs.modal.classList.remove('is-open')
// }

// overlay.addEventListener('click', onClickOverlay)

// function onClickOverlay(event) {
//   if (event.target === event.currentTarget) {
//     callbackClose()
//   }
// }

// window.addEventListener('keydown', escapeClose)

// function escapeClose(event) {
//   if (event.code === 'Escape') {
//     callbackClose()
//   }
// }
