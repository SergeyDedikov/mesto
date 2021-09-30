export class FormValidator {
  constructor(validConfig, formElement) {
    this._formElement = formElement;
    this._inputSelector = validConfig.inputSelector;
    this._submitButtonSelector = validConfig.submitButtonSelector;
    this._inactiveButtonClass = validConfig.inactiveButtonClass;
    this._inputErrorClass = validConfig.inputErrorClass;
    this._errorClass = validConfig.errorClass;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );
  }

  _showInputError(inputElement, errorElement) {
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement, errorElement) {
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
    inputElement.classList.remove(this._inputErrorClass);
  }

  _checkInputValidity = (inputElement) => {
    const errorElement = inputElement.nextElementSibling;
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, errorElement);
    } else {
      this._hideInputError(inputElement, errorElement);
    }
  };

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _hasEmptyInput() {
    return this._inputList.every((inputElement) => {
      return inputElement.value.length === 0;
    });
  }

  _isFormNotValid() {
    if (this._hasInvalidInput() || this._hasEmptyInput()) {
      return true;
    } else {
      return false;
    }
  }

  _toggleButtonState() {
    if (this._isFormNotValid()) {
      this._disableButtonSubmit();
    } else {
      this._enableButtonSubmit();
    }
  }

  _disableButtonSubmit = () => {
    this._buttonElement.setAttribute("disabled", true);
    this._buttonElement.classList.add(this._inactiveButtonClass);
  };

  _enableButtonSubmit = () => {
    this._buttonElement.removeAttribute("disabled");
    this._buttonElement.classList.remove(this._inactiveButtonClass);
  };

  _setEventListeners = () => {
    this._formElement.addEventListener("submit", this._disableButtonSubmit);
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  enableValidation() {
    this._setEventListeners();
  }
}
