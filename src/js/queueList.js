let queueSavedList = localStorage.getItem('queueList');
const queueParsedList = JSON.parse(queueSavedList) || []; //возвращает объект, который нужно передать в рендер галереи