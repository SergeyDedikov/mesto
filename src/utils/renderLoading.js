export default function renderLoading(form, buttonText) {
  const button = form.querySelector(".popup__button");
  button.textContent = buttonText;
}
