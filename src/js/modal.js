import Notiflix from 'notiflix';
import { FilmAPI } from './filmApi';
// import { numberConverter } from './prepare-number';
// import * as basicLightbox from 'basiclightbox';
// import 'basiclightbox/dist/basicLightbox.min.css'
import defaultPhoto from '../images/default-photo.jpeg';
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

const filmAPI = new FilmAPI();

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
async function onModalOpenClick(event) {
  event.preventDefault();
  if (event.target.closest('li')) {
    
    modalEl.classList.remove('is-hidden');
    modalCloseEl.addEventListener('click', onModalCloseClick);
    backdropEl.addEventListener('click', onBackdropElClick);
    window.addEventListener('keydown', onEscBtnClick);

    const selectedFilm = event.target.closest('li');
    console.log(selectedFilm);
    const FilmID = selectedFilm.dataset.movieid;


    
    Notiflix.Loading.pulse({
      backgroundColor: 'rgba(0,0,0,0.8)',
      svgColor: '#ff6b08',
    });

    // &&&&&&&&&&&?
    const { data } = await filmAPI.fetchFilmById(FilmID);
    renderFilmCard(data);

    Notiflix.Loading.remove(3023);

  }
}

function prepareObject(array) {
  let newArr = array.map(el => el.name);
  let filmGenres = '';

  if (newArr.length < 4) {
    filmGenres = newArr.join(', ');
  }
  if (newArr.length >= 4) {
    filmGenres = newArr.slice(0, 2).join(', ') + ', Other';
  }
  return filmGenres;
}

function numberConverter(number) {
  let numRound = null;
  let numString = '';

  // Якщо рейтинг від 0 до 10 не включно
  // але цілі числа
  if (number.toString().length === 1) {
    numString = String(number) + '.0';
    return numString;
  }

  // Якщо рейтинг від 0 до 10 не включно
  // але не цілі числа
  if (number / 10 < 1) {
    numRound = (Math.round(number * 10) / 10).toString();
    if (numRound.length === 1) {
      numString = String(numRound) + '.0';
      return numString;
    }