import MovieHttpService from "../MovieHttpService.js";
import renderFilms from "../renderFilms.js";

import { watched, queue } from "../locaFilms.js";
const movieHttpService = new MovieHttpService();

export async function onFilmAction(e) {
     e.preventDefault();
     const { target } = e;

     if (target.classList.contains("button")) {
          const arrId = e.target.classList.contains("btn-watched-outline") ? watched : queue;
          renderFilmsFromLS(arrId)
     }


}

export async function renderFilmsFromLS(arrId) {
    const results = await movieHttpService.getFilmsFromId(arrId); 
          const movieList = document.querySelector('.js-gallery-movies');
          const total_pages = Math.round(arrId.length / 20);
          const allFilms = {
               results,
               total_pages: total_pages
          }
          renderFilms(allFilms, movieList) 
}
