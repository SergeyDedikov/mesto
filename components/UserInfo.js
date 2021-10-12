export default class UserInfo {
  constructor(nameProfile, jobProfile) {
    this._name = document.querySelector(nameProfile);
    this._job = document.querySelector(jobProfile);
  }

  getUserInfo() {
    let userInfo = {};
    userInfo.name = this._name.textContent;
    userInfo.job = this._job.textContent;
    return userInfo;
  }

  setUserInfo({ name, job }) {
    this._name.textContent = name;
    this._job.textContent = job;
  }
}
