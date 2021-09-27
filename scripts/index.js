import {
  popupCard,
  buttonClosePopupCard,
  popupEditProfile,
  buttonEditProfile,
  formEditProfile,
  buttonCloseEditProfile,
  nameInput,
  jobInput,
  nameProfile,
  jobProfile,
} from "./consts.js";

import { openPopup, closePopup } from "./utils.js";

import { Card } from "./Card.js";

/** Edit Profile Submit */

function submitFormProfile(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

/** Add Place Constants */

const popupAddPlace = document.querySelector(".popup_type_add-place");
const buttonAddPlace = document.querySelector(".profile__button_type_add");
const formAddPlace = document.querySelector(".popup__form_add-place");
const nameAddPlace = document.querySelector(".popup__input_value_place");
const linkAddPlace = document.querySelector(".popup__input_value_link");
const buttonCloseAddPlace = document.querySelector(".popup__close_add-place");

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

/** Card Renders*/

initCards.forEach((item) => {
  const card = new Card(item, "#card-template");
  cardsContainer.append(card.generateCard());
});

const addCardHandler = (evt) => {
  evt.preventDefault();

  const card = new Card(
    {
      name: nameAddPlace.value,
      link: linkAddPlace.value,
    },
    "#card-template"
  );
  cardsContainer.prepend(card.generateCard());

  formAddPlace.reset();
  closePopup(popupAddPlace);
};

/** Event Listeners */

buttonEditProfile.addEventListener("click", () => {
  openPopup(popupEditProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});
buttonCloseEditProfile.addEventListener("click", () =>
  closePopup(popupEditProfile)
);
formEditProfile.addEventListener("submit", submitFormProfile);

buttonAddPlace.addEventListener("click", () => openPopup(popupAddPlace));
buttonCloseAddPlace.addEventListener("click", () => closePopup(popupAddPlace));
formAddPlace.addEventListener("submit", addCardHandler);

buttonClosePopupCard.addEventListener("click", () => closePopup(popupCard));
