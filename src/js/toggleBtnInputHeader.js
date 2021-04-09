import refs from './refs.js';

refs.myLibraryPage.addEventListener('click', onToggleBtnHeader);
function onToggleBtnHeader(e) {

  
    
    refs.searchField.classList.add('is-hidden');
    refs.iconSearch.classList.add('is-hidden');

   refs.btnWatchedHeader.classList.remove('is-hidden');
    refs.btnQueueHeader.classList.remove('is-hidden');

    refs.headerSection.classList.add('is-hidden-backgr');

    refs.myLibraryPage.classList.add('active')
    refs.homePage.classList.remove('active')

   
}

refs.homePage.addEventListener('click', onToggleInput);

function onToggleInput(e) {

   

     refs.btnWatchedHeader.classList.add('is-hidden');
    refs.btnQueueHeader.classList.add('is-hidden');


   refs.searchField.classList.remove('is-hidden');
    refs.iconSearch.classList.remove('is-hidden');
   
    refs.headerSection.classList.remove('is-hidden-backgr');

    refs.myLibraryPage.classList.remove('active')
    refs.homePage.classList.add('active')
}

console.log(window.history);

// const pathes = {
    //     pathH: window.location.origin,
    //     pathL: window.location.origin + '/library',
    // }
    // refs.headerMain.innerHTML = headerMain(pathes);

    /*
    btnWatchedHeader: document.getElementById('js-btn-watched'),
    btnQueueHeader: document.getElementById('js-btn-queue'),

    homePage: document.querySelector('.active'),
    myLibraryPage: document.querySelector('.item-library'),
    headerSection: document.querySelector('.section-header'),

    searchField: document.querySelector('.search-field'),
    iconSearch: document.querySelector('.icon-search')
    */
