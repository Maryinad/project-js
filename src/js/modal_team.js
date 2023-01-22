'use strict'
const openModalBtn = document.querySelector('[data-modal-team-open]');
const closeModalBtn = document.querySelector('[data-modal-team-close]');
const backdropTeamEl = document.querySelector('[data-modal-team]');

function onOpenModalClick(evt) {
    backdropTeamEl.classList.remove('is-hidden');
    closeModalBtn.addEventListener('click', onCloseModalClick);
    backdropTeamEl.addEventListener('click', onBackdropTeamClick);
    window.addEventListener('keydown', onEscBtnClick);
}
function onBackdropTeamClick(evt) {
    if (evt.target === backdropTeamEl) {
        onCloseModalClick();
    }
}
function onEscBtnClick(evt) {
    if (evt.code === 'Escape') {
        onCloseModalClick();
    }

}
function onCloseModalClick(evt) {
    backdropTeamEl.classList.add('is-hidden');
    backdropTeamEl.removeEventListener('click', onBackdropTeamClick);
    closeModalBtn.removeEventListener('click', onCloseModalClick);
    window.removeEventListener('keydown', onEscBtnClick);
}
openModalBtn.addEventListener('click', onOpenModalClick);
