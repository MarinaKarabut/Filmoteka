import './sass/main.scss';

import {watched, queue} from './js/locaFilms.js';
import { renderFilmsFromLS } from './js/header/onFilmAction.js';
import { createHeaderContent } from './js/header/createHeaderContent.js';

import MovieHttpService from './js/MovieHttpService';
import renderFilms from './js/renderFilms';
import showFilmInfo from './js/showFilmInfo';
import { closeModal, onClickOverlay, escapeClose } from './js/closeModal';
import addHeaderMenuEventListener from './js/header/index.js';
import renderModalStudents from './js/createStudentsInfo.js';
import createElement from './js/createElement.js';
import { loader } from './js/loader.js';
import changeLocation, {toggle} from './js/changeCurrentPage.js';
import filmsSearchOptions from "./js/filmOptions.js";
import { headerMenuLinks } from "./js/header/headerMenuLinks.js";

import headerTemplate from './templates/header-main.hbs';
import movieGalleryTemplate from './templates/movie-gallery.hbs';
import footerTemplate from './templates/footer.hbs';
import modalWindowTemplate from './templates/modal-window.hbs';

import footerSrc from './images/sprite.svg';

const refs = {
  header: document.getElementById('header-main'),
  main: document.getElementById('main'),
  footer: document.getElementById('footer'),
  modalWindow: document.getElementById('modal-window'),
}

refs.header.innerHTML = headerTemplate();
refs.main.innerHTML = movieGalleryTemplate();
refs.footer.innerHTML = footerTemplate({ src: footerSrc });
refs.modalWindow.innerHTML = modalWindowTemplate();

const movieHttpService = new MovieHttpService();

window.addEventListener('DOMContentLoaded', async () => {
  addHeaderMenuEventListener();
  const galleryList = refs.main.querySelector('.js-gallery-movies');



  try {
    const newLoader = createElement(loader);
    galleryList.insertAdjacentElement('afterbegin', newLoader);
console.log(window.location.pathname);
    if (window.location.pathname === "/my-library") {
console.log(window.location.pathname);
      createHeaderContent(window.location.pathname);
      const mainLinksContainer = document.getElementById("main-nav");
      const libraryBtns = document.getElementById("profile-films-actions");
      renderFilmsFromLS(watched);
      newLoader.remove();
      mainLinksContainer.querySelectorAll('a').forEach(link => link.classList.toggle("active"));
      libraryBtns.querySelectorAll('button')[0].classList.add('is-active');
      toggle();
    } else {
      const films = await movieHttpService.get(filmsSearchOptions);
      newLoader.remove();
      renderFilms(films, galleryList);
    }
    changeLocation();
    galleryList.addEventListener('click', showFilmInfo);
  } catch (error) {
    galleryList.innerHTML = `<p>It's so pitty. No movies were found :( </p>`;
  }

  const closeModalBtn = refs.modalWindow.querySelector('.modal-btn__icon');
  closeModalBtn.addEventListener('click', closeModal);

  const { selector, actionType, listener } = headerMenuLinks[0];
  const headerHomeElement = document.querySelector(selector);
  headerHomeElement.addEventListener(actionType, listener);

  const overlay = document.querySelector('.backdrop');
  overlay.addEventListener('click', onClickOverlay);

  window.addEventListener('keydown', escapeClose);

  const modalStudentsLink = document.getElementById('students-modal');
  modalStudentsLink.addEventListener('click', renderModalStudents);
});