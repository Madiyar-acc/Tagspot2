// import '../pages/index.css';
// import { initialCards } from './cards.js';
// import { createCard, deleteCard, likeCard } from '../components/card.js';
// import { openModal, closeModal } from '../components/modal.js';
//
// const cardsList = document.querySelector('.places__list');
// const profileTitle = document.querySelector('.profile__title');
// const profileDescription = document.querySelector('.profile__description');
// const profileEditButton = document.querySelector('.profile__edit-button');
// const profileAddButton = document.querySelector('.profile__add-button');
// const editPopup = document.querySelector('.popup_type_edit');
// const newCardPopup = document.querySelector('.popup_type_new-card');
// const imagePopup = document.querySelector('.popup_type_image');
// const editForm = document.querySelector('.popup__form[name="edit-profile"]');
// const newCardForm = document.querySelector('.popup__form[name="new-place"]');
// const popupImage = imagePopup.querySelector('.popup__image');
// const popupCaption = imagePopup.querySelector('.popup__caption');
//
//
// const form = document.querySelector('.popup__form');
// const inputs = form.querySelectorAll('.popup__input');
// const button = form.querySelector('.popup__button');
// const regex = /^[A-Za-zА-Яа-яЁё\s-]+$/;
//
// function handleImageClick(cardData) {
//     popupImage.src = cardData.link;
//     popupImage.alt = cardData.name;
//     popupCaption.textContent = cardData.name;
//     openModal(imagePopup);
// }
//
// popupImage.addEventListener('click', () => closeModal(imagePopup));
//
// initialCards.forEach(card => {
//     const cardElement = createCard(card, deleteCard, likeCard, handleImageClick);
//     cardsList.append(cardElement);
// })
//
//
//
// editForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     profileTitle.textContent = editForm.querySelector('input[name="name"]').value;
//     profileDescription.textContent = editForm.querySelector('input[name="description"]').value;
//     closeModal(editPopup);
// });
//
// document.querySelectorAll('.popup__close').forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         const popup = e.target.closest('.popup');
//         closeModal(popup);
//     });
// });
//
// profileAddButton.addEventListener('click', () => openModal(newCardPopup));
//
//
//
// newCardForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const cardData = {
//         name: newCardForm.querySelector('input[name="place-name"]').value,
//         link: newCardForm.querySelector('input[name="link"]').value
//     };
//     const cardElement = createCard(cardData, deleteCard, likeCard, handleImageClick);
//     cardsList.prepend(cardElement);
//     newCardForm.reset();
//     closeModal(newCardPopup);
// });





import '../pages/index.css';
import { createCard } from '../components/card.js';
import { openModal, closeModal } from '../components/modal.js';
import { enableValidation, clearValidation } from '../components/validation.js';
import {
    getUserInfo,
    getInitialCards,
    updateUserInfo,
    addCard,
    updateAvatar
} from '../components/api.js';

const cardsList = document.querySelector('.places__list');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileImage = document.querySelector('.profile__image');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const profileAvatarButton = document.querySelector('.profile__avatar-button');
const editPopup = document.querySelector('.popup_type_edit');
const newCardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');
const avatarPopup = document.querySelector('.popup_type_avatar');
const editForm = document.querySelector('.popup__form[name="edit-profile"]');
const newCardForm = document.querySelector('.popup__form[name="new-place"]');
const avatarForm = document.querySelector('.popup__form[name="edit-avatar"]');
const popupImage = imagePopup.querySelector('.popup__image');
const popupCaption = imagePopup.querySelector('.popup__caption');

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

let currentUserId;


function renderLoading(button, isLoading) {
    button.textContent = isLoading ? 'Сохранение...' : 'Сохранить';
}

function handleImageClick(cardData) {
    popupImage.src = cardData.link;
    popupImage.alt = cardData.name;
    popupCaption.textContent = cardData.name;
    openModal(imagePopup);
}

document.querySelectorAll('.popup__close').forEach(btn => {
    btn.addEventListener('click', e => {
        closeModal(e.target.closest('.popup'));
    });
});

profileEditButton.addEventListener('click', () => {
    editForm.querySelector('input[name="name"]').value = profileTitle.textContent;
    editForm.querySelector('input[name="description"]').value = profileDescription.textContent;
    clearValidation(editForm, validationConfig);
    openModal(editPopup);
});

editForm.addEventListener('submit', e => {
    e.preventDefault();
    const submitBtn = editForm.querySelector('.popup__button');
    const name = editForm.querySelector('input[name="name"]').value;
    const about = editForm.querySelector('input[name="description"]').value;
    renderLoading(submitBtn, true);

    updateUserInfo(name, about)
        .then(user => {
            profileTitle.textContent = user.name;
            profileDescription.textContent = user.about;
            closeModal(editPopup);
        })
        .catch(err => console.error('Ошибка при обновлении профиля:', err))
        .finally(() => renderLoading(submitBtn, false));
});

profileAddButton.addEventListener('click', () => {
    openModal(newCardPopup);
});

newCardForm.addEventListener('submit', e => {
    e.preventDefault();
    const submitBtn = newCardForm.querySelector('.popup__button');
    const name = newCardForm.querySelector('input[name="place-name"]').value;
    const link = newCardForm.querySelector('input[name="link"]').value;
    renderLoading(submitBtn, true);

    addCard(name, link)
        .then(cardData => {
            const cardElement = createCard(cardData, handleImageClick, currentUserId);
            cardsList.prepend(cardElement);
            newCardForm.reset();
            clearValidation(newCardForm, validationConfig);
            closeModal(newCardPopup);
        })
        .catch(err => console.error('Ошибка при добавлении карточки:', err))
        .finally(() => renderLoading(submitBtn, false));
});

profileAvatarButton.addEventListener('click', () => {
    clearValidation(avatarForm, validationConfig);
    openModal(avatarPopup);
});

avatarForm.addEventListener('submit', e => {
    e.preventDefault();
    const submitBtn = avatarForm.querySelector('.popup__button');
    const avatarUrl = avatarForm.querySelector('input[name="avatar"]').value;
    renderLoading(submitBtn, true);

    updateAvatar(avatarUrl)
        .then(user => {
            profileImage.style.backgroundImage = `url('${user.avatar}')`;
            avatarForm.reset();
            closeModal(avatarPopup);
        })
        .catch(err => console.error('Ошибка при обновлении аватара:', err))
        .finally(() => renderLoading(submitBtn, false));
});


Promise.all([getUserInfo(), getInitialCards()])
    .then(([user, cards]) => {
        currentUserId = user.id;
        profileTitle.textContent = user.name;
        profileDescription.textContent = user.about;
        profileImage.style.backgroundImage = `url('${user.avatar}')`;

        cards.forEach(cardData => {
            const cardElement = createCard(cardData, handleImageClick, currentUserId);
            cardsList.append(cardElement);
        });
    })
    .catch(err => console.error('Ошибка при загрузке данных:', err));

enableValidation(validationConfig);































