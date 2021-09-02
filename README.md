# Практическая работа №5: Место

* Описание
* Особенности
* Ссылка на работу

______________

**Описание**

Практическая работа №5 курса "Веб-разработчик" Яндекс.Практикума — продолжение разработки проекта **"Место"**, в котором продолжается изучение языка программирования **JavaScript**.

______________

**Особенности**

В этой работе появляется возможность добавления пользователем на страницу новых карточек мест с изображением и описанием посредством JavaScript по готовому шаблону в разметке.

```html
<template id="card-template">
    <li>
     ...
    </li>
  </template>
```

Происходит клонирование шаблона разметки и вставка с новым содержимым.

```javascript
const addCard = (card) => {
  const cardElement = cardTemplate.querySelector("li").cloneNode(true);
  cardElement.querySelector(".card__photo").src = card.link;
  cardElement.querySelector(".card__photo").alt = "На фотографии: " + card.name;
  cardElement.querySelector(".card__description").textContent = card.name;
  ...
```
Также происходит инициализация нескольких карточек из готового массива данных.

```javascript
const initialCards = [
  {
    name: "Архыз",
    link: "https:...jpg",
  },
  {
    name: "Челябинская область",
    link: "https:...jpg",
  },
  ...
```

Добавлены функции удаления карточек и отметки "Нравится".

```javascript
const cardLike = (evt) =>
  evt.target
    .closest(".card__button-like")
    .classList.toggle("card__button-like_active");

const removeCardHandler = (evt) => evt.target.closest("li").remove();
```

____

**Ссылка на работу**

Посмотреть практическую работу можно [здесь](https://sergeydedikov.github.io/mesto/index.html)
