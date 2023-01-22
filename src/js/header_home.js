'use strict';

import { FilmAPI } from './filmApi';

headerFormEl = document.querySelector('.header__form');
headerInputEl = document.querySelector('.header__input');
headerFormBtn = document.querySelector('.btn_search');
headerWarningMessage = document.querySelector('.header__warning');
searchFieldMessage = document.querySelector('.js_search_results');

const filmApi = new FilmAPI();

headerFormEl.addEventListener('submit', onSearchClick);

function onSearchClick(event) {
  event.preventDefault();
  filmApi.query = event.currentTarget.elements.searchQuery.value
    .trim()
    .toLowerCase();

  if (filmApi.query === '') {
    searchFieldMessage.textContent = '';
    headerWarningMessage.textContent = '';
    searchFieldMessage.textContent = `Please write something in the box!`;
    return;
  }

  filmApi.fetchFilmsByQuery().then(data => {
    if (data.total_results === 0) {
      searchFieldMessage.textContent = '';
      headerWarningMessage.textContent = `Search result not successful. Enter the correct movie name and `;
      return;
    }
  });

  event.currentTarget.elements.searchQuery.value = '';
  searchFieldMessage.textContent = '';
}
