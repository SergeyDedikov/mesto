# Практическая работа №5: Место

- Описание
- Особенности
- Ссылка на работу

---

**Описание**

Практическая работа №5 курса "Веб-разработчик" Яндекс.Практикума — продолжение разработки проекта **"Место"**, в котором продолжается изучение языка программирования **JavaScript**.

---

**Особенности**

В этой работе появляется возможность добавления пользователем на страницу новых карточек мест с изображением и описанием посредством JavaScript по готовому шаблону в разметке.

```html
<template id="card-template">
  <li>...</li>
</template>
```

Происходит клонирование шаблона разметки и вставка с новым содержимым.

```javascript
const creatCard = (data) => {
  const card = cardTemplate.querySelector("li").cloneNode(true);
  card.querySelector(".card__photo").src = data.link;
  card.querySelector(".card__photo").alt = "На фотографии: " + data.name;
  card.querySelector(".card__description").textContent = data.name;
  ...
  function renderCard(card) {
  cardsContainer.prepend(card);
}
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
const likeCard = (evt) =>
  evt.target.classList.toggle("card__button-like_active");

const removeCardHandler = (evt) => evt.target.closest("li").remove();
```

---

**Ссылка на работу**

Посмотреть практическую работу можно [здесь](https://sergeydedikov.github.io/mesto/index.html)
