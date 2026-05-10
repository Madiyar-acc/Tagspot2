import { deleteCardApi, likeCardApi, dislikeCardApi } from './api.js';

export function createCard(cardData, onImageClick, currentUserId) {
    const cardTemp = document.querySelector('#card-template').content;
    const cardElement = cardTemp.cloneNode(true).querySelector('.card');

    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const deleteBtn = cardElement.querySelector('.card__delete-button');
    const likeBtn = cardElement.querySelector('.card__like-button');
    const likeCount = cardElement.querySelector('.card__like-count');

    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardTitle.textContent = cardData.name;

    likeCount.textContent = cardData.likes.length;

    const isLiked = cardData.likes.some(user => user.id === currentUserId);
    if (isLiked) {
        likeBtn.classList.add('card__like-button_is-active');
    }

    if (cardData.owner.id !== currentUserId) {
        deleteBtn.remove();
    } else {
        deleteBtn.addEventListener('click', () => {
            deleteCardApi(cardData.id)
                .then(() => cardElement.remove())
                .catch(err => console.error('Ошибка при удалении:', err));
        });
    }

    likeBtn.addEventListener('click', () => {
        const isActive = likeBtn.classList.contains('card__like-button_is-active');
        const likeRequest = isActive ? dislikeCardApi(cardData.id) : likeCardApi(cardData.id);

        likeRequest
            .then(updatedCard => {
                likeBtn.classList.toggle('card__like-button_is-active');
                likeCount.textContent = updatedCard.likes.length;
            })
            .catch(err => console.error('Ошибка при лайке:', err));
    });

    cardImage.addEventListener('click', () => onImageClick(cardData));

    return cardElement;
}