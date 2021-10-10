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

import FormValidator from "../components/FormValidator.js";

import UserInfo from "../components/UserInfo.js";

import Card from "../components/Card.js";

import Section from "../components/Section.js";

import PopupWithForm from "../components/PopupWithForm.js";

import PopupWithImage from "../components/PopupWithImage.js";

//import { openPopup, closePopup } from "../utils/utils.js";

/** Forms Validation */

const formEditProfileValidator = new FormValidator(
  validConfig,
  formEditProfile
);
formEditProfileValidator.enableValidation();

const formAddPlaceValidator = new FormValidator(validConfig, formAddPlace);
formAddPlaceValidator.enableValidation();

/** Cards Functions */

const popupCardImage = new PopupWithImage(popupCard);
popupCardImage.setEventListeners();

function createCard(data) {
  const card = new Card(
    {
      data,
      handleCardClick: popupCardImage.open.bind(popupCardImage),
    },
    "#card-template"
  );
  return card;
}

function renderCard(data) {
  return createCard(data).generateCard();
}

const cardList = new Section(
  {
    items: initCards,
    renderer: (cardItem) => {
      cardList.addItem(renderCard(cardItem));
    },
  },
  cardsContainer
);

cardList.renderItems();

/** FormSubmit AddPlace */

const popupWithFormAddPlace = new PopupWithForm(
  popupAddPlace,
  ({ nameValue, linkValue }) => {
    const data = {
      name: nameValue,
      link: linkValue,
    };
    cardsContainer.prepend(renderCard(data));
  }
);

popupWithFormAddPlace.setEventListeners();

/*
function addCardHandler(evt) {
  evt.preventDefault();

  const card = new Card({
    name: nameAddPlace.value,
    link: linkAddPlace.value,
  }, "#card-template");

  cardsContainer.prepend(card.generateCard());

  formAddPlace.reset();
  closePopup(popupAddPlace);
} */

/** Edit Profile Submit */
/*
function submitFormProfile(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEditProfile);
}
 */
/** Event Listeners */

buttonEditProfile.addEventListener("click", () => {
  formEditProfileValidator.resetValidation();
  openPopup(popupEditProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});

buttonAddPlace.addEventListener("click", () => {
  formAddPlaceValidator.resetValidation();
  popupWithFormAddPlace.open();
});

/*
buttonCloseEditProfile.addEventListener("click", () =>
  closePopup(popupEditProfile)
);
buttonCloseAddPlace.addEventListener("click", () => closePopup(popupAddPlace));
buttonClosePopupCard.addEventListener("click", () => closePopup(popupCard));

formEditProfile.addEventListener("submit", submitFormProfile);
formAddPlace.addEventListener("submit", addCardHandler);
 */
