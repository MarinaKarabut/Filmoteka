import defaultImg from '../images/desktop/404.jpeg';
const axios = require("axios");
axios.defaults.baseURL = "https://api.themoviedb.org/3";

class MovieHttpService {
  static BASE_URL = 'https://api.themoviedb.org/3'
  static API_KEY = '923c2cf88ec4338da74c768a045101f0'

  async get({endpoint, options: {page, query}}) {

    try {
      const requestParams = this.createParams({ page, query });
      const {data: films} = await axios.get(endpoint, requestParams);
      const { results } = films;
      const genres = await this.getAllGenres();
      const movies = results.map(({ poster_path, original_title, genre_ids, release_date, vote_average, id, name, original_name, first_air_date, ...rest }) => {
        const newPosterPath = poster_path ? `https://image.tmdb.org/t/p/w300/${poster_path}` : defaultImg
        const realeseData = release_date || first_air_date;
        const [newRelease_date] = realeseData.split("-");
        const genreList = genre_ids.map(id => {
          return genres[id]
        })
          .filter(elem => elem).slice(0, 3).join(", ");
        return {
          poster_path: newPosterPath,
          original_title: original_title || original_name || name || title || `undefined tittle`
          , genreList, realeseData: newRelease_date, vote_average, id,
        };
      });
      films.results = movies;
       return films;
     } catch (error) {
       return error;
     }
  }
  
  async getAllGenres() {
    try {
      const requestParams = this.createParams();
      const { data: { genres } } = await axios.get("genre/movie/list", requestParams);
      const genresMap = genres.reduce((acc, { id, name }) => {
        acc[id] = name;
        return acc;
      }, {});
      return genresMap;
    }
    catch (error) {
      console.log(error);
      return error;
    }
  }

  async getFilmById(id) {
    try {
      const requestParams = this.createParams();
      const result = await axios.get(`/movie/${id}`, requestParams);
      return result;
    }
    catch (error) {
      console.log(error);
      return error;
    }
  }

  createParams(params) {
    return {
      params: {
        ...params,
        api_key: MovieHttpService.API_KEY,
        language: "en-US",  
      }
    }
  }
}
  export default MovieHttpService;

