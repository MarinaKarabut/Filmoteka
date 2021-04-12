
import toggleModalBtns from './toggleModalBtns.js';
import toggleModalBtnQueue from './toggleModalBtnQueue.js';
import { watched, queue } from "./locaFilms";
import { watchedBtnProps, queueBtnProps } from "./localBtnProps.js";

export default function addToLibrary(id) {
  
  const modal = document.querySelector('.js-modal')
  const btnWatched = modal.querySelector('.btn-watched')
  const btnQueue = modal.querySelector('.btn-queue');

  if (watched.includes(id)) {
    console.log(watchedBtnProps)
    btnWatched.textContent = watchedBtnProps.remove.text;
    btnWatched.style.backgroundColor = watchedBtnProps.remove.bg;
  }

  if (queue.includes(id)) {
    btnQueue.textContent = queueBtnProps.remove.text;
    btnQueue.style.backgroundColor = queueBtnProps.remove.bg;
  }

  btnWatched.addEventListener('click', (e) =>  toggleModalBtns(e, id))
  btnQueue.addEventListener('click', (e) => toggleModalBtnQueue(e, id))
}
