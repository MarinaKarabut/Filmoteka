import MovieHttpService from './MovieHttpService.js';
import renderFilms from './renderFilms.js';
import showFilmInfo from './showFilmInfo.js';

const movieHttpService = new MovieHttpService();

async function searchFormHandler(e) {
  e.preventDefault();
  const galleryList = document.querySelector('.js-gallery-movies');
  const searchField = this.querySelector("[name=query]");
  const search = searchField.value;
  const filmsSearchOptions = {
    endpoint: 'search/movie',
    options: {
      page: 1,
      query: search
    }
  };
  try {
    const films = await movieHttpService.get(filmsSearchOptions);
    if (!films.length) {
      const errorMsg = document.createElement("p");
      errorMsg.classList.add("error-message");
      errorMsg.textContent = 'Search result not successful. Enter the correct movie name';
      searchField.after(errorMsg);
      setTimeout(() => {
        errorMsg.remove();
      }, 2000);
    } else {
      renderFilms(films, galleryList);
    }
  }
  catch (error) {
    console.log(error);
  }
  finally {
    searchField.value = '';
  }
    // переписать свойство endpoint глобального объекта filmsSearchOptions на search
    // вызвать метод объекта movieHttpService
    // вызвать функцию renderFilms и передать в нее результат ответа из movieHttpService
}


export default searchFormHandler;