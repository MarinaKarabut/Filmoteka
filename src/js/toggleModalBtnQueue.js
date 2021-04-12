import { addToQueue, removeToQueue } from './addToQueue.js';

function changeBtnAdd(nodeBtn) {
    console.log(nodeBtn);
    nodeBtn.textContent = 'Remove to queue'
    nodeBtn.dataset.type = 'remove'
    nodeBtn.style.backgroundColor = $secondary-accent-color
}

function changeBtnRemove(nodeBtn) {
    nodeBtn.textContent = 'Add to queue'
    nodeBtn.dataset.type = 'add'
    nodeBtn.style.backgroundColor = ''
}
 
export default function toggleModalBtnQueue(e, movie) {
    const { type } = e.target.dataset;
    const { id } = movie;

    switch (type) {
        case 'remove':
            removeToQueue(id);
            changeBtnRemove(e.target);
            break;
        case 'add':
            addToQueue(movie);
            changeBtnAdd(e.target);
            break;
   }
}
