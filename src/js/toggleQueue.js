
import { queue } from "./locaFilms.js";

export function toggleQueue(id) {
  const index = queue.indexOf(id);
  if (index === -1) {
    queue.push(id);
  }
  else {
    queue.splice(index, 1);
  }
  localStorage.setItem('queue', JSON.stringify(queue));
}



