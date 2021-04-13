
import { watched } from "./locaFilms.js";

export function toggleWatch(id) {
  const index = watched.indexOf(id);
  if (index === -1) {
    watched.push(id);
  }
  else {
    watched.splice(index, 1);
  }
  localStorage.setItem('watched', JSON.stringify(watched));
  console.log(watched);
}





