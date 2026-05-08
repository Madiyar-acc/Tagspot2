export function openModal(modal) {
    modal.classList.add('popup_is-opened');
    modal.addEventListener('click', handleOverlayClick);
    document.addEventListener('keydown', handleEscapeKey)
}

export function closeModal(modal) {
    modal.classList.remove('popup_is-opened');
    modal.removeEventListener('click', handleOverlayClick);
    document.removeEventListener('keydown', handleEscapeKey)
}

function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
        closeModal(e.target)
    }
}

function handleEscapeKey(e) {
    if (e.key === 'Escape') {
        let openedModal = document.querySelector('.popup_is-opened');
        if (openedModal) closeModal(openedModal);
    }
}