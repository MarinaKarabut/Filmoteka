import MovieHttpService from './MovieHttpService.js';
import filmsSearchOptions from './filmOptions.js';
import createElement from './createElement.js';
import renderFilms from './renderFilms.js';
import { loader } from './loader.js';
import { renderFilmsFromLS} from './header/onFilmAction.js'

const movieHttpService = new MovieHttpService();

function changeLocation() {
  const listNav = document.getElementById('main-nav');
  listNav.addEventListener('click', async function (e) {
    const galleryList = document.querySelector('.js-gallery-movies');
    if (e.target.nodeName !== "A") {
      return;
    }
    if (window.location.pathname === "/home") {
      const newLoader = createElement(loader);
      galleryList.insertAdjacentElement('afterbegin', newLoader);
      const films = await movieHttpService.get(filmsSearchOptions);
      newLoader.remove();
      renderFilms(films, galleryList);

    }
    if (window.location.pathname === "/my-library") {
      const btnWatched = document.getElementById('js-btn-watched')
      btnWatched.classList.add('is-active')
      const localWatched = localStorage.getItem("watched")
      const watched = localWatched ? JSON.parse(localWatched) : []
      renderFilmsFromLS(watched)
      const btnContainer = document.getElementById('#profile-films-actions')
      toggle()
     }

  });
}

function toggle() {
const btnContainer = document.getElementById('profile-films-actions')
  console.log(btnContainer);
  btnContainer.addEventListener('click', function (e) {
    e.target
    if (e.target.nodeName !== 'BUTTON') {
      return
    }
    btnContainer.querySelector('.is-active').classList.toggle('is-active')
    e.target.classList.toggle('is-active')
  })
 }

 export default changeLocation;