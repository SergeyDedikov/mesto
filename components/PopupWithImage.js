import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(data, popupSelector) {
    super(popupSelector);
    this._name = data.name;
    this._link = data.link;
    this._image = this._popup.querySelector(".popup__card-image");
    this._description = this._popup.querySelector(
      ".popup__card-description"
    );
  }

  open() {
    this._image.src = this._link;
    this._image.alt = "На фотографии: " + this._name;
    this._description.textContent = this._name;
    super.open();
  }
}
