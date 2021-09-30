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
} from "./consts.js";

import { FormValidator } from "./FormValidator.js";

import { openPopup, closePopup } from "./utils.js";

import { Card } from "./Card.js";

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

/** Cards Renders*/

initCards.forEach((item) => {
  const card = new Card(item, "#card-template");
  cardsContainer.append(card.generateCard());
});

function addCardHandler(evt) {
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
