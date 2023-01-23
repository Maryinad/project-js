let watchedSavedList = localStorage.getItem('watchedList');
const watchedParsedList = JSON.parse(watchedSavedList) || []; //возвращает объект, который нужно передать в рендер галереи