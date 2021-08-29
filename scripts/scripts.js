const popup = document.querySelector(".popup");
const buttonEditProfile = document.querySelector(".profile__button_type_edit");
const buttonClose = document.querySelector(".popup__button_type_close");
const formElement = document.querySelector(".popup__container");
const nameInput = formElement.querySelector(".popup__item_value_name");
const jobInput = formElement.querySelector(".popup__item_value_job");
const nameProfile = document.querySelector(".profile__name");
const jobProfile = document.querySelector(".profile__job");

function openPopup() {
  popup.classList.add("popup_opened");
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

function submitFormHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup();
}

buttonEditProfile.addEventListener("click", openPopup);
buttonClose.addEventListener("click", closePopup);
formElement.addEventListener("submit", submitFormHandler);
