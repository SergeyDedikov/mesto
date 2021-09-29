/** Cards Constants*/

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

/** PopupCard Constants */

const popupCard = document.querySelector(".popup_type_card");
const buttonClosePopupCard = document.querySelector(".popup__close_card");
const cardImagePopup = popupCard.querySelector(".popup__card-image");
const cardImagePopupDescript = popupCard.querySelector(".popup__card-description");

/** Edit Profile Constants */

const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const buttonEditProfile = document.querySelector(".profile__button_type_edit");
const formEditProfile = document.querySelector(".popup__form_edit-profile");
const buttonCloseEditProfile = document.querySelector(
  ".popup__close_edit-profile"
);
const nameInput = formEditProfile.querySelector(".popup__input_value_name");
const jobInput = formEditProfile.querySelector(".popup__input_value_job");
const nameProfile = document.querySelector(".profile__name");
const jobProfile = document.querySelector(".profile__job");

/** Add Place Constants */

const popupAddPlace = document.querySelector(".popup_type_add-place");
const buttonAddPlace = document.querySelector(".profile__button_type_add");
const formAddPlace = document.querySelector(".popup__form_add-place");
const nameAddPlace = document.querySelector(".popup__input_value_place");
const linkAddPlace = document.querySelector(".popup__input_value_link");
const buttonCloseAddPlace = document.querySelector(".popup__close_add-place");

//** Validation Configuration */

const validConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export {
  cardsContainer,
  initCards,
  popupCard,
  buttonClosePopupCard,
  cardImagePopup,
  cardImagePopupDescript,
  popupEditProfile,
  buttonEditProfile,
  formEditProfile,
  buttonCloseEditProfile,
  nameInput,
  jobInput,
  nameProfile,
  jobProfile,
  popupAddPlace,
  buttonAddPlace,
  formAddPlace,
  nameAddPlace,
  linkAddPlace,
  buttonCloseAddPlace,
  validConfig,
};
