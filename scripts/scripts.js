/** Edit Profile Constants */

const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const buttonEditProfile = document.querySelector(".profile__button_type_edit");
const formEditProfile = document.querySelector(
  ".popup__container_type_edit-profile"
);
const buttonCloseEditProfile = document.querySelector(
  ".popup__close_edit-profile"
);
const nameInput = formEditProfile.querySelector(".popup__input_value_name");
const jobInput = formEditProfile.querySelector(".popup__input_value_job");
const nameProfile = document.querySelector(".profile__name");
const jobProfile = document.querySelector(".profile__job");

/** Add Place Constants */

const popupAddPlace = document.querySelector(".popup_type_add-place");
const buttonAddPlace = document.querySelector(".profile__button_type_add");
const formAddPlace = document.querySelector(".popup__form_add-place");
const nameAddPlace = document.querySelector(".popup__input_value_place");
const linkAddPlace = document.querySelector(".popup__input_value_link");
const buttonCloseAddPlace = document.querySelector(".popup__close_add-place");

/** PopupCard Constants */

const popupCard = document.querySelector(".popup_type_card");
const buttonClosePopupCard = document.querySelector(".popup__close_card");

/** Cards Constants*/

const cardsContainer = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template").content;

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

/** Popup Functions */

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

/** Edit Profile Submit */

function submitFormProfile(evt) {
  // evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

/** Popup Card Functions */

const createCard = (data) => {
  const card = cardTemplate.querySelector("li").cloneNode(true);
  card.querySelector(".card__photo").src = data.link;
  card.querySelector(".card__photo").alt = "На фотографии: " + data.name;
  card.querySelector(".card__description").textContent = data.name;
  card.querySelector(".card__photo").addEventListener("click", () => {
    openPopup(popupCard);
    popupCard.querySelector(".popup__card-image").src = data.link;
    popupCard.querySelector(".popup__card-image").alt =
      "На фотографии: " + data.name;
    popupCard.querySelector(".popup__card-description").textContent = data.name;
  });
  card.querySelector(".card__button-like").addEventListener("click", likeCard);
  card
    .querySelector(".card__button-remove")
    .addEventListener("click", removeCardHandler);

  return card;
};

const renderCard = (data) => {
  cardsContainer.prepend(createCard(data));
}

const addCardHandler = (evt) => {
  // evt.preventDefault();

  renderCard({
    name: nameAddPlace.value,
    link: linkAddPlace.value,
  });

  formAddPlace.reset();
  closePopup(popupAddPlace);
};

const likeCard = (evt) =>
  evt.target.classList.toggle("card__button-like_active");

const removeCardHandler = (evt) => evt.target.closest("li").remove();

/** Call Functions */

initialCards.forEach((data) => renderCard(data));

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
