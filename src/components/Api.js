export default class Api {
  constructor(config) {
    this._apiUrl = config.apiUrl;
    this._cohortId = config.cohortId;
    this._tokenId = config.tokenId;
  }

  getInitialCards() {
    return fetch(`${this._apiUrl}/v1/${this._cohortId}/cards`, {
      method: "GET",
      headers: {
        authorization: this._tokenId,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }



}
