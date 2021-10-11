import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector(".popup__card-image");
    this._description = this._popup.querySelector(".popup__card-description");
  }

  open({ text, link }) {
    this._image.src = link;
    this._image.alt = "На фотографии: " + text;
    this._description.textContent = text;
    super.open();
    //super.setEventListeners();
  }
}
