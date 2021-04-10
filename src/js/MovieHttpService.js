import defaultImg from '../images/desktop/404.jpeg'
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
      const movies = results.map(({ poster_path, original_title, genre_ids, release_date, vote_average, id, name, original_name, first_air_date, ...rest }) => {
        const newPosterPath = poster_path ? `https://image.tmdb.org/t/p/w300/${poster_path}` : defaultImg
        const realeseData = release_date || first_air_date;
        const [newRelease_date] = realeseData.split("-");
         const genreList = genre_ids.map(id => {
           return genres[id]
         })
           .filter(elem => elem).slice(0,3)
        //  console.log(rest)
         return {
           poster_path:newPosterPath,
           original_title:original_title||original_name||name||title||`undefined tittle`
           , genreList, realeseData: newRelease_date, vote_average, id,
         }
         })
       return movies;
     } catch (error) {
       return error;
     }
        // вернуть ответ, в котором в каждом фильме будет своство genres = ["Жанр", "Жанр"]
    }
    async getAllGenres() {
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
}
export default MovieHttpService;