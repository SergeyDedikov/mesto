export default class UserInfo {
  constructor(nameProfile, jobProfile, avatarProfile) {
    this._name = document.querySelector(nameProfile);
    this._job = document.querySelector(jobProfile);
    this._avatar = document.querySelector(avatarProfile);
  }

  setUserInfo({ name, job }) {
    this._name.textContent = name;
    this._job.textContent = job;
  }

  setFullUserInfo(data) {
    this.setUserInfo({
      name: data.name,
      job: data.about,
    });
    this._avatar.src = data.avatar;
  }

  getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      job: this._job.textContent,
    };
    return userInfo;
  }
}
