/** Cards Constants */

const cardsContainer = document.querySelector(".cards__list");
const initCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

/** Edit Profile Constants */

const buttonEditProfile = document.querySelector(".profile__button_type_edit");
const formEditProfile = document.querySelector(".popup__form_edit-profile");
const avatarUser = document.querySelector(".profile__avatar");

/** Add Place Constants */

const buttonAddPlace = document.querySelector(".profile__button_type_add");
const formAddPlace = document.querySelector(".popup__form_add-place");

//** Validation Configuration */

const validConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

//* API config */

const apiConfig = {
  apiUrl: 'https://mesto.nomoreparties.co',
  cohortId: 'cohort-29',
  tokenId: 'aac8a826-6020-4164-947b-69b028e1e5c6'
};

//* --- */

export {
  cardsContainer,
  initCards,
  avatarUser,
  buttonEditProfile,
  formEditProfile,
  buttonAddPlace,
  formAddPlace,
  validConfig,
  apiConfig
};
