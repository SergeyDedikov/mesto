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

/** UserProfile Functions */

const userInfo = new UserInfo(".profile__name", ".profile__job");

api
  .getUserInfo()
  .then((info) => {
    userInfo.setUserInfo({
      //получим данные пользователя от сервера
      name: info.name,
      job: info.about,
    });
    avatarUser.src = info.avatar;
    myId.id = info._id; //сохраним свой ID
  })
  .catch((err) => {
    console.log(err);
  });

const popupEditProfile = new PopupWithForm(
  ".popup_type_edit-profile",
  (userData) => {
    popupEditProfile.renderLoading("Сохранение...");
    api
      .setUserInfo(userData)
      .then(() => {
        userInfo.setUserInfo(userData);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEditProfile.close();
        setTimeout(() => popupEditProfile.renderLoading("Сохранить"), 500);
      });
  }
);

function getUserData() {                          //обработчик данных о пользователе
  const data = userInfo.getUserInfo();            //получаем объект с данными
  for (let input in data) {                       // переберём ключи в объекте
    formEditProfile.elements[input].value = data[input]; //заменим значения полей ввода в форме
  }
};

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
            .finally(() => popupConfirmation.close())
        );
      },
      handleLikeClick: (btnLike) => {
        if (btnLike.classList.contains("card__button-like_active")) {
          api
            .deleteLike(data._id)
            .then((res) => {
              !card.counterLikes(res.likes);
              btnLike.classList.remove("card__button-like_active");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          api
            .addLike(data._id)
            .then((res) => {
              !card.counterLikes(res.likes);
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
    popupAddPlace.renderLoading("Сохранение...");
    api
      .addNewCard(data)
      .then((res) => {
        cardsContainer.prepend(createCard(res));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupAddPlace.close();
        setTimeout(() => popupAddPlace.renderLoading("Создать"), 500);
      });
  }
);

/** Form Edit Avatar */

const popupEditAvatar = new PopupWithForm(
  ".popup_type_edit-avatar",
  ({ avatar }) => {
    const data = { avatar: avatar };
    popupEditAvatar.renderLoading("Сохранение...");
    api
      .changeAvatar(data)
      .then((res) => {
        avatarUser.src = res.avatar;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEditAvatar.close();
        setTimeout(() => popupEditAvatar.renderLoading("Сохранить"), 500);
      });
  }
);

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
