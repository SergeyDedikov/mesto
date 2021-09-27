/** PopupCard Constants */

const popupCard = document.querySelector(".popup_type_card");
const buttonClosePopupCard = document.querySelector(".popup__close_card");
const cardImagePopup = popupCard.querySelector(".popup__card-image");
const cardImagePopupDescript = popupCard.querySelector(".popup__card-description");

/** Edit Profile Constants */

const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const buttonEditProfile = document.querySelector(".profile__button_type_edit");
const formEditProfile = document.querySelector(
  ".popup__container_type_edit-profile"
);
const buttonCloseEditProfile = document.querySelector(
  ".popup__close_edit-profile"
);
const nameInput = formEditProfile.querySelector(".popup__input_value_name");
const jobInput = formEditProfile.querySelector(".popup__input_value_job");
const nameProfile = document.querySelector(".profile__name");
const jobProfile = document.querySelector(".profile__job");


export {
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
};
