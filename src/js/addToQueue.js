
    export function addToQueue(movie) {

    const data = localStorage.getItem('queue')
    const queue = data === null ? [] : JSON.parse(data)// считываем значение, парсим
    queue.push(movie)//обработать полученные данные
    localStorage.setItem('queue', JSON.stringify(queue));

}

export  function removeToQueue(movieId) {
  const data = JSON.parse(localStorage.getItem('queue'));
  const queue = data.filter(movie => movie.id !== movieId)
  localStorage.setItem('queue', JSON.stringify(queue));
  
}





