export default function renderLoading(isLoading, form) {
  if (isLoading) {
    // в форме ищем кнопку сабмит
    const button = form.querySelector(".popup__button");
    //в кнопке надпись сделать прозрачной
    button.classList.add('content_hidden');
    // найти элемент поверх кнопки(сделать стили и разметку)
    //элемент который поверх кнопки сделать видимым

  } else {

  }
}



/* submitButton.classList.add('spinner_visible');
    content.classList.add('content_hidden');


    spinner.classList.remove('spinner_visible');
    content.classList.remove('content_hidden'); */


    //element.setAttribute(name, value);
