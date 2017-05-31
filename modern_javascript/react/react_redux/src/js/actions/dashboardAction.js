import * as t from '../actionTypes';

export function setInfo(info) {
  return {
    type: t.SET_INFO,
    payload: info
  }
}
