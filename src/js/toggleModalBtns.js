import { addToWatched, removeToWatched } from './addToWatched.js';

function changeBtnAdd(nodeBtn) {
    console.log(nodeBtn);
    nodeBtn.textContent = 'Remove to watched'
    nodeBtn.dataset.type = 'remove'
    nodeBtn.style.backgroundColor = $secondary-accent-color
}

function changeBtnRemove(nodeBtn) {
    nodeBtn.textContent = 'Add to watched'
    nodeBtn.dataset.type = 'add'
    nodeBtn.style.backgroundColor = ''
}
 
export default function toggleModalBtns(e, movie) {
    const { type } = e.target.dataset;
    const { id } = movie;

    switch (type) {
        case 'remove':
            removeToWatched(id);
            changeBtnRemove(e.target);
            break;
        case 'add':
            addToWatched(movie);
            changeBtnAdd(e.target);
            break;
   }
}
