import defaultImg from '../images/desktop/404.jpeg'
const axios = require("axios");
axios.defaults.baseURL = "https://api.themoviedb.org/3";

class MovieHttpService {
  static BASE_URL = 'https://api.themoviedb.org/3'
  static API_KEY = '923c2cf88ec4338da74c768a045101f0'

  static setGenres(genres) {
    MovieHttpService.genres = genres
  }

  async get({endpoint, options: {page, query}}) {

    try {
      const {data: films} = await axios.get(endpoint, {
        params: {
          page,
          query,
          api_key: MovieHttpService.API_KEY,
          language: 'en-US',
        },
      })
      const {results} = films
      const genres = MovieHttpService.genres

      const movies = results.map(
        ({poster_path, original_title, genre_ids, release_date, vote_average, id, name, original_name, ...rest}) => {
          const genreList = genre_ids
            .map(id => {
              return genres[id]
            })
            .filter(elem => elem)
          //  console.log(rest)
          return {
            poster_path,
            original_title: original_title
              ? original_title
              : original_name
              ? original_name
              : name
              ? name
              : title
              ? title
              : '',
            genreList,
            release_date,
            vote_average,
            id,
          }
        },
      )

       films.results = movies;
       return films;
     } catch (error) {
       return error;
     }
  }

  async getAllGenres() {
    const {
      data: {genres},
    } = await axios.get('genre/movie/list', {
      params: {
        api_key: MovieHttpService.API_KEY,
        language: 'en-US',
      },
    })
    const genresMap = genres.reduce((acc, {id, name}) => {
      acc[id] = name
      return acc
    }, {})
    return genresMap
  }

  getFilmId(id) {
    const filmIdRequest = axios.get(`/movie/${id}`, {
      params: {
        api_key: MovieHttpService.API_KEY,
      },
    })
    return filmIdRequest.then(result => {
      return result
    })
  }
}

export default MovieHttpService

