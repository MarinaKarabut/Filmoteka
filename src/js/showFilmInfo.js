import MovieHttpService from './MovieHttpService.js'
import filmInfoTemplate from '../templates/filmInfo.hbs'
import openModal from './openModal.js'
import addToLibrary  from '../js/addToLibrary.js';
const movieHttpService = new MovieHttpService()

function showFilmInfo(e) {
  e.preventDefault()

  const {target} = e

  if (target.classList.contains('js-open-modal')) {
    const {filmId} = target.dataset

    const data = movieHttpService.getFilmById(filmId)
    data.then(({ data }) => {
      const filmInfo = filmInfoTemplate(data)
      openModal(filmInfo)
      addToLibrary(data.id)
      // console.log(filmInfo);

    })
  }

}

export default showFilmInfo;
