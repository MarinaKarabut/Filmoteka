import MovieHttpService from './MovieHttpService.js';
import renderFilms from './renderFilms.js';
import showFilmInfo from './showFilmInfo.js';

const movieHttpService = new MovieHttpService();

function searchFormHandler(e) {
    e.preventDefault();

    const getFilmsSearchOptions = function(search){
        return {
            endpoint: 'search/movie',
            options: {
                page: 1,
                query: search
            }
        }
};
    

    const searchField = document.querySelector("[name=query]");
    const search = searchField.value
    const films = movieHttpService.get(getFilmsSearchOptions(search))
    films
      .then(films => {
      
          formSearchFilm.reset()
          if (!films.length) {
            const errorMsg = document.createElement("p");
            errorMsg.classList.add("error-message");
            errorMsg.textContent = 'Search result not successful. Enter the correct movie name'
            formSearchFilm.after(errorMsg)
            setTimeout(() => {
              errorMsg.remove()
            }, 2000);
          } else {
            renderFilms(films, galleryList)
          }
        })

    // переписать свойство endpoint глобального объекта filmsSearchOptions на search
    // вызвать метод объекта movieHttpService
    // вызвать функцию renderFilms и передать в нее результат ответа из movieHttpService
}

export default searchFormHandler;