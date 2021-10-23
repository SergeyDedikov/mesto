import "./index.css";

import {
  cardsContainer,
  initCards,
  buttonEditProfile,
  formEditProfile,
  buttonAddPlace,
  formAddPlace,
  validConfig,
  apiConfig,
} from "../utils/constants.js";

import FormValidator from "../components/FormValidator.js";

import UserInfo from "../components/UserInfo.js";

import Card from "../components/Card.js";

import Section from "../components/Section.js";

import PopupWithForm from "../components/PopupWithForm.js";

import PopupWithImage from "../components/PopupWithImage.js";

import Api from "../components/Api";

/** API */

const api = new Api(apiConfig);

/** Forms Validation */

const formEditProfileValidator = new FormValidator(
  validConfig,
  formEditProfile
);
formEditProfileValidator.enableValidation();

const formAddPlaceValidator = new FormValidator(validConfig, formAddPlace);
formAddPlaceValidator.enableValidation();

/** Cards Functions */

//api.getInitialCards();

const popupImage = new PopupWithImage(".popup_type_card");

function createCard(data) {
  const card = new Card(
    {
      data,
      handleCardClick: popupImage.open.bind(popupImage),
    },
    "#card-template"
  );
  return card.generateCard();
}

const cardList = new Section(
  {
    items: initCards,
    renderer: (cardItem) => {
      cardList.addItem(createCard(cardItem));
    },
  },
  cardsContainer
);

cardList.renderItems();

/** Form AddPlace */

const popupAddPlace = new PopupWithForm(
  ".popup_type_add-place",
  ({ place, link }) => {
    const data = {
      name: place,
      link: link,
    };
    cardsContainer.prepend(createCard(data));
  }
);

/** UserProfile && Form */

const userInfo = new UserInfo(".profile__name", ".profile__job");

const apiUserInfo = api.getUserInfo();

apiUserInfo
  .then((res) => {
    userInfo.setUserInfo({ //установим данные о пользователе
      name: res.name,
      job: res.about,
    });
  })
  .catch((err) => {
    console.log(err);
  });

function getUserData() {
  //обработчик данных о пользователе
  const data = userInfo.getUserInfo(); //получаем объект с данными
  const formUser = document.forms.editProfile; //определим форму
  for (let input in data) {
    // переберём ключи в объекте
    formUser.elements[input].value = data[input]; //заменим значения полей ввода в форме
  }
}

const popupEditProfile = new PopupWithForm(
  ".popup_type_edit-profile",
  (userData) => {
    userInfo.setUserInfo(userData);
  }
);

/** EventListeners */

popupImage.setEventListeners();
popupEditProfile.setEventListeners();
popupAddPlace.setEventListeners();

buttonEditProfile.addEventListener("click", () => {
  formEditProfileValidator.resetValidation();
  popupEditProfile.open();
  getUserData();
});

buttonAddPlace.addEventListener("click", () => {
  formAddPlaceValidator.resetValidation();
  popupAddPlace.open();
});
