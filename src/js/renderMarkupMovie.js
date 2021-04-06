import movieCardTpl from '../templates/cardsMovies.hbs'



const BASE_API = '923c2cf88ec4338da74c768a045101f0';
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie';

function createUrl() {
  const finalUrl = `${BASE_URL}/day?api_key=${BASE_API}&page=1`;
  return finalUrl;
}
function firstPage() {
  const test = createUrl()
    const req = fetch(test)
    console.log(req);
return  req
    .then(response => 
        response.json()
    )    
  .then(({ results }) => results.map(({ poster_path, original_title, genre_ids, release_date, vote_average, id }) =>
      ({ poster_path, original_title, genre_ids, release_date, vote_average, id })))
    
}

firstPage().then(movies => renderMarkupMovieCard(movies))

function renderMarkupMovieCard(movies) {
      const gallery = document.querySelector('.js-gallery-movies')
      const markup = movieCardTpl(movies)
      console.log(markup);
      gallery.insertAdjacentHTML('beforeend', markup)
  }
  
  

