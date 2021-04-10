import MovieHttpService from '../MovieHttpService.js';
import renderFilms from '../renderFilms.js';
import filmsSearchOptions from "../filmOptions.js";
import createElement from '../createElement';
import { errorMessageProps } from "../erorrMessagePtops";

const movieHttpService = new MovieHttpService();

export async function searchFormHandler(e) {
  e.preventDefault();
  const galleryList = document.querySelector('.js-gallery-movies');
  const searchField = this.querySelector("[name=query]");
  const search = searchField.value;

  try {
    filmsSearchOptions.endpoint = 'search/movie';
    filmsSearchOptions.options = {
      page: 1,
      query: search
    };

    const films = await movieHttpService.get(filmsSearchOptions);
    if (!films.results.length) {
      const errMsg = createElement(errorMessageProps);
      searchField.after(errMsg);
      setTimeout(() => {
        errMsg.remove();
      }, 2000);
    } else {
      renderFilms(films, galleryList);
    }
  }
  catch (error) {
    console.log(error);
    return error;
  }
  finally {
    this.reset()
  }
}
