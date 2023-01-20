
//   import { MovieDB } from './api-service';
// import { numberConverter } from './prepare-number';
// import * as basicLightbox from 'basiclightbox';
// import 'basiclightbox/dist/basicLightbox.min.css'
// import defaultPhoto from '../images/default-photo.jpeg';
const modalOpenEl = document.querySelector('[data-modal-open]');
const modalCloseEl = document.querySelector('[data-modal-close]');
const modalEl = document.querySelector('[data-modal]');
const backdropEl = document.querySelector('.backdrop__modal');
const modalContainerEl = document.querySelector('.modal__container');
const body = document.querySelector('body');

const addToWatched = 'Add to Watched';
const removeFromWatched = 'Remove from Watched';
const addToQueue = 'Add to queue';
const removeFromQueue = 'Remove from Queue';
const WATCHED_STORAGE_KEY = 'watched films';
const QUEUE_STORAGE_KEY = 'films in queue';

// // слухач на батьківський UL карток

modalOpenEl.addEventListener('click', onModalOpenClick);

// const movieDB = new MovieDB();

// ======================================================
// Функції-обробники закриття/відериття модального вікна
// ======================================================
function onBackdropElClick(event) {
  if (event.target === backdropEl) {
    // body.classList.remove('noScroll');
    onModalCloseClick();
  }
}

function onEscBtnClick(event) {
  if (event.code === 'Escape') {
    onModalCloseClick();
    // body.classList.remove('noScroll');
  }
}
function onModalCloseClick() {
  modalEl.classList.add('is-hidden');
  // body.classList.remove('noScroll');
  modalCloseEl.removeEventListener('click', onModalCloseClick);
  backdropEl.removeEventListener('click', onBackdropElClick);
  window.removeEventListener('keydown', onEscBtnClick);
}
// Головна функція-обробник появи модального вікна
function onModalOpenClick(event) {
  event.preventDefault();
  if (event.target.closest('li')) {
    modalEl.classList.remove('is-hidden');
    modalCloseEl.addEventListener('click', onModalCloseClick);
    backdropEl.addEventListener('click', onBackdropElClick);
    window.addEventListener('keydown', onEscBtnClick);

    const selectedMovie = event.target.closest('li');
    console.log(selectedMovie);
    const FilmID = selectedMovie.dataset.movieid;
  }
}
