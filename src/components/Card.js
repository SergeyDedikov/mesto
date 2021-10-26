export default class Card {
  constructor({ data, handleCardClick, handleDeleteIconClick }, selector, myId) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    //this._cardId = data._id;
    this._selector = selector;
    this._myId = myId.id;
    this._cardOwnerId = data.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
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
      .addEventListener("click", this._openPopup);
    this._element
      .querySelector(".card__button-like")
      .addEventListener("click", this._likeCard);
    this._element
      .querySelector(".card__button-remove")
      .addEventListener("click", this._removeCardHandler);
  }

  _openPopup = () => {
    this._handleCardClick({
      //передадим объект во внешнюю функцию
      text: this._name,
      link: this._link,
    });
  };

  _likeCard = (evt) => evt.target.classList.toggle("card__button-like_active");

  _removeCardHandler = () => {
    this._handleDeleteIconClick(this._element);
  };

  generateCard() {
    this._element = this._getElement();
    this._setEventListeners();

    const cardImage = this._element.querySelector(".card__photo");
    cardImage.src = this._link;
    cardImage.alt = "На фотографии: " + this._name;
    this._element.querySelector(".card__description").textContent = this._name;

    // счётчик лайков
    const countLikes = this._element.querySelector(".card__likes-count");
    countLikes.textContent = this._likes.length;

    // иконка удаления удалится, если myId не мой "6c4e7c68396210e48577d2c5"
    if (this._cardOwnerId !== this._myId) {
      this._element
        .querySelector(".card__button-remove").remove();
    }

    // Вернём элемент наружу
    return this._element;
  }
}
