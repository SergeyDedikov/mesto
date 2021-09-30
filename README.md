# Практическая работа №7: Место

- Описание
- Особенности
- Ссылка на работу

---

**Описание**

Практическая работа №7 курса "Веб-разработчик" Яндекс.Практикума — продолжение разработки проекта **"Место"**, c дальнейшим изучением языка программирования **JavaScript**.

---

**Особенности**

В этой работе перед студентами поставлена задача: провести рефакторинг кода для блока создания карточек мест и блока валидации форм посредством реализации классов JS и разделения кода на отдельные модули.

Класс Card в отдельном модуле Card.js принимает импортированные параметры и содержит конструктор и методы для создания элемента карточек:

```javascript
import {
  popupCard,
  cardImagePopup,
  cardImagePopupDescript
} from "./consts.js";

import { openPopup } from "./utils.js";

export class Card {
  constructor(data, selector) {
    this._name = data.name;
    this._link = data.link;
    this._selector = selector;
  }
  ...
```

Затем в index.js отрисовываются на страницу :

```javascript
initCards.forEach((item) => {
  const card = new Card(item, "#card-template");
  cardsContainer.append(card.generateCard());
});
```

Подобным образом реализована работа класса FormValidator для валидации форм:

```javascript
export class FormValidator {
  constructor(validConfig, formElement) {
    this._formElement = formElement;
    this._inputSelector = validConfig.inputSelector;
    this._submitButtonSelector = validConfig.submitButtonSelector;
    this._inactiveButtonClass = validConfig.inactiveButtonClass;
    ...
    enableValidation() {
    this._setEventListeners();
  }
}
```

```javascript
const formAddPlaceValidator = new FormValidator(validConfig, formAddPlace);
formAddPlaceValidator.enableValidation();
```

---

**Ссылка на работу**

Посмотреть реализацию проекта **"Место"** можно [по ссылке](https://sergeydedikov.github.io/mesto/index.html)
