import '../pages/index.css';
import { initialCards } from './cards.js';
import { createCard, deleteCard, likeCard } from '../components/card.js';
import { openModal, closeModal } from '../components/modal.js';

const cardsList = document.querySelector('.places__list');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const editPopup = document.querySelector('.popup_type_edit');
const newCardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');
const editForm = document.querySelector('.popup__form[name="edit-profile"]');
const newCardForm = document.querySelector('.popup__form[name="new-place"]');
const popupImage = imagePopup.querySelector('.popup__image');
const popupCaption = imagePopup.querySelector('.popup__caption');


function handleImageClick(cardData) {
    popupImage.src = cardData.link;
    popupImage.alt = cardData.name;
    popupCaption.textContent = cardData.name;
    openModal(imagePopup);
}

popupImage.addEventListener('click', () => closeModal(imagePopup));

initialCards.forEach(card => {
    const cardElement = createCard(card, deleteCard, likeCard, handleImageClick);
    cardsList.append(cardElement);
})


profileEditButton.addEventListener('click', () => {
    editForm.querySelector('input[name="name"]').value = profileTitle.textContent;
    editForm.querySelector('input[name="description"]').value = profileDescription.textContent;
    openModal(editPopup);
});

editForm.addEventListener('submit', (e) => {
    e.preventDefault();
    profileTitle.textContent = editForm.querySelector('input[name="name"]').value;
    profileDescription.textContent = editForm.querySelector('input[name="description"]').value;
    closeModal(editPopup);
});

document.querySelectorAll('.popup__close').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const popup = e.target.closest('.popup');
        closeModal(popup);
    });
});

profileAddButton.addEventListener('click', () => openModal(newCardPopup));



newCardForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const cardData = {
        name: newCardForm.querySelector('input[name="place-name"]').value,
        link: newCardForm.querySelector('input[name="link"]').value
    };
    const cardElement = createCard(cardData, deleteCard, likeCard, handleImageClick);
    cardsList.prepend(cardElement);
    newCardForm.reset();
    closeModal(newCardPopup);
});