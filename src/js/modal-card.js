import refs from './refs.js'
import modalCardRender from '../templates/cardsOpenModalMovies.hbs'
function getFilmById(id) {
  const finalAddress = `${BASE_URL}/${id}?api_key=${BASE_API}`
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

const BASE_API = '923c2cf88ec4338da74c768a045101f0'
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie'

console.log(getFilmById(46))

refs.gallery.addEventListener('click', onClickGallery)

function onClickGallery(e) {
  e.preventDefault()
  if (e.target.nodeName !== 'IMG') {
    return
  }

  refs.modal.classList.add('is-open')
  const id = refs.imgCard.dataset.index
  const dataSource = getFilmById(id)

  dataSource.then(result => {
    console.log(result)
  })
}
