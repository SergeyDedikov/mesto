export default class Api {
  constructor(config) {
    this._apiUrl = config.apiUrl;
    this._cohortId = config.cohortId;
    this._tokenId = config.tokenId;
    this._headers = {
      authorization: this._tokenId,
      "Content-Type": "application/json",
    };
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
      headers: this._headers,
    }).then(this._checkResult);
  }

  getUserInfo() {
    return fetch(`${this._apiUrl}/v1/${this._cohortId}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResult);
  }
}
