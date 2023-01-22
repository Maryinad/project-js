import { FilmAPI } from "./filmApi";
import { markupFilmCard } from "./filmCardMarkUp";
    
async function fetchTrendingFilms() {
  const galleryEl = document.querySelector('.card-library');

  const filmApi = new FilmAPI();
  try {
    const { data } = await filmApi.fetchTrendingFilms();
    // console.log(data.results);

    galleryEl.insertAdjacentHTML('beforeend', markupFilmCard(data.results));
    } catch {
      err => console.log(err);
    } 
}
//fetchTrendingFilms();
// где ее вызывать? нужно ли этот файл добавлять в index.js