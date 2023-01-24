import { markupFilmCard } from './filmCardMarkUp';
import { refs } from './refs.js';

// let watchedSavedList = localStorage.getItem('watchedList');
// const watchedParsedList = JSON.parse(watchedSavedList) || []; //возвращает объект, который нужно передать в рендер галереи

refs.btnHeaderWatchedEl.addEventListener('click', onBtnHeaderWatchedClick);
// console.log('r', refs.btnHeaderWatchedEl);

function onBtnHeaderWatchedClick() {
  let watchedSavedList = localStorage.getItem('watchedList');
  const watchedParsedList = JSON.parse(watchedSavedList) || [];
  console.log('m', watchedParsedList);
  if (!watchedParsedList) {
    refs.myLibraryGalleryEl.innerHTML = 'Opps... nothing here';
    return;
  }
  refs.myLibraryGalleryEl.innerHTML = markupFilmCard(watchedParsedList);
  //   markupFilmCard(watchedParsedList);
}
