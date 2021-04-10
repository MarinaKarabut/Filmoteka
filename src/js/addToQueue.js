
  // 1. Считать значение data-film-id из this.dataset
    // 2. считать значение queueFilmList из localstorage
    // 3. превратить queueFilmList из строки в массив
    // 4. если такого id нет в массиве - добавить его в него через push
    // 5. превратить queueFilmList из массива в строку
    // 6. сохранить строку queueFilmList в localstorage




    // const addedFilmsId = [];
    // const movieCard = document.querySelector('.film-info__img');
    // const { filmId } = movieCard.dataset;
    // addedFilmsId.push(filmId);
    // const filmIdStr = JSON.stringify(addedFilmsId);
    // localStorage.setItem('id', filmIdStr);

const btnQueue = document.querySelector('[data-film-id="1"]')

function addToQueue(e) {
    e.preventDefault();
    queueFilmList = [];
  console.log(e);
    const { filmId } = e.dataset;

}



// const btnQueue = document.querySelector('.btn-queue');

// btnQueue.addEventListener('click',addToQueue);

export default addToQueue;
