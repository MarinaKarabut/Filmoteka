import addToWatched from './addToWatched.js';
import addToQueue from './addToQueue.js';

function openModal(modalContent) {
    const modalContentRef = document.querySelector('.modal-content');
    const backdrop = document.querySelector('.backdrop');
    const modal = document.querySelector('.js-modal');
    modalContentRef.innerHTML = modalContent;
    //  найти внутри модалки "добавить в просмотренные - addToWatched()" , "добавить в планы - addToQueue()" и повесить
    // слушатели которые добавляет в localStorage id фильмов

    
    backdrop.classList.add('is-open');
    modal.classList.add('is-open');
}

export default openModal;