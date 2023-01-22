import { FilmAPI } from './filmApi';
import axios from 'axios';

const filmAPI = new FilmAPI();

filmAPI.fetchTrendingFilms().then(resp => resp.results);

// filmAPI.fetchFilmsByQuery(query);

// filmAPI.fetchFilmById();
