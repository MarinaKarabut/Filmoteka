
import toggleModalBtns from './toggleModalBtns.js';
import toggleModalBtnQueue from './toggleModalBtnQueue.js';


export default function addToLibrary(movie) {
  
   const modal = document.querySelector('.js-modal')
    const btnWatched = modal.querySelector('.btn-watched')
  const btnQueue = modal.querySelector('.btn-queue')

    btnWatched.addEventListener('click', (e) =>  toggleModalBtns(e, movie))
    btnQueue.addEventListener('click', (e) => toggleModalBtnQueue(e, movie))
}
