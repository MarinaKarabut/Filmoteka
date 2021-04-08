import refs from './refs.js';

refs.myLibraryPage.addEventListener('click', onToggleBtnHeader);
function onToggleBtnHeader(e) {

  
    
    refs.searchField.classList.add('is-hidden');
    refs.iconSearch.classList.add('is-hidden');

   refs.btnWatchedHeader.classList.remove('is-hidden');
    refs.btnQueueHeader.classList.remove('is-hidden');

    refs.headerSection.classList.add('is-hidden-backgr');

    refs.myLibraryPage.classList.add('currant')
    refs.homePage.classList.remove('currant')

   
}

refs.homePage.addEventListener('click', onToggleInput);

function onToggleInput(e) {

   

     refs.btnWatchedHeader.classList.add('is-hidden');
    refs.btnQueueHeader.classList.add('is-hidden');


   refs.searchField.classList.remove('is-hidden');
    refs.iconSearch.classList.remove('is-hidden');
   
    refs.headerSection.classList.remove('is-hidden-backgr');

    refs.myLibraryPage.classList.remove('currant')
    refs.homePage.classList.add('currant')
}


// function onSaveCurrantPage() {
    

// }


// console.log(window.location);


