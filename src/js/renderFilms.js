
import filmListTemplate from '../templates/filmList.hbs'
import createPagination from './createPagination.js'
import filmsSearchOptions from "./filmOptions.js"

function renderFilms(films, filmsContainer) {
  filmsContainer.innerHTML = filmListTemplate(films.results);
  const pagination = createPagination(films.total_pages, filmsContainer);
  const paginationContainer = document.querySelector('.pagination-container');
  if (paginationContainer) {
    paginationContainer.remove();
  }


  filmsContainer.after(pagination);

  const arrowLeft = document.getElementById('arrow-left');
  const arrowRight = document.getElementById('arrow-right');
  const pagButton = document.querySelector('.pagination-button')
     if (filmsSearchOptions.options.page < 2) {
       arrowLeft.classList.add('hidden-arrow');
    }else{
       arrowLeft.classList.remove('hidden-arrow');
  }
  if (filmsSearchOptions.options.page === films.total_pages || films.total_pages  < 1) {
    arrowRight.classList.add('hidden-arrow');
  } else {
    arrowRight.classList.remove('hidden-arrow');
  }
  if (films.total_pages === 1) {
    pagButton.classList.add('hidden-arrow')
  } else {
    pagButton.classList.remove('hidden-arrow')
  }
}

export default renderFilms;