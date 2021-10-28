export default class Card {
  constructor(
    { data, handleCardClick, handleDeleteIconClick, handleLikeClick },
    selector,
    myId
  ) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._cardId = data._id;
    this._selector = selector;
    this._myId = myId.id;
    this._cardOwnerId = data.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._handleLikeClick = handleLikeClick;
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

  _likeCard = (evt) => {
    this._handleLikeClick(evt.target);
  };

  _removeCardHandler = () => {
    this._handleDeleteIconClick(this._element);
  };

  counterLikes(likes) {
    // счётчик лайков
    const countLikes = this._element.querySelector(".card__likes-count");
    countLikes.textContent = likes.length;
  }

  _checkMyLike() {
    //проверим массив лайков на наличие нашего
    this._likes.forEach((item) => {
      //если наш id в списке, то меняем состояние кнопки
      if (item._id === this._myId) {
        this._element
          .querySelector(".card__button-like")
          .classList.add("card__button-like_active");
      }
    });
  }

  _checkMyCard() {
    // иконка удаления удалится, если myId не мой
    if (this._cardOwnerId !== this._myId) {
      this._element.querySelector(".card__button-remove").remove();
    }
  }

  generateCard() {
    this._element = this._getElement();
    this._setEventListeners();
    this._checkMyCard();
    this._checkMyLike();
    this.counterLikes(this._likes);

    const cardImage = this._element.querySelector(".card__photo");
    cardImage.src = this._link;
    cardImage.alt = "На фотографии: " + this._name;
    this._element.querySelector(".card__description").textContent = this._name;

    // Вернём элемент наружу
    return this._element;
  }
}
