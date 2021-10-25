import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
  }

exec = (obj) => {
  const func = obj;
  return func;
};

  setEventListeners(el) {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this.exec(el);
      this.close();
    });
  }
}
