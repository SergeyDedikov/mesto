# Практическая работа №9: Место

- Описание
- Особенности
- Ссылка на работу

---

**Описание**

Практическая работа №9 курса "Веб-разработчик" Яндекс.Практикума — продолжение разработки проекта **"Место"**, c дальнейшим изучением **JavaScript**.

---

**Особенности**

В этой работе мы познакомились с асинхронностью, промисами и технологией API.
Подключили свой проект к серверу. Теперь все изменения на странице сохраняются.

Создан новый класс API, который отвечает за все запросы к серверу.

```javascript
getInitialCards() {
    return fetch(`${this._apiUrl}/v1/${this._cohortId}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResult);
  }
```

Через запросы API мы получаем данные о пользователе, о карточках и их лайках. Теперь количество лайков отображается на каждой карточке.

```javascript
counterLikes(likes) {
    // счётчик лайков
    const countLikes = this._element.querySelector(".card__likes-count");
    countLikes.textContent = likes.length;
  }
```

Добавилась возможность изменять аватар пользователя через новую форму.

```javascript
const popupEditAvatar = new PopupWithForm(
  ".popup_type_edit-avatar",
  ({ avatar }) => {
    const data = { avatar: avatar };
    renderLoading(formEditAvatar, "Сохранение...");
    api
      .changeAvatar(data)
      .then((res) => {
        avatarUser.src = res.avatar;
      })
```

Удаление карточки происходит только нашей, поэтому иконка корзины не отображается на чужих карточках.

```javascript
  _checkMyCard() {
    // иконка удаления удалится, если myId не мой
    if (this._cardOwnerId !== this._myId) {
      this._element.querySelector(".card__button-remove").remove();
    }
  }
```

---

**Ссылка на работу**

Посмотреть реализацию проекта **"Место"** можно [по ссылке](https://sergeydedikov.github.io/mesto/index.html)
