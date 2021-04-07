import refs from './refs';
import renderMarkupMovieCard from './renderMarkupMovie.js';
// Ожидаемая API от Дани (начало)//
function searchFilm(name) {
  const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=923c2cf88ec4338da74c768a045101f0&language=en-US&query='
  const finalURL = `${SEARCH_URL}${name}&page=1`;
  const filmFetch = fetch(finalURL);
  return filmFetch
    .then(response => response.json())
    .then(({ results }) => results);
 }
// Ожидаемая API от Дани (конец)//
refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
    const filmsValue = e.currentTarget.elements.query.value;
  const filmsResponse = searchFilm(filmsValue);
    filmsResponse
        .then(movies => {
          if (!movies.length) {
            const errorMsg = document.createElement("p");
            errorMsg.classList.add("error-message");
            errorMsg.textContent = 'Search result not successful. Enter the correct movie name and'
            refs.searchForm.after(errorMsg);
            setTimeout(() => {
              errorMsg.remove();
            }, 1500);
          } else {
            clearMarkupMovieCard();
            renderMarkupMovieCard(movies);
          }


        })
}
 function clearMarkupMovieCard() {
   refs.gallery.innerHTML = '';
}