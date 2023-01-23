import { FilmAPI } from './filmApi.js';
import { markupFilmCard } from './filmCardMarkUp';
import { refs } from './refs.js';

const filmApi = new FilmAPI();
// console.log('filmApi', filmApi);

filmApi
  .fetchTrendingFilms()
  .then(response => {
    // console.log('response', response.data.results);
    refs.galleryCardLibraryEl.innerHTML = markupFilmCard(response.data.results);
  })
  .catch(err => {
    console.log(err);
  });

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
