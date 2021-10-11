import {
  cardsContainer,
  initCards,
  popupCard,
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
  ({ place, link }) => {
    const data = {
      name: place,
      link: link,
    };
    cardsContainer.prepend(renderCard(data));
  }
);

popupWithFormAddPlace.setEventListeners();

/** UserProfile */

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

/** FormSubmit EditProfile */

const popupWithFormEditProfile = new PopupWithForm(
  popupEditProfile,
  (userData) => {
    userInfo.setUserInfo(userData);
  }
);

popupWithFormEditProfile.setEventListeners();

/** Event Listeners */

buttonEditProfile.addEventListener("click", () => {
  formEditProfileValidator.resetValidation();
  popupWithFormEditProfile.open();
  getUserData();
});

buttonAddPlace.addEventListener("click", () => {
  formAddPlaceValidator.resetValidation();
  popupWithFormAddPlace.open();
});
