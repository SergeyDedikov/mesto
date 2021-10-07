export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._buttonClose = this._popup.querySelector('.popup__close');
  }

  open() {
    this._popup.classList.add("popup_opened");
    this.setEventListeners();
  }

  close() {
    this._popup.classList.remove("popup_opened");
    this.removeEventListeners();
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _closeOnClick = (evt) => {
    if (evt.target.classList.contains("popup")) {
      this.close();
    }
  }

  setEventListeners() {
    document.addEventListener("keydown", this._handleEscClose);
    this._buttonClose.addEventListener("click", this.close());
    this._popup.addEventListener("click", this._closeOnClick);
  }

  removeEventListeners() {
    document.removeEventListener("keydown", this._handleEscClose);
    this._buttonClose.removeEventListener("click", this.close());
    this._popup.removeEventListener("click", this._closeOnClick);
  }
}
