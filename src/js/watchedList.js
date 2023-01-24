import { markupFilmCard } from './filmCardMarkUp';
import { refs } from './refs.js';
import popcornImgPath from '../images/popcorn.svg-min.png';

if (window.location.pathname === '/library.html') {
  refs.btnHeaderWatchedEl.addEventListener('click', onBtnHeaderWatchedClick);
}

function onBtnHeaderWatchedClick() {
  rerenderWatchedLib();
}

export function rerenderWatchedLib() {
  let watchedSavedList = localStorage.getItem('watchedList');
  const watchedParsedList = JSON.parse(watchedSavedList) || [];

  if (watchedParsedList.length === 0) {
    // refs.myLibraryGalleryEl.innerHTML  = 'Opps... nothing here';
    refs.myLibraryGalleryEl.innerHTML = renderDefaultWatchedNotification();
    console.log('ul', refs.myLibraryGalleryEl);
    return;
  }
  refs.myLibraryGalleryEl.innerHTML = markupFilmCard(watchedParsedList);
}

function renderDefaultWatchedNotification() {
  return `<img src="${popcornImgPath}" alt="popcorn picture" width="150">
  <p class="notification-library">You haven't added any films to watched...</p>`;
}