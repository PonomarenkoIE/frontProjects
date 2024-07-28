import { makeAutoObservable } from "mobx"

export default class UserStore {
  _isAuth: boolean;
  _user: object;

  constructor() {
    this._isAuth = false
    this._user = {}
    makeAutoObservable(this)
  }

  setIsAuth(value: boolean) {
    this._isAuth = value
  }

  setUser(value: object) {
    this._user = value
  }

  get isAuth() {
    return this._isAuth
  }

  get user() {
    return this._user
  }
}