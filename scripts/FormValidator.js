const validConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

class FormValidator {
  constructor(validConfig) {
    this._formSelector = validConfig.formSelector;
    this._inputSelector = validConfig.inputSelector;
    this._submitButtonSelector = validConfig.submitButtonSelector;
    this._inactiveButtonClass = validConfig.inactiveButtonClass;
    this._inputErrorClass = validConfig.inputErrorClass;
    this._errorClass = validConfig.errorClass;
  }

  _getElement() {}

  _setEventListeners() {
    this._formSelector.addEventListener("submit", this._disableButtonSubmit());
    this._toggleButtonState();
  }

  _disableButtonSubmit() {
    this._submitButtonSelector.setAttribute("disabled", true);
    this._submitButtonSelector.classList.add(this._inactiveButtonClass);
  }


}
