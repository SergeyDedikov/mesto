import "./index.css";

import {
  cardsContainer,
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

const api = new Api(apiConfig);

const userInfo = new UserInfo(
  ".profile__name",
  ".profile__job",
  ".profile__avatar"
);

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
              popupConfirmation.close();
            })
            .catch((err) => {
              console.log(err);
            })
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

const cardList = new Section(
  {
    renderer: (card) => {
      cardList.addItem(createCard(card));
    },
  },
  cardsContainer
);

/** API Promises */

const promiseUserInfo = api.getUserInfo();
const promiseCards = api.getInitialCards();

Promise.all([promiseUserInfo, promiseCards])
  .then((values) => {             //?????????????? ???????????? ???????? ????????????????
    const userData = values[0];   //???????????? ????????????????????????
    userInfo.setFullUserInfo(userData);
    myId.id = userData._id;

    const cards = values[1];       //???????????? ???????? ????????????????
    cardList.renderItems(cards);
  })
  .catch((err) => {
    console.log(err);
  });

/** All Forms */

const popupEditAvatar = new PopupWithForm(
  ".popup_type_edit-avatar",
  ({ avatar }) => {
    const data = { avatar: avatar };
    popupEditAvatar.renderLoading("????????????????????...");
    api
      .changeAvatar(data)
      .then((userData) => {
        userInfo.setAvatar(userData);
        popupEditAvatar.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => popupEditAvatar.renderLoading("??????????????????"));
  }
);

const popupEditProfile = new PopupWithForm(
  ".popup_type_edit-profile",
  (userData) => {
    popupEditProfile.renderLoading("????????????????????...");
    api
      .setUserInfo(userData)
      .then(() => {
        userInfo.setUserInfo(userData);
        popupEditProfile.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => popupEditProfile.renderLoading("??????????????????"));
  }
);

const popupAddPlace = new PopupWithForm(
  ".popup_type_add-place",
  ({ place, link }) => {
    const data = {
      name: place,
      link: link,
    };
    popupAddPlace.renderLoading("????????????????????...");
    api
      .addNewCard(data)
      .then((res) => {
        cardList.prependItem(createCard(res));
        popupAddPlace.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => popupAddPlace.renderLoading("??????????????"));
  }
);

function getUserData() {                   //???????????????????? ???????????? ?? ????????????????????????
  const data = userInfo.getUserInfo();     //???????????????? ???????????? ?? ??????????????
  for (let input in data) {                // ?????????????????? ?????????? ?? ??????????????
    formEditProfile.elements[input].value = data[input]; //?????????????? ???????????????? ?????????? ?????????? ?? ??????????
  }
}

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
