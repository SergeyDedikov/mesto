export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._buttonClose = this._popup.querySelector(".popup__close");
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  _closeOnClick = (evt) => {
    if (evt.target.classList.contains("popup")) {
      this.close();
    }
  };

  open() {
    this._popup.classList.add("popup_opened");

    document.addEventListener("keydown", this._handleEscClose);
    this._popup.addEventListener("click", this._closeOnClick);
    this._buttonClose.addEventListener("click", () => this.close());
  }

  close() {
    this._popup.classList.remove("popup_opened");
    //this._removeEventListeners();
    document.removeEventListener("keydown", this._handleEscClose);
    this._popup.removeEventListener("click", this._closeOnClick);
    this._buttonClose.removeEventListener("click", () => this.close());
  }
/*
  setEventListeners() {
    this._popupElement.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
        this.close();
      }
    });
  } */

}
