const popupEditProfile = document.querySelector(".popup_edit-profile");
const popupAddPlace = document.querySelector(".popup_add-place");
const buttonEditProfile = document.querySelector(".profile__button_type_edit");
const buttonAddPlace = document.querySelector(".profile__button_type_add");
const formElement = document.querySelector(".popup__container");
const buttonCloseEditProfile = document.querySelector(
  ".popup__button_type_close-edit-profile"
);
const buttonCloseAddPlace = document.querySelector(
  ".popup__button_type_close-add-place"
);

const nameInput = formElement.querySelector(".popup__item_value_name");
const jobInput = formElement.querySelector(".popup__item_value_job");
const nameProfile = document.querySelector(".profile__name");
const jobProfile = document.querySelector(".profile__job");

function openPopupEditProfile() {
  popupEditProfile.classList.add("popup_opened");
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function closePopupEditProfile() {
  popupEditProfile.classList.remove("popup_opened");
}

function submitFormProfile(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopupEditProfile();
}

function openPopupAddPlace() {
  popupAddPlace.classList.add("popup_opened");
}

function closePopupAddPlace() {
  popupAddPlace.classList.remove("popup_opened");
}

buttonEditProfile.addEventListener("click", openPopupEditProfile);
buttonCloseEditProfile.addEventListener("click", closePopupEditProfile);
formElement.addEventListener("submit", submitFormProfile);

buttonAddPlace.addEventListener("click", openPopupAddPlace);
buttonCloseAddPlace.addEventListener("click", closePopupAddPlace);
