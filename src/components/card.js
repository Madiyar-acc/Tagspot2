export  function deleteCard(card) {
    card.remove();
}

export function likeCard(button) {
    button.classList.toggle('card__like-button_is-active')
}

export function createCard(cardData, onDelete, onLike, onImageClick) {
    const cardTemp = document.querySelector('#card-template').content;
    const cardElement = cardTemp.cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const deleteBtn = cardElement.querySelector('.card__delete-button');
    const likeBtn = cardElement.querySelector('.card__like-button');

    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardTitle.textContent = cardData.name;


    deleteBtn.addEventListener('click', () => onDelete(deleteBtn.closest('.card')));
    likeBtn.addEventListener('click', () => onLike(likeBtn));
    cardImage.addEventListener('click', () => onImageClick(cardData));

    return cardElement;
}

