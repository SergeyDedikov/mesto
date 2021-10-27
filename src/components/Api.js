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

  changeAvatar(cardData) {
    return fetch(`${this._apiUrl}/v1/${this._cohortId}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._tokenId,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: cardData.avatar,
      }),
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

  _addLike(cardId) {
    return fetch(
      `${this._apiUrl}/v1/${this._cohortId}/cards/likes/${cardId}`,
      {
        method: "PUT",
        headers: {
          authorization: this._tokenId,
          "Content-Type": "application/json",
        },
      }
    ).then(this._checkResult);
  }

  _deleteLike(cardId) {
    return fetch(
      `${this._apiUrl}/v1/${this._cohortId}/cards/likes/${cardId}`,
      {
        method: "DELETE",
        headers: {
          authorization: this._tokenId,
          "Content-Type": "application/json",
        },
      }
    ).then(this._checkResult);
  }

  changeLikeCardStatus(cardId, isLiked) {
    if (!isLiked) {
      return this._addLike(cardId);
    } else {
      return this._deleteLike(cardId);
    }
  }
}
