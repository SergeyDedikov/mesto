export class FormValidator {
  constructor(validConfig, formSelector) {
    this._formSelector = formSelector;
    this._inputSelector = validConfig.inputSelector;
    this._submitButtonSelector = validConfig.submitButtonSelector;
    this._inactiveButtonClass = validConfig.inactiveButtonClass;
    this._inputErrorClass = validConfig.inputErrorClass;
    this._errorClass = validConfig.errorClass;
  }

  //_getElement() {}

  _showInputError() {
    this._inputSelector.classList.add(this._inputErrorClass);
    this._errorElement.textContent = this._inputSelector.validationMessage;
    this._errorElement.classList.add(this._errorClass);
  };

  _hideInputError() {
    this._errorElement.classList.remove(this._errorClass);
    this._errorElement.textContent = "";
    this._inputSelector.classList.remove(this._inputErrorClass);
  };

  _checkInputValidity() {
    console.log(this._formSelector.querySelector(this._inputSelector)
    .nextElementSibling);

    this._errorElement = this._formSelector.querySelector(this._inputSelector)
    .nextElementSibling;
    console.log(this._inputSelector.validity);


    if (!this._inputSelector.validity.valid) {
      this._showInputError();
    } else {
      this._hideInputError();
    }
  };

  _hasInvalidInput() {
    return this._inputList.some(() => {
      return !this._inputSelector.validity.valid;
    });
  };

  _hasEmptyInput() {
    return this._inputList.every(() => {
      return this._inputSelector.value.lenght === 0;
    });
  };

  _isFormNotValid() {
    if (this._hasInvalidInput || this._hasEmptyInput) {
      return true;
    } else {
      return false;
    }
  };

  _disableButtonSubmit() {
    this._buttonElement.setAttribute("disabled", true);
    this._buttonElement.classList.add(this._inactiveButtonClass);
  };

  _enableButtonSubmit() {
    this._buttonElement.removeAttribute("disabled");
    this._buttonElement.classList.remove(this._inactiveButtonClass);
  };

  _toggleButtonState() {
    if (this._isFormNotValid) {
      this._disableButtonSubmit;
    } else {
      this._enableButtonSubmit;
    }
  }

  _setEventListeners() {
    this._formSelector.addEventListener("submit", this._disableButtonSubmit);
    this._inputList = Array.from(
      this._formSelector.querySelectorAll(this._inputSelector)
    );

    this._buttonElement = this._formSelector.querySelector(
      this._submitButtonSelector
    );
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity();
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}
