import {
  cardsContainer,
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

/** Card Handler*/

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
