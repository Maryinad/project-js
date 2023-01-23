
// получение кнопок их модалки
const watcheModalBtnEl = document.querySelector('[data-modal-add]');
const queueModalBtnEl = document.querySelector('[data-modal-queue]');

const watchedArray = [];
const queueArray = [];

function onWatchedModalBtnClick(evt) {
    //нужен индекс фильма из модалки
    const isWatched = watchedArray.find(() => { }); //вернет true/false
    // проверка добавлять в массив или удалять из массива
    if (isWatched) {
        //удалить из массива
    } else {
        // добавить в массив
    }
}

function onQueueModalBtnClick(evt) {
    //нужен индекс фильма из модалки
    const isQueue = queueArray.find(() => { }); //вернет true/false
    // проверка добавлять в массив или удалять из массива
    if (isQueue) {
        //удалить из массива
    } else {
        // добавить в массив
    }
}

localStorage.setItem('watchedList', JSON.stringify(watchedArray));
localStorage.setItem('queueList', JSON.stringify(queueArray));

let watchedSavedList = localStorage.getItem('watchedList');
let queueSavedList = localStorage.getItem('queueList');

export const watchedParsedList = JSON.parse(watchedSavedList);
export const queueParsedList = JSON.parse(queueSavedList);

// слушатель на кнопки
watcheModalBtnEl.addEventListener('click', onWatchedModalBtnClick);
queueModalBtnEl.addEventListener('click', onQueueModalBtnClick)