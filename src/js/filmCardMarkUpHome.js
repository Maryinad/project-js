
export const markupFilmCardHome = function (array,genresArray) {
//  function prepareObject(array) {
//   let newArr = array.map(el => el.name);
//   let filmGenres = '';

//   if (newArr.length < 4) {
//     filmGenres = newArr.join(', ');
//   }
//   if (newArr.length >= 4) {
//     filmGenres = newArr.slice(0, 2).join(', ') + ', Other';
//   }
//   return filmGenres;
// }


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
        const elem = genresArray.find(el => el.id === genre_id)
      
        
        
        return elem.name
      })


      return `  
    <li class="card-library__item" data-id="${id}">
      <img class="card-library__photo" src="https://image.tmdb.org/t/p/original/${poster_path}" alt=${original_title} width="395"/>
      <div class="card-library__wrap">
        <h3 class="card-library__title">${original_title}</h3>
        <div class="card-library__info">
          <p class="card-library__text">
            ${genres} | <span class="card-library__year">${release_date.slice(
        0,
        4
      )}</span>
          </p>
        </div>
      </div>
    </li>`;
    })
    .join('');
};
