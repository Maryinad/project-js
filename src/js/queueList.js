import { markupFilmCard } from './filmCardMarkUp';
import { refs } from './refs.js';

refs.btnHeaderQueueEl.addEventListener('click', onBtnQueueClick);
console.log(refs.btnHeaderQueueEl);

function onBtnQueueClick() {
  let queueSavedList = localStorage.getItem('queueList');
  const queueParsedList = JSON.parse(queueSavedList) || [];
  console.log('q', queueParsedList);

  if (queueParsedList.length === 0) {
    refs.myLibraryGalleryEl.innerHTML = 'Opps... nothing here';
    return;
  }
  refs.myLibraryGalleryEl.innerHTML = markupFilmCard(queueParsedList);
}
