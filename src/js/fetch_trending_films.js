import { FilmAPI } from './filmApi';
import { markupFilmCard } from './filmCardMarkUp';

const galleryEl = document.querySelector('.card-library');
const filmApi = new FilmAPI();
console.log(filmApi);

// const data = filmApi.fetchTrendingFilms().then(data => {
//   galleryEl.insertAdjacentHTML('beforeend', markupFilmCard(data.results));
// });

// async function fetchTrendingFilms() {
//   try {
//     const data = await filmApi.fetchTrendingFilms();
//     console.log(data.results);

//     galleryEl.insertAdjacentHTML('beforeend', markupFilmCard(data.results));
//   } catch {
//     err => console.log(err);
//   }
// }
// fetchTrendingFilms();
// где ее вызывать? нужно ли этот файл добавлять в index.js
