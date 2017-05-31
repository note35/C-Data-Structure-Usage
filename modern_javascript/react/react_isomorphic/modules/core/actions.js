import * as t from './actionTypes';

export function login() {
  return {
    type: t.CHANGE_LOGIN_STAT,
    payload: true
  }
}
export function logout() {
  return {
    type: t.CHANGE_LOGIN_STAT,
    payload: false
  }
}
