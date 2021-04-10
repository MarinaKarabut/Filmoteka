function addToQueue() {
    const addedFilmsId = [];
    const imgCard = document.querySelector('.film-info__img');
    const { filmId } = imgCard.dataset;
    addedFilmsId.push(filmId);
    const filmIdStr = JSON.stringify(addedFilmsId);
    localStorage.setItem('id', filmIdStr);
}

export default addToQueue;