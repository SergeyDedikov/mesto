/** Edit Profile Constant */

const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const buttonEditProfile = document.querySelector(".profile__button_type_edit");
const formEditProfile = document.querySelector(
  ".popup__container_type_edit-profile"
);
const buttonCloseEditProfile = document.querySelector(
  ".popup__button_type_close-edit-profile"
);
const nameInput = formEditProfile.querySelector(".popup__item_value_name");
const jobInput = formEditProfile.querySelector(".popup__item_value_job");
const nameProfile = document.querySelector(".profile__name");
const jobProfile = document.querySelector(".profile__job");

/** Add Place Constant */

const popupAddPlace = document.querySelector(".popup_type_add-place");
const buttonAddPlace = document.querySelector(".profile__button_type_add");
const formAddPlace = document.querySelector(".form__add-place");
const nameAddPlace = document.querySelector(".popup__item_value_place");
const linkAddPlace = document.querySelector(".popup__item_value_link");
const buttonCloseAddPlace = document.querySelector(
  ".popup__button_type_close-add-place"
);

/** PopupCard Constant */

const popupCard = document.querySelector(".popup_type_card");
const buttonClosePopupCard = document.querySelector(
  ".popup__button_type_close-card"
);

/** Edit Profile Function */

function openPopupEditProfile() {
  popupEditProfile.classList.add("popup_opened");
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function closePopupEditProfile() {
  popupEditProfile.classList.remove("popup_opened");
}

function submitFormProfile(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopupEditProfile();
}

/** Add Place Function */

function openPopupAddPlace() {
  popupAddPlace.classList.add("popup_opened");
}

function closePopupAddPlace() {
  popupAddPlace.classList.remove("popup_opened");
}

/** Popup Card */

function openPopupCard(evt) {
  popupCard.classList.add("popup_opened");
  popupCard.querySelector(".popup__card-image").src = evt.target.src;
  popupCard.querySelector(".popup__card-image").alt = evt.target.alt;
  popupCard.querySelector(".popup__card-description").textContent =
    evt.target.nextElementSibling.firstElementChild.textContent;
}

function closePopupCard() {
  popupCard.classList.remove("popup_opened");
}

/** Cards */

const cardsElement = document.querySelector(".cards__list");
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

const addCard = (card) => {
  const cardElement = cardTemplate.querySelector("li").cloneNode(true);
  cardElement.querySelector(".card__photo").src = card.link;
  cardElement.querySelector(".card__photo").alt = "На фотографии: " + card.name;
  cardElement.querySelector(".card__description").textContent = card.name;
  cardElement
    .querySelector(".card__photo")
    .addEventListener("click", openPopupCard);
  cardElement
    .querySelector(".card__button-like")
    .addEventListener("click", cardLike);
  cardElement
    .querySelector(".card__button-remove")
    .addEventListener("click", removeCardHandler);

  cardsElement.prepend(cardElement);
};

const addCardHandler = (evt) => {
  evt.preventDefault();

  addCard({
    name: nameAddPlace.value,
    link: linkAddPlace.value,
  });

  formAddPlace.reset();
  closePopupAddPlace();
};

const cardLike = (evt) =>
  evt.target
    .closest(".card__button-like")
    .classList.toggle("card__button-like_active");

const removeCardHandler = (evt) => evt.target.closest("li").remove();

/** Call Function */

initialCards.forEach((card) => addCard(card));

buttonEditProfile.addEventListener("click", openPopupEditProfile);
buttonCloseEditProfile.addEventListener("click", closePopupEditProfile);
formEditProfile.addEventListener("submit", submitFormProfile);

buttonAddPlace.addEventListener("click", openPopupAddPlace);
buttonCloseAddPlace.addEventListener("click", closePopupAddPlace);
formAddPlace.addEventListener("submit", addCardHandler);

buttonClosePopupCard.addEventListener("click", closePopupCard);
