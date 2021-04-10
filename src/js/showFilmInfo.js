import MovieHttpService from './MovieHttpService.js';
import filmInfoTemplate from '../templates/filmInfo.hbs';
import openModal from './openModal.js';
const movieHttpService = new MovieHttpService();


function showFilmInfo(e) {
    e.preventDefault();
    const { target } = e;

    if (target.classList.contains('подставить класс img')) {

        const { filmId } = target.dataset;

        // data --> вызвать обьект movieHttpService и получить результат ответа (объект фильмов)
        // Передаем data в темплейт для создания разметки.
        const filmInfo = filmInfoTemplate(data);
        openModal(filmInfo);
    }

}

export default showFilmInfo;