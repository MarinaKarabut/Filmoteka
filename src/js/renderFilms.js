import filmListTemplate from '../templates/filmList.hbs'
import createPagination from './createPagination.js'

function renderFilms(films, filmsContainer) {
  filmsContainer.innerHTML = filmListTemplate(films.results)

  const pagination = createPagination(films.total_pages, filmsContainer)
  const paginationContainer = document.querySelector('.pagination-container');
  if (paginationContainer) {
    paginationContainer.remove()
  }

  filmsContainer.after(pagination)
}

export default renderFilms
