export const markupFilmCard = function(array){
    return array.map(film => {
      const { poster_path,
        original_title,
        genres = [],
        release_date,
        vote_average
      } = film;
        return `  
    <li class="card-library__item">
      <img class="card-library__photo" src="${poster_path}" alt="${original_title}"/>
      <div class="card-library__wrap">
        <h3 class="card-library__title">"${original_title}"</h3>
        <div class="card-library__info">
          <p class="card-library__text">
            "${genres}" | <span class="card-library__year">"${release_date.slice(0,4)}"</span>
          </p>
          <span class="card-library__rate">"${vote_average}"</span>
        </div>
      </div>
    </li>`
    }).join(''); 
}

