# Практическая работа №6: Место

- Описание
- Особенности
- Ссылка на работу

---

**Описание**

Практическая работа №6 курса "Веб-разработчик" Яндекс.Практикума — продолжение разработки проекта **"Место"**, в котором продолжается изучение языка программирования **JavaScript**.

---

**Особенности**

В этой работе перед студентами поставлена задача: реализовать валидацию — проверку корректности — введённых пользователем данных.

Валидация проверяет все поля ввода в каждой форме посредством установки обработчиков событий:

```javascript
inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(
        formElement,
        inputElement,
        ...
```

Следит за состоянием кнопки отправки формы и переключает её доступность:

```javascript
toggleButtonState(
        formElement,
        inputList,
        ...
if (isFormNotValid(inputList)) {
    disableButtonSubmit(buttonElement, inactiveButtonClass);
  } else {
    enableButtonSubmit(buttonElement, inactiveButtonClass);
  }
```

Также происходит оттображение/скрытие ошибок при несоответствии введённых данных предназначенным для них полям:

```javascript
if (!inputElement.validity.valid) {
    showInputError(inputElement, errorElement, inputErrorClass, errorClass);
  } else {
    hideInputError(inputElement, errorElement, inputErrorClass, errorClass);
  }
```

Добавлена возможность закрывать открытый попап кнопкой Esc или кликом в пустоту.

```javascript
function openPopup(popup) {
  popup.classList.add("popup_opened");
  popup.addEventListener("click", closeOnClick);
  document.addEventListener("keydown", closeOnEsc);
}
```

---

**Ссылка на работу**

Посмотреть практическую работу можно [здесь](https://sergeydedikov.github.io/mesto/index.html)
