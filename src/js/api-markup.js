export const markupInfoFilm = (array) => {
    return array.map(film => {
        const { webImageURL,
            title,
            genres = [],
            year,
            rate          
        } = film;
        return `
  <section class="catalog section container">
  <ul class="card-library">
    <li class="card-library__item">
      <img class="card-library__photo" src="${webImageURL}" alt="${title}" width = "280" height = "402" />
      <div class="card-library__wrap">
        <h3 class="card-library__title">"${title}"</h3>
        <div class="card-library__info">
          <p class="card-library__text">
            "${genres}" | <span class="card-library__year">"${year}"</span>
          </p>
          <span class="card-library__rate">"${rate}"</span>
        </div>
      </div>
    </li>
    </ul>
</section>`
    }).join(''); 
}