import paginationTemplate from '../templates/pagination.hbs';
import MovieHttpService from './MovieHttpService.js';
import renderFilms from './renderFilms.js';

const movieHttpService = new MovieHttpService();

function createPagination(totalPages, filmsContainer) {
// создать HTML разметку пагинации
// повесить на разметку событие, которое отправляет аякс запрос на получение следующей страницы, получает ответ и
// передает ответ в функцию renderFilms
    /*
    pagination.addEventLister("click", function(e){
    // AJAX-заппрос на новую страницу фильмов
    // візов функции  renderFilms и передать ей список фильмов и filmsContainer
    })
    */
}
export default createPagination;