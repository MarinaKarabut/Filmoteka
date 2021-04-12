
 export function addToWatched(movie) {

  const data = localStorage.getItem('watched')
    const watched = data === null ? [] : JSON.parse(data)// считываем значение, парсим
    watched.push(movie)//обработать полученные данные
   localStorage.setItem('watched', JSON.stringify(watched));
   
}

export  function removeToWatched(movieId) {
  const data = JSON.parse(localStorage.getItem('watched'));
  const watched = data.filter(movie => movie.id !== movieId)
  localStorage.setItem('watched', JSON.stringify(watched));
  
}





