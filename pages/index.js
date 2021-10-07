import {
  cardsContainer,
  initCards,
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
  popupAddPlace,
  buttonAddPlace,
  formAddPlace,
  nameAddPlace,
  linkAddPlace,
  buttonCloseAddPlace,
  validConfig,
} from "../utils/constants.js";

import { FormValidator } from "../components/FormValidator.js";

import { openPopup, closePopup } from "../utils/utils.js";

import { Card } from "../components/Card.js";

import Section from "../components/Section.js";

/** Forms Validation */

const formEditProfileValidator = new FormValidator(
  validConfig,
  formEditProfile
);
formEditProfileValidator.enableValidation();

const formAddPlaceValidator = new FormValidator(validConfig, formAddPlace);
formAddPlaceValidator.enableValidation();

/** Edit Profile Submit */

function submitFormProfile(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

/** Cards Functions */
/*
function createCard(data) {
  const card = new Card(data, "#card-template");
  return card;
}

function renderCard(data) {
  return createCard(data).generateCard();
}

initCards.forEach((item) => {
  cardsContainer.append(renderCard(item));
});
 */

const cardList = new Section({
  items: initCards,
  renderer: (cardItem) => {
    const card = new Card(cardItem, "#card-template");
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
}, cardsContainer);

cardList.renderItems();

function addCardHandler(evt) {
  evt.preventDefault();

  const card = new Card({
    name: nameAddPlace.value,
    link: linkAddPlace.value,
  }, "#card-template");

  cardsContainer.prepend(card.generateCard());

  formAddPlace.reset();
  closePopup(popupAddPlace);
}

/** Event Listeners */

buttonEditProfile.addEventListener("click", () => {
  formEditProfileValidator.resetValidation();
  openPopup(popupEditProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});

buttonAddPlace.addEventListener("click", () => {
  formAddPlaceValidator.resetValidation();
  openPopup(popupAddPlace);
});

buttonCloseEditProfile.addEventListener("click", () =>
  closePopup(popupEditProfile)
);
buttonCloseAddPlace.addEventListener("click", () => closePopup(popupAddPlace));
buttonClosePopupCard.addEventListener("click", () => closePopup(popupCard));

formEditProfile.addEventListener("submit", submitFormProfile);
formAddPlace.addEventListener("submit", addCardHandler);
