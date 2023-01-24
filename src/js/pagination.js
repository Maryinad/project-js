import { pagination } from './paginationInit';
// import 'tui-pagination/dist/tui-pagination.css';
import { FilmAPI } from './filmApi';
import { markupFilmCardHome } from './filmCardMarkUpHome';
import { refs } from './refs.js';

const filmApi = new FilmAPI();

pagination.on('afterMove', e => {
  console.log(e.page);
  filmApi.page = e.page;

  filmApi.fetchTrendingFilms().then(response => {
    console.log('response', response.data.results);
    refs.galleryCardLibraryEl.innerHTML = markupFilmCardHome(
      response.data.results
    );
    pagination.setTotalItems(response.data.total_results);
  });
});
filmApi.page = 1;
filmApi.fetchTrendingFilms().then(response => {
  console.log('response', response.data.results);
  refs.galleryCardLibraryEl.innerHTML = markupFilmCardHome(
    response.data.results
  );
  pagination.setTotalItems(response.data.total_results);
});
