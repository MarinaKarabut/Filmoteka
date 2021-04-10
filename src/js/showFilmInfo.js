import MovieHttpService from './MovieHttpService.js';
import filmInfoTemplate from '../templates/filmInfo.hbs';
import openModal from './openModal.js';
const movieHttpService = new MovieHttpService();

function showFilmInfo(e) {
  e.preventDefault();

  const { target } = e;

  if (target.classList.contains('movie-card-img')) {
    const { filmId } = target.dataset;


    const data = movieHttpService.getFilmId(filmId);
    data.then(result => {

      const filmInfo = filmInfoTemplate(result.data);
      openModal(filmInfo);
    });

  }
}

export default showFilmInfo;


