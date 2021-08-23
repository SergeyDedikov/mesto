let popup = document.querySelector(".popup");
let editButton = document.querySelector(".profile__button_type_edit");
let closeButton = document.querySelector(".popup__button_type_close");
let formElement = document.querySelector(".popup__container");
let nameInput = formElement.querySelector(".popup__item_value_name");
let jobInput = formElement.querySelector(".popup__item_value_job");
let nameProfile = document.querySelector(".profile__name");
let jobProfile = document.querySelector(".profile__job");

function popupOpened() {
  popup.classList.add("popup_opened");
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function popupClosed() {
  popup.classList.remove("popup_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popupClosed();
}

editButton.addEventListener("click", popupOpened);
closeButton.addEventListener("click", popupClosed);
formElement.addEventListener("submit", formSubmitHandler);
