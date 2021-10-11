import {
  cardsContainer,
  initCards,
  popupCard,
  popupEditProfile,
  buttonEditProfile,
  formEditProfile,
  nameProfile,
  jobProfile,
  popupAddPlace,
  buttonAddPlace,
  formAddPlace,
  validConfig,
} from "../utils/constants.js";

import FormValidator from "../components/FormValidator.js";

import UserInfo from "../components/UserInfo.js";

import Card from "../components/Card.js";

import Section from "../components/Section.js";

import PopupWithForm from "../components/PopupWithForm.js";

import PopupWithImage from "../components/PopupWithImage.js";

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

/** Form AddPlace */

const popupWithFormAddPlace = new PopupWithForm(
  popupAddPlace,
  ({ place, link }) => {
    const data = {
      name: place,
      link: link,
    };
    cardsContainer.prepend(renderCard(data));
  }
);

/** UserProfile && Form */

const userInfo = new UserInfo({ nameProfile, jobProfile });

function getUserData() {
  //обработчик данных о пользователе
  const data = userInfo.getUserInfo(); //получаем объект с данными
  for (let input in data) {
    // переберём значения в объекте
    const formUser = document.forms.editProfile; //определим форму
    formUser.elements[input].value = data[input]; //заменим значения полей ввода
  }
}

const popupWithFormEditProfile = new PopupWithForm(
  popupEditProfile,
  (userData) => {
    userInfo.setUserInfo(userData);
  }
);

/** EventListeners */

popupCardImage.setEventListeners();
popupWithFormEditProfile.setEventListeners();
popupWithFormAddPlace.setEventListeners();

buttonEditProfile.addEventListener("click", () => {
  formEditProfileValidator.resetValidation();
  popupWithFormEditProfile.open();
  getUserData();
});

buttonAddPlace.addEventListener("click", () => {
  formAddPlaceValidator.resetValidation();
  popupWithFormAddPlace.open();
});
