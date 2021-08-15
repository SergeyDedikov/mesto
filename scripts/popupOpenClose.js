let popup = document.querySelector(".popup");
let editButton = document.querySelector(".profile__button_edit");
let closeButton = document.querySelector(".popup__close");

function popupOpened() {
  popup.classList.add("popup_opened");
}
editButton.addEventListener("click", popupOpened);

function popupClosed() {
  popup.classList.remove("popup_opened");
}
closeButton.addEventListener("click", popupClosed);
