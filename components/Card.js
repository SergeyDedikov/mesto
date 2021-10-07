import { popupCard, cardImagePopup, cardImagePopupDescript } from "../utils/constants.js";

import { openPopup } from "./utils.js";

export class Card {
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
      .addEventListener("click", this._openPopup);
    this._element
      .querySelector(".card__button-like")
      .addEventListener("click", this._likeCard);
    this._element
      .querySelector(".card__button-remove")
      .addEventListener("click", this._removeCardHandler);
  }

  _openPopup = () => {
    openPopup(popupCard);
    cardImagePopup.src = this._link;
    cardImagePopup.alt = "На фотографии: " + this._name;
    cardImagePopupDescript.textContent = this._name;
  };

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
