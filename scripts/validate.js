const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const showInputError = (
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
  inputElement,
  errorElement,
  inputErrorClass,
  errorClass
) => {
  errorElement.classList.remove(errorClass);
  errorElement.textContent = "";
  inputElement.classList.remove(inputErrorClass);
};

const checkInputValidity = (
  formElement,
  inputElement,
  inputErrorClass,
  errorClass
) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  if (!inputElement.validity.valid) {
    showInputError(inputElement, errorElement, inputErrorClass, errorClass);
  } else {
    hideInputError(inputElement, errorElement, inputErrorClass, errorClass);
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

const isFormNotValid = (inputList) => {
  if (hasInvalidInput(inputList) || hasEmptyInput(inputList)) {
    return true;
  } else {
    return false;
  }
};

const disableButtonSubmit = (buttonElement, inactiveButtonClass) => {
  buttonElement.setAttribute("disabled", true);
  buttonElement.classList.add(inactiveButtonClass);
};

const enableButtonSubmit = (buttonElement, inactiveButtonClass) => {
  buttonElement.removeAttribute("disabled");
  buttonElement.classList.remove(inactiveButtonClass);
};

function toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
  if (isFormNotValid(inputList)) {
    disableButtonSubmit(buttonElement, inactiveButtonClass);
  } else {
    enableButtonSubmit(buttonElement, inactiveButtonClass);
  }
}

const setEventListeners = (
  formElement,
  inputSelector,
  submitButtonSelector,
  inputErrorClass,
  errorClass,
  inactiveButtonClass
) => {
  formElement.addEventListener("submit", () => {
    disableButtonSubmit(
      buttonElement,
      inactiveButtonClass
    );
  });

  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);

  toggleButtonState(inputList, buttonElement, inactiveButtonClass);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(
        formElement,
        inputElement,
        inputErrorClass,
        errorClass
      );
      toggleButtonState(inputList, buttonElement, inactiveButtonClass);
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
