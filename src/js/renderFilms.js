import filmListTemplate from '../templates/filmList.hbs';
import createPagination from './createPagination.js';

function renderFilms(films, filmsContainer) {
    filmsContainer.innerHTML = filmListTemplate(films);

    const pagination = createPagination(films.total_pages, filmsContainer);
    filmsContainer.after(pagination);
}

export default renderFilms;