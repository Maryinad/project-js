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
    numString = String(numRound).padEnd(3, '0');
    return numString;
  }

  if (number === 10) {
    return '10.0';
  }

  if (number > 10) {
    numRound = (Math.round(number * 10) / 10).toString();
    return numRound;
  }
}

function renderFilmCard(data) {
  let posterPath = '';
  const defaultImg = defaultPhoto;

  if (data.poster_path !== null) {
    posterPath = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
  } else {
    posterPath = defaultImg;
  }
  const {
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    overview,
    id,
    genres,
  } = data;

  let filmGenres = prepareObject(genres);
  let filmVotingAverage = numberConverter(vote_average);
  let cuttedPopularity = numberConverter(popularity);

  const markup = `
  <div is-hidden data-filmid="${id}"></div>
      <img class="modal__photo" alt="${title}" src="${posterPath}" />

      <div>
    <h2 class="modal__title">${title}</h2>

    <div class="modal__info-block">
        <div class="modal__key">
            <ul class="modal__list-key">
            <li class="modal__item-key"><p class="modal__key">Vote / Votes</p>
            </li>
            <li class="modal__item-key"></li><p class="modal__key">Popularity</p>
            </li>
            <li class="modal__item-key"></li><p class="modal__key">Original Title</p>
            </li>
            <li class="modal__item-key"></li><p class="modal__key">Genre</p>
            </li>
        </ul>
        </div>

        <div class="modal__value">
            <ul class="modal__value-list">
                <li class="modal__value-item">
                    <p class="modal__value-vote"><span class ="modal__value-rat">${filmVotingAverage}</span> <span class="modal__value-slash"> / </span> ${vote_count} </p>
                </li>
                <li class="modal__value-item"></li><p class="modal__value-popular">${cuttedPopularity}</p>
                </li>
                <li class="modal__value-item"></li><p class="modal__value-title">${original_title}</p>
                </li>
                <li class="modal__value-item"></li><p class="modal__value-genre">${filmGenres}</p>
                </li>
            </ul>
        </div>
    </div>
    <p class="modal__section">About</p>
                 
    <p class="modal__text">${overview}</p>
    <div class="modal__button-block">
        <button
        type="button"
        class="modal__button btn modal__button-full button"
        data-modal-add
      >
        add to watched
      </button>
      <button
        type="button"
        class="modal__button modal__button-border btn btn-secondary"
        data-modal-queue
      >
        add to queue
      </button>
    </div>
  </div>

      //   <button class="button button__orange" id="watched" data-watched="false">add to Watched</button>
      //   <button class="button button__transparent" id="queued" data-queued="false">add to queue</button>
      // </div>
      // <button class="trailer-link">
      // watch trailer</button>
      //   </div>`;

  modalContainerEl.innerHTML = markup;
}
