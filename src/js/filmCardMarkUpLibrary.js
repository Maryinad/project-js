export const markupFilmCardLibrary = function (array, genresArray) {
  return array
    .map(film => {
      const {
        id,
        poster_path,
        original_title,
        genre_ids,
        release_date,
        vote_average,
        backdrop_path,
      } = film;

      const genres = genre_ids.map(genre_id => {
        const elem = genresArray.find(el => el.id === genre_id);

        return elem.name;
      });

      function prepareObject(array) {
        let filmGenres = '';

        if (array.length < 3) {
          filmGenres = array.join(', ');
        }
        if (array.length >= 3) {
          filmGenres = array.slice(0, 2).join(', ') + ', Other';
        }
        return filmGenres;
      }
      let filmGenres = prepareObject(genres);

      return `  
    <li class="card-library__item" data-id="${id}">
      <img class="card-library__photo" src="https://image.tmdb.org/t/p/original/${poster_path}" alt=${original_title} width="395"/>
      <div class="card-library__wrap">
        <h3 class="card-library__title">${original_title}</h3>
        <div class="card-library__info">
          <p class="card-library__text">
            ${filmGenres} | <span class="card-library__year">${release_date.slice(
        0,
        4
      )}</span>
          </p>
          <span class="card-library__rate">"${vote_average.toFixed(1)}"</span>
        </div>
      </div>
    </li>`;
    })
    .join('');
};
