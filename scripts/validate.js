const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
console.log(validationConfig);

const showInputError = (
  formElement,
  inputElement,
  errorElement,
  inputErrorClass,
  errorClass
) => {
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(errorClass);
};

const hideInputError = (
  formElement,
  inputElement,
  errorElement,
  inputErrorClass,
  errorClass
) => {
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (
  formElement,
  inputElement,
  inputErrorClass,
  errorClass
) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      errorElement,
      inputErrorClass,
      errorClass
    );
  } else {
    hideInputError(
      formElement,
      inputElement,
      errorElement,
      inputErrorClass,
      errorClass
    );
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const hasEmptyInput = (inputList) => {
  return inputList.every((inputElement) => {
    return inputElement.value.lenght === 0;
  });
};

const disableButtonSubmit = (buttonElement, inactiveButtonClass) => {
  buttonElement.classList.add(inactiveButtonClass);
};

const enableButtonSubmit = (buttonElement, inactiveButtonClass) => {
  buttonElement.classList.remove(inactiveButtonClass);
};

const toggleButtonState = (
  formElement,
  inputList,
  submitButtonSelector,
  inactiveButtonClass
) => {
  const buttonElement = formElement.querySelector(submitButtonSelector);

  if (hasInvalidInput(inputList) || hasEmptyInput(inputList)) {
    disableButtonSubmit(buttonElement, inactiveButtonClass);
  } else {
    enableButtonSubmit(buttonElement, inactiveButtonClass);
  }
};

const setEventListeners = (
  formElement,
  inputSelector,
  submitButtonSelector,
  inputErrorClass,
  errorClass,
  inactiveButtonClass
) => {
  formElement.addEventListener("submit", (evt) => {
    evt.prevetDefault();
  });

  toggleButtonState(
    formElement,
    inputList,
    submitButtonSelector,
    inactiveButtonClass
  );
  
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(
        formElement,
        inputElement,
        inputErrorClass,
        errorClass
      );
      toggleButtonState(
        formElement,
        inputList,
        submitButtonSelector,
        inactiveButtonClass
      );
    });
  });
};

function enableValidation(config) {
  const formList = document.querySelectorAll(config.formSelector);
  formList.forEach((formElement) => {
    setEventListeners(
      formElement,
      config.inputSelector,
      config.submitButtonSelector,
      config.inputErrorClass,
      config.errorClass,
      config.inactiveButtonClass
    );
  });
}

enableValidation(validationConfig);
console.log(enableValidation(validationConfig));
