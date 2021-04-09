const axios = require("axios");
axios.defaults.baseURL = "https://api.themoviedb.org/3";
class MovieHttpService {
  static BASE_URL = "https://api.themoviedb.org/3";
  static API_KEY = "923c2cf88ec4338da74c768a045101f0";
  static setGenres(genres) {
    MovieHttpService.genres = genres;
  }
  constructor() {
  }
  async get({ endpoint, options: {page, query}}) {
    // const fullURL = this.getFullURL({ })
     try {
       const { data: films } = await axios.get(endpoint, {
         params: {
           page,
           query,
           api_key: MovieHttpService.API_KEY,
           language: "en-US",
         }
       });
       const { results } = films;
       const genres = MovieHttpService.genres;
       const movies = results.map(({ poster_path, original_title, genre_ids, release_date, vote_average, id, name, original_name,...rest}) => {
         const genreList = genre_ids.map(id => {
           return genres[id]
         })
           .filter(elem => elem)
        //  console.log(rest)
         return {
           poster_path,
           original_title:original_title?original_title:original_name?original_name:name?name:title?title:''
           , genreList, release_date, vote_average, id,
         }
         })
      //  const fullResults = results.map(film => {
      //    if (film.original_name) {
      //      film.original_title = film.original_name
      //    }
      //    const genre_list = film.genre_ids.map(id => genres[id])
      //      .filter(el => el);
      //    return { original_title, genre_list }
      //  });
      //  films.results = fullResults;
      //  return films;
      //  const requireItems = results.map(({ poster_path, original_title, genre_ids, release_date, vote_average, id }) =>
      //    ({ poster_path, original_title, genre_ids, release_date, vote_average, id }))
      //  return requireItems;
       return movies;
     } catch (error) {
       return error;
     }
        // вернуть ответ, в котором в каждом фильме будет своство genres = ["Жанр", "Жанр"]
    }
    async getAllGenres() {
      //  console.log("object", axios.defaults.baseURL);
      // const fullURL = this.getFullURL({ endpoint: "allgenres" });
      const { data: {genres} } = await axios.get("genre/movie/list", {
        params: {
           api_key: MovieHttpService.API_KEY,
           language: "en-US",
         }
      });
      const genresMap = genres.reduce((acc, {id, name}) => {
        acc[id] = name
        return acc
      }, {})
      return genresMap;
    }
  //   getFullURL({ endpoint, options = "" }) {
  //       const fullURL = `${MovieHttpService.BASE_URL}/${endpoint}?api_key=${MovieHttpService.API_KEY}&${options}`;
  //       return fullURL;
  // }
//   createOptions(pagenumber = 1,search = '') {
// // опшенс для серч,опшенс для ключевого слова,опшенс для поиску по айди
// // возвращает строку
//     const stringForUrl = `language=en-US&query=${search}&page=${pagenumber}`
//     return stringForUrl;
//   }
}
export default MovieHttpService;