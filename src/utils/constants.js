/** Cards Constants */

const cardsContainer = document.querySelector(".cards__list");

/** Edit Profile & Avatar Constants */

const buttonEditProfile = document.querySelector(".profile__button_type_edit");
const buttonEditAvatar = document.querySelector(".profile__button_type_avatar");
const formEditProfile = document.querySelector(".popup__form_edit-profile");
const formEditAvatar = document.querySelector(".popup__form_edit-avatar");
const myId = {id: ''};

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
  apiUrl: "https://mesto.nomoreparties.co",
  cohortId: "cohort-29",
  tokenId: "aac8a826-6020-4164-947b-69b028e1e5c6",
};

//* --- */

export {
  cardsContainer,
  myId,
  buttonEditAvatar,
  buttonEditProfile,
  buttonAddPlace,
  formEditProfile,
  formEditAvatar,
  formAddPlace,
  validConfig,
  apiConfig,
};
