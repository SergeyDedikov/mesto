import "./index.css";

import {
  cardsContainer,
  initCards,
  avatarUser,
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

api
  .getInitialCards()
  .then((cards) => {
    console.log(cards);
    const cardList = new Section(
      {
        items: cards,
        renderer: (cardItem) => {
          cardList.addItem(createCard(cardItem));
        },
      },
      cardsContainer
    );

    cardList.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

/** Form AddPlace */

const popupAddPlace = new PopupWithForm(
  ".popup_type_add-place",
  ({ place, link }) => {
    const data = {
      name: place,
      link: link,
    };
    cardsContainer.prepend(createCard(data));
    api.addNewCard(data).catch((err) => {
      console.log(err);
    });
  }
);

/** UserProfile && Form */

const userInfo = new UserInfo(".profile__name", ".profile__job");

const apiUserInfo = api.getUserInfo();

apiUserInfo
  .then((info) => {
    userInfo.setUserInfo({
      //получим данные пользователя от сервера
      name: info.name,
      job: info.about,
    });
    avatarUser.src = info.avatar;
  })
  .catch((err) => {
    console.log(err);
  });

const popupEditProfile = new PopupWithForm(
  ".popup_type_edit-profile",
  (userData) => {
    userInfo.setUserInfo(userData);
    api.setUserInfo(userData).catch((err) => {
      console.log(err);
    });
  }
);

function getUserData() {
  //обработчик данных о пользователе
  const data = userInfo.getUserInfo(); //получаем объект с данными
  const formUser = document.forms.editProfile; //определим форму
  for (let input in data) {
    // переберём ключи в объекте
    formUser.elements[input].value = data[input]; //заменим значения полей ввода в форме
  }
}

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
