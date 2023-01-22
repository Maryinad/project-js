export const markupFilmCard = function(array){
    return array.map(film => {
      const { webImageURL,
        title,
        genres = [],
        year,
        rate
      } = film;
        return `  
    <li class="card-library__item">
      <img class="card-library__photo" src="${webImageURL}" alt="${title}"/>
      <div class="card-library__wrap">
        <h3 class="card-library__title">"${title}"</h3>
        <div class="card-library__info">
          <p class="card-library__text">
            "${genres}" | <span class="card-library__year">"${year}"</span>
          </p>
          <span class="card-library__rate">"${rate}"</span>
        </div>
      </div>
    </li>`
    }).join(''); 
}

