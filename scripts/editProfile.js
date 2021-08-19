let formElement = document.querySelector(".popup__container");
let nameInput = formElement.querySelector(".popup__item_name");
let jobInput = formElement.querySelector(".popup__item_job");

function formSubmitHandler(evt) {
  evt.preventDefault();

  nameInput.getAttribute("value");
  jobInput.getAttribute("value");

  let nameProfile = document.querySelector(".profile__name");
  let jobProfile = document.querySelector(".profile__job");

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;

  popupClosed();
}
formElement.addEventListener("submit", formSubmitHandler);
