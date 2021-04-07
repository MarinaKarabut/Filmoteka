import movieCardTpl from '../templates/cardsMovies.hbs';
import refs from './refs.js';
const BASE_API = '923c2cf88ec4338da74c768a045101f0';
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie';
// Ожидаемая API от Дани (начало)//
function createUrl() {
  const finalUrl = `${BASE_URL}/day?api_key=${BASE_API}&page=1`;
  return finalUrl;
}
function firstPage() {
    const test = createUrl();
    const req = fetch(test);
    return req
        .then(response =>
            response.json()
        )
        .then(({ results }) => results.map(({ poster_path, original_title, genre_ids, release_date, vote_average, id }) =>
            ({ poster_path, original_title, genre_ids, release_date, vote_average, id })));
}
// Ожидаемая API от Дани (конец)//
firstPage().then(movies => {
    renderMarkupMovieCard(movies);
});
export default function renderMarkupMovieCard(movies) {
    const renderMovies = movies.map(({ release_date, ...rest }) => {
        const [newRelease_date] = release_date.split("-");
        return {
            ...rest,
            release_date: newRelease_date
        };
    });
    const markup = movieCardTpl(renderMovies);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
  }


