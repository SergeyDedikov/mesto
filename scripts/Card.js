const cardsContainer = document.querySelector(".cards__list");
const initCards = [
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

class Card {
  constructor(data, selector) {
    this._name = data.name;
    this._link = data.link;
    this._selector = selector;
  }

  _getElement() {
    const cardElement = document
      .querySelector(this._selector)
      .content.querySelector("li")
      .cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__photo")
      .addEventListener("click", () => {
        openPopup(popupCard);
        cardImagePopup.src = this._link;
        cardImagePopup.alt = "На фотографии: " + this._name;
        cardImagePopupDescript.textContent = this._name;
      });

    this._element
      .querySelector(".card__button-like")
      .addEventListener("click", this._likeCard);
    this._element
      .querySelector(".card__button-remove")
      .addEventListener("click", this._removeCardHandler);
  }

  _likeCard = (evt) => evt.target.classList.toggle("card__button-like_active");

  _removeCardHandler = () => this._element.remove();

  generateCard() {
    this._element = this._getElement();
    this._setEventListeners();

    const cardImage = this._element.querySelector(".card__photo");
    cardImage.src = this._link;
    cardImage.alt = "На фотографии: " + this._name;
    this._element.querySelector(".card__description").textContent = this._name;

    // Вернём элемент наружу
    return this._element;
  }
}

initCards.forEach((item) => {
  const card = new Card(item, "#card-template");
  const cardElement = card.generateCard();

  cardsContainer.prepend(cardElement);
});

/*
const messageList = [
  {
    image: "https://code.s3.yandex.net/web-code/card__image.jpg",
    text: "Привет, нам срочно требуется доработать чат!",
  },
  {
    image: "https://code.s3.yandex.net/web-code/card__image-lake.jpg",
    text: "Теперь мы можем создавать сколько угодно карточек!",
  },
];

class Message {
  constructor(data, selector) {
    this._text = data.text;
    this._image = data.image;
    this._selector = selector;
  }

  _getElement() {
    const messageElement = document
      .querySelector(this._selector)
      .content.querySelector(".message")
      .cloneNode(true);

    return messageElement;
  }

  generate() {
    this._element = this._getElement();

    this._element.querySelector(".message__avatar").src = this._image;
    this._element.querySelector(".message__paragraph").textContent = this._text;

    return this._element;
  }
}
 */
