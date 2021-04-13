import MovieHttpService from './MovieHttpService.js';
import filmsSearchOptions from './filmOptions.js';
import createElement from './createElement.js';
import renderFilms from './renderFilms.js';
import { loader } from './loader.js';

const movieHttpService = new MovieHttpService();

function changeLocation() {
  const listNav = document.getElementById('main-nav');
  listNav.addEventListener('click', async function (e) {

    if (e.target.nodeName !== "A") {
      return;
    }
    if (window.location.pathname === "/home") {
      const galleryList = document.querySelector('.js-gallery-movies');
      const newLoader = createElement(loader);
      galleryList.insertAdjacentElement('afterbegin', newLoader);
      const films = await movieHttpService.get(filmsSearchOptions);
      newLoader.remove();
      renderFilms(films, galleryList);

    }
  });
}

export default changeLocation;