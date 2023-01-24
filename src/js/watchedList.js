import { markupFilmCard } from './filmCardMarkUp';
import { refs } from './refs.js';

refs.btnHeaderWatchedEl.addEventListener('click', onBtnHeaderWatchedClick);


function onBtnHeaderWatchedClick() {
  rerenderWatchedLib();
}

export function rerenderWatchedLib() {
  let watchedSavedList = localStorage.getItem('watchedList');
  const watchedParsedList = JSON.parse(watchedSavedList) || [];

  if (watchedParsedList.length === 0) {
    refs.myLibraryGalleryEl.textContent = 'Opps... nothing here';
    console.log('ul', refs.myLibraryGalleryEl);
    return;
  }
  refs.myLibraryGalleryEl.innerHTML = markupFilmCard(watchedParsedList);
}
