import './sass/main.scss';

import MovieHttpService from './js/MovieHttpService'
import renderFilms from './js/renderFilms'
import showFilmInfo from './js/showFilmInfo'
import closeModal from './js/closeModal'
import addHeaderMenuEventListener from './js/header'
import filmsSearchOptions from "./js/filmOptions.js";

import headerTemplate from './templates/header-main.hbs';
import movieGalleryTemplate from './templates/movie-gallery.hbs';
import footerTemplate from './templates/footer.hbs';
import modalWindowTemplate from './templates/modal-window.hbs';

import footerSrc from './images/sprite.svg'

const refs = {
  header: document.getElementById('header-main'),
  main: document.getElementById('main'),
  footer: document.getElementById('footer'),
  modalWindow: document.getElementById('modal-window'),
};

refs.header.innerHTML = headerTemplate();
refs.main.innerHTML = movieGalleryTemplate();
refs.footer.innerHTML = footerTemplate({src: footerSrc});
refs.modalWindow.innerHTML = modalWindowTemplate();

const movieHttpService = new MovieHttpService();

window.addEventListener('DOMContentLoaded', async () => {

  addHeaderMenuEventListener();
  const galleryList = main.querySelector('.js-gallery-movies');

  try {
    //loader добавляю
    const films = await movieHttpService.get(filmsSearchOptions);
    renderFilms(films, galleryList);
    //loader удаляю

    galleryList.addEventListener('click', showFilmInfo);
  }
  catch (error) {
    galleryList.innerHTML = `<p>It's so pitty. No movies were found :( </p>`;
  }

  const closeModalBtn = refs.modalWindow.querySelector('.modal-btn__icon');
  closeModalBtn.addEventListener('click', closeModal);

})

