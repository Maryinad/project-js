import { markupFilmCard } from './filmCardMarkUp';
// import { markupFilmCardHome } from './filmCardMarkUpHome.js';
// import { markupFilmCardLibrary } from './filmCardMarkUpLibrary';
import { refs } from './refs.js';

let watchedSavedList = localStorage.getItem('watchedList');
const watchedParsedList = JSON.parse(watchedSavedList) || [];
refs.myLibraryGalleryEl.innerHTML = markupFilmCard(watchedParsedList);

refs.btnHeaderWatchedEl.addEventListener('click', onBtnHeaderWatchedClick);
// console.log('r', refs.btnHeaderWatchedEl);

function onBtnHeaderWatchedClick() {
  rerenderWatchedLib();
  //   markupFilmCard(watchedParsedList);
}

export function rerenderWatchedLib() {
  let watchedSavedList = localStorage.getItem('watchedList');
  const watchedParsedList = JSON.parse(watchedSavedList) || [];
  console.log('m', watchedParsedList.length);
  if (watchedParsedList.length === 0) {
    refs.myLibraryGalleryEl.textContent = 'Opps... nothing here';
    console.log('ul', refs.myLibraryGalleryEl);
    return;
  }

  // refs.myLibraryGalleryEl.innerHTML = markupFilmCardHome(watchedParsedList);
  refs.myLibraryGalleryEl.innerHTML = markupFilmCard(watchedParsedList);
}
