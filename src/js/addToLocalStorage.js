
refs.btnAddToWatched.addEventListener('click', onClickBtn)
refs.btnAddToQueue.addEventListener('click', addToQueue)

function addToWatched(movie) {
    const data = localStorage.getItem('watched')
    const watched = data === null ? [] : JSON.parse(data)// считываем значение, парсим
    watched.push(movie)//обработать полученные данные
    localStorage.setItem('watched',  JSON.stringify(watched));
}


function addToQueue(movie) {
    const data = localStorage.getItem('queue')
    const queue = data === null ? [] : JSON.parse(queue)// считываем значение, парсим
    queue.push(movie)//обработать полученные данные
    localStorage.setItem('queue', JSON.stringify(queue));
 }

function changeBtnAdd() {
    refs.btnAddToWatched.textContent = 'Remove to watched'
    refs.btnAddToWatched.dataset.type = 'remove'
    refs.btnAddToWatched.style.backgroundColor = 'orange'
}

function changeBtnRemove() {
    refs.btnAddToWatched.textContent = 'Add to watched'
    refs.btnAddToWatched.dataset.type = 'add'
    refs.btnAddToWatched.style.backgroundColor = ''
 }

function onClickBtn() {
    if (dataset.type = 'add') {
        addToWatched();
        changeBtnAdd()
    }
    if (dataset.type = 'remove') {
        addToQueue()
        changeBtnRemove()
    }

}

const resetStorage = function () {
    localStorage.removeItem('');
    localStorage.removeItem('');
};

addToWatched({ arr: 32, id : 38})

