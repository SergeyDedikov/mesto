/** Popup Functions */

function closeOnClick(evt) {
  if (evt.target.classList.contains("popup")) {
    closePopup(evt.target);
  }
}

function closeOnEsc(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  popup.addEventListener("click", closeOnClick);
  document.addEventListener("keydown", closeOnEsc);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  popup.removeEventListener("click", closeOnClick);
  document.removeEventListener("keydown", closeOnEsc);
}

export {
  openPopup,
  closePopup,
};
