let watchedSavedList = localStorage.getItem('watchedList');
const watchedParsedList = JSON.parse(watchedSavedList) || []; //возвращает объект, который нужно передать в рендер галереи

const myLibraryWatchedBtnEl = document.querySelector('.js-header__btn-watched');
console.log(myLibraryWatchedBtnEl);
