
import toggleModalBtns from './toggleModalBtns.js';
import toggleModalBtnQueue from './toggleModalBtnQueue.js';
import { watched, queue } from "./locaFilms";
import { watchedBtnProps, queueBtnProps } from "./localBtnProps.js";
import { renderFilmsFromLS } from './header/onFilmAction.js';


export default function addToLibrary(id) {

  const modal = document.querySelector('.js-modal')
  const btnWatched = modal.querySelector('.btn-watched')
  const btnQueue = modal.querySelector('.btn-queue');

  if (watched.includes(id)) {
    btnWatched.dataset.type = queueBtnProps.remove.type;
    btnWatched.textContent = watchedBtnProps.remove.text;
    btnWatched.style.backgroundColor = watchedBtnProps.remove.bg;
  }

  if (queue.includes(id)) {
    btnQueue.dataset.type = queueBtnProps.remove.type;
    btnQueue.textContent = queueBtnProps.remove.text;
    btnQueue.style.backgroundColor = queueBtnProps.remove.bg;
  }

  btnWatched.addEventListener('click', (e) => {
    toggleModalBtns(e, id);
    if (window.location.pathname === "/my-library") {
        renderFilmsFromLS(watched)
    }

  })
  btnQueue.addEventListener('click', (e) => {
    toggleModalBtnQueue(e, id);
    if (window.location.pathname === "/my-library") {
      renderFilmsFromLS(queue)
    }
  })
}
