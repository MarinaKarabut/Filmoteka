import filmListTemplate from '../templates/filmList.hbs'
import createPagination from './createPagination.js'
import filmsSearchOptions from "./filmOptions.js"

function renderFilms(films, filmsContainer) {
  filmsContainer.innerHTML = filmListTemplate(films.results)

  const pagination = createPagination(films.total_pages, filmsContainer)
  const paginationContainer = document.querySelector('.pagination-container');
  if (paginationContainer) {
    paginationContainer.remove()
  }

  filmsContainer.after(pagination)
  
  const arrowLeft = document.getElementById('arrow-left')
  const arrowRight = document.getElementById('arrow-right')
     if (filmsSearchOptions.options.page === 1) {
        arrowLeft.setAttribute('disabled', 'disabled')
    }else{
      arrowLeft.removeAttribute('disabled')
  }
  if (filmsSearchOptions.options.page === films.total_pages) {
    arrowRight.setAttribute('disabled', 'disabled')
  } else {
    arrowRight.removeAttribute('disabled')
  }
}

export default renderFilms
