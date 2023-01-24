import { markupFilmCard } from './filmCardMarkUp';
import { refs } from './refs.js';

refs.btnHeaderQueueEl.addEventListener('click', onBtnQueueClick);


function onBtnQueueClick() {
  rerenderQueueLib();
}

export function rerenderQueueLib() {
  let queueSavedList = localStorage.getItem('queueList');
  const queueParsedList = JSON.parse(queueSavedList) || [];

  if (queueParsedList.length === 0) {
    refs.myLibraryGalleryEl.innerHTML = 'Opps... nothing here';
    return;
  }
  refs.myLibraryGalleryEl.innerHTML = markupFilmCard(queueParsedList);
}
