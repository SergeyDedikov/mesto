const showInputError = (formElement, inputElement, errorElement, inputErrorClass, errorClass) => {
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(errorClass);
};

const hideInputError = (formElement, inputElement, errorElement, inputErrorClass, errorClass) => {
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, errorElement, inputErrorClass, errorClass);
  } else {
    hideInputError(formElement, inputElement, errorElement, inputErrorClass, errorClass);
  }
};

const toggleButtonState = () => {};

const setEventListeners = (formElement, inputErrorClass, errorClass) => {
  formElement.addEventListener("submit", (evt) => {
    evt.prevetDefault();
  });

  const inputList = Array.for(
    formElement.querySelectorAll("config.inputSelector")
  );
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(
        formElement,
        inputElement,
        inputErrorClass,
        errorClass
      );
      toggleButtonState();
    });
  });
};

const enableValidation = (config) => {
  const formList = document.querySelectorAll("config.formSelector");
  formList.forEach((formElement) => {
    setEventListeners(formElement, config.inputErrorClass, config.errorClass);
  });
  /*

*/
  return config;
};

/**
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
*/
