import MovieHttpService from './MovieHttpService.js';
import renderFilms from './renderFilms.js';
import showFilmInfo from './showFilmInfo.js';
const movieHttpService = new MovieHttpService();

function searchFormHandler(e) {
  e.preventDefault();
  
    // переписать свойство endpoint глобального объекта filmsSearchOptions на search
    // вызвать метод объекта movieHttpService
    // вызвать функцию renderFilms и передать в нее результат ответа из movieHttpService
}

export default searchFormHandler;