
// получение кнопок их модалки
const watchedModalBtnEl = document.querySelector('[data-modal-add]');
const queueModalBtnEl = document.querySelector('[data-modal-queue]');

let watchedSavedList = localStorage.getItem('watchedList');
let queueSavedList = localStorage.getItem('queueList');

const watchedParsedList = JSON.parse(watchedSavedList) || [];
const queueParsedList = JSON.parse(queueSavedList) || [];

function onWatchedModalBtnClick(evt) {
    console.log('слушаю кнопку watched');
    const dataFilmInfo = JSON.parse(localStorage.getItem('dataFilm'));
    console.log('dataFilmInfo', dataFilmInfo);
    
    const filmID = dataFilmInfo.id;
    console.log('filmID', filmID);
    
    const isWatched = watchedParsedList.find(({id}) => id === filmID); //вернет true/false
    // проверка добавлять в массив или удалять из массива
    if (isWatched) {
        const indexOfFilm = watchedParsedList.findIndex(({id}) => id === filmID);
        watchedParsedList.splice(indexOfFilm, 1);
        watchedModalBtnEl.textContent = 'Add to watched';
        //удалить из массива
    } else {
        watchedModalBtnEl.textContent = 'Remove from watched';
        watchedParsedList.push(dataFilmInfo);
    }
    localStorage.setItem('watchedList', JSON.stringify(watchedParsedList));
}

function onQueueModalBtnClick(evt) {
    console.log('слушаю кнопку queue');
    const dataFilmInfo = JSON.parse(localStorage.getItem('dataFilm'));
    const filmID = dataFilmInfo.id;
    
    const isQueue = queueParsedList.find(({id}) => id === filmID); //вернет true/false
    
    if (isQueue) {
        const indexOfFilm = queueParsedList.findIndex(({ id }) => id === filmID);
        queueModalBtnEl.textContent = 'Add to queue';
        //удалить из массива
    } else {
        queueModalBtnEl.textContent = 'Remove from queue';
        queueParsedList.push(dataFilmInfo);
    }
    localStorage.setItem('queueList', JSON.stringify(queueParsedList));
}

// слушатель на кнопки
watchedModalBtnEl.addEventListener('click', onWatchedModalBtnClick);
queueModalBtnEl.addEventListener('click', onQueueModalBtnClick);