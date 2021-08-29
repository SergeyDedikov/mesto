/** Edit Profile Constant */

const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const buttonEditProfile = document.querySelector(".profile__button_type_edit");
const formEditProfile = document.querySelector(".popup__container_type_edit-profile");
const buttonCloseEditProfile = document.querySelector(
  ".popup__button_type_close-edit-profile"
);
const nameInput = formEditProfile.querySelector(".popup__item_value_name");
const jobInput = formEditProfile.querySelector(".popup__item_value_job");
const nameProfile = document.querySelector(".profile__name");
const jobProfile = document.querySelector(".profile__job");

/** Add Place Constant */

const popupAddPlace = document.querySelector(".popup_type_add-place");
const buttonAddPlace = document.querySelector(".profile__button_type_add");
const formAddPlace = document.querySelector(".popup__container_type_add-place");
const buttonCloseAddPlace = document.querySelector(
  ".popup__button_type_close-add-place"
);

/** Edit Profile Function */

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

/** Add Place Function */

function openPopupAddPlace() {
  popupAddPlace.classList.add("popup_opened");
}

function closePopupAddPlace() {
  popupAddPlace.classList.remove("popup_opened");
}
/*
function submitAddPlace() {

}
*/
/** Call Function */

buttonEditProfile.addEventListener("click", openPopupEditProfile);
buttonCloseEditProfile.addEventListener("click", closePopupEditProfile);
formEditProfile.addEventListener("submit", submitFormProfile);

buttonAddPlace.addEventListener("click", openPopupAddPlace);
buttonCloseAddPlace.addEventListener("click", closePopupAddPlace);
formEditProfile.addEventListener("submit", submitAddPlace);
