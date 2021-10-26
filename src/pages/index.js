import "./index.css";

import {
  cardsContainer,
  avatarUser,
  myId,
  buttonEditAvatar,
  buttonEditProfile,
  buttonAddPlace,
  formEditProfile,
  formEditAvatar,
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
import PopupWithConfirmation from "../components/PopupWithConfirmation";
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

const formEditAvatarValidator = new FormValidator(validConfig, formEditAvatar);
formEditAvatarValidator.enableValidation();

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
    myId.id = info._id;
  })
  .catch((err) => {
    console.log(err);
  });

const popupEditProfile = new PopupWithForm(
  ".popup_type_edit-profile",
  (userData) => {
    api
      .setUserInfo(userData)
      .then(() => {
        userInfo.setUserInfo(userData);
      })
      .catch((err) => {
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

/** Cards Functions */

const popupImage = new PopupWithImage(".popup_type_card");
const popupConfirmation = new PopupWithConfirmation(".popup_type_confirmation");

function createCard(data) {
  const card = new Card(
    {
      data,
      handleCardClick: popupImage.open.bind(popupImage),
      handleDeleteIconClick: (card) => {
        popupConfirmation.open();
        popupConfirmation.exec(() =>
          api
            .deleteCard(data)
            .then(() => {
              card.remove();
            })
            .catch((err) => {
              console.log(err);
            })
        );
      },
      handleLikeClick: (btnLike) => {
        if (btnLike.classList.contains("card__button-like_active")) {
          api
            .deleteLike(data)
            .then((card) => {
              // обновляем счётчик
              console.log(card.likes.length);

              btnLike.classList.remove("card__button-like_active");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          api
            .addLike(data)
            .then((card) => {
              // обновляем счётчик
              console.log(card.likes.length);

              btnLike.classList.add("card__button-like_active");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      },
    },
    "#card-template",
    myId
  );
  return card.generateCard();
}

api
  .getInitialCards()
  .then((cards) => {
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
    api
      .addNewCard(data)
      .then((res) => {
        cardsContainer.prepend(createCard(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }
);

/** Form Edit Avatar */

const popupEditAvatar = new PopupWithForm(
  ".popup_type_edit-avatar",
  ({ avatar }) => {
    const data = { avatar: avatar };
    api
      .changeAvatar(data)
      .then((res) => {
        avatarUser.src = res.avatar;
      })
      .catch((err) => {
        console.log(err);
      });
  }
);

/** EventListeners */

popupImage.setEventListeners();
popupEditProfile.setEventListeners();
popupEditAvatar.setEventListeners();
popupAddPlace.setEventListeners();
popupConfirmation.setEventListeners();

buttonEditProfile.addEventListener("click", () => {
  formEditProfileValidator.resetValidation();
  popupEditProfile.open();
  getUserData();
});

buttonAddPlace.addEventListener("click", () => {
  formAddPlaceValidator.resetValidation();
  popupAddPlace.open();
});

buttonEditAvatar.addEventListener("click", () => {
  formEditAvatarValidator.resetValidation();
  popupEditAvatar.open();
});
