export default class Api {
  constructor(config) {
    this._apiUrl = config.apiUrl;
    this._cohortId = config.cohortId;
    this._tokenId = config.tokenId;
  }

  _checkResult = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  };

  getInitialCards() {
    return fetch(`${this._apiUrl}/v1/${this._cohortId}/cards`, {
      method: "GET",
      headers: { authorization: this._tokenId },
    }).then(this._checkResult);
  }

  getUserInfo() {
    return fetch(`${this._apiUrl}/v1/${this._cohortId}/users/me`, {
      method: "GET",
      headers: { authorization: this._tokenId },
    }).then(this._checkResult);
  }

  setUserInfo(userData) {
    return fetch(`${this._apiUrl}/v1/${this._cohortId}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._tokenId,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userData.name,
        about: userData.job,
      }),
    }).then(this._checkResult);
  }

  addNewCard(cardData) {
    return fetch(`${this._apiUrl}/v1/${this._cohortId}/cards`, {
      method: "POST",
      headers: {
        authorization: this._tokenId,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: cardData.name,
        link: cardData.link,
      }),
    }).then(this._checkResult);
  }

  deleteCard(cardData) {
    return fetch(`${this._apiUrl}/v1/${this._cohortId}/cards/${cardData._id}`, {
      method: "DELETE",
      headers: {
        authorization: this._tokenId,
        "Content-Type": "application/json",
      },
    }).then(this._checkResult);
  }

  addLike(cardData) {
    return fetch(`${this._apiUrl}/v1/${this._cohortId}/cards/likes/${cardData._id}`, {
      method: "PUT",
      headers: {
        authorization: this._tokenId,
        "Content-Type": "application/json",
      },
    }).then(this._checkResult);
  }

  deleteLike(cardData) {
    return fetch(`${this._apiUrl}/v1/${this._cohortId}/cards/likes/${cardData._id}`, {
      method: "DELETE",
      headers: {
        authorization: this._tokenId,
        "Content-Type": "application/json",
      },
    }).then(this._checkResult);
  }

}
