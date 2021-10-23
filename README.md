# Практическая работа №8: Место

- Описание
- Особенности
- Ссылка на работу

---

**Описание**

Практическая работа №8 курса "Веб-разработчик" Яндекс.Практикума — продолжение разработки проекта **"Место"**, c дальнейшим изучением классов в языке программирования **JavaScript**.

В этой работе создали новые классы:
- для каждого попапа;
- для блока с информацией о пользователе;
- класс-слой для взаимодействия других классов.

---

**Особенности**

Класс Card претерпел изменения: теперь обработчик клика по изображению для вызова превью передаёт объект в глобальную область, тем самым, избавились от импорта в класс необходимых для этого переменных.

```javascript
_openPopup = () => {
    this._handleCardClick({
      //передадим объект во внешнюю функцию
      text: this._name,
      link: this._link,
    });
  };
```

Теперь карточки отрисовываются на страницу посредством класса Section:

```javascript
const cardList = new Section(
  {
    items: initCards,
    renderer: (cardItem) => {
      cardList.addItem(renderCard(cardItem));
    },
  },
  cardsContainer
);

cardList.renderItems();
```

Более хитроумно получаем информацию о пользователе со страницы и отображаем в полях ввода данных в соответсвующей форме при открытии последней:

```javascript
const userInfo = new UserInfo(".profile__name", ".profile__job");

function getUserData() {                           //обработчик данных о пользователе
  const data = userInfo.getUserInfo();             //получаем объект с данными
  for (let input in data) {                        // переберём ключи в объекте
    const formUser = document.forms.editProfile;   //определим форму
    formUser.elements[input].value = data[input];  //заменим значения полей ввода в форме
  }
}
```

И самое важное изменение в проекте — **инициализация npm и настройка Webpack.**
Теперь происходит сборка и минимизация кода в три файла HTML, CSS и JS c необходимыми изображениами в одной директории.

```javascript
{
  "name": "mesto",
  "version": "1.0.0",
  "description": "sprint8",
  "main": "index.js",
  "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack serve"
  },
  "author": "Serega Dedikov",
  "license": "YNDX",
  "devDependencies": {
    "@babel/core": "^7.15.5",
    "@babel/preset-env": "^7.15.6",
    ...
```

---

**Ссылка на работу**

Посмотреть реализацию проекта **"Место"** можно [по ссылке](https://sergeydedikov.github.io/mesto/index.html)
