const axios = require("axios");

class MovieHttpService {
    static BASE_URL = "https://api.themoviedb.org/3";
    static API_KEY = "923c2cf88ec4338da74c768a045101f0";

    get({ endpoint, options }) {
        const fullURL = this.getFullURL({ endpoint, options })
        axios.get(fullURL);
        // вернуть ответ, в котором в каждом фильме будет своство genres = ["Жанр", "Жанр"]
    }

    getAllGenres() {
        const fullURL = this.getFullURL({ endpoint: "allgenres" });
        axios.get(fullURL);

    }

    getFullURL({ endpoint, options = "" }) {
        const fullURL = `${MovieHttpService.BASE_URL}/${endpoint}?api_key=${MovieHttpService.API_KEY}&${options}`;
        return fullURL;
    }
}

export default MovieHttpService;