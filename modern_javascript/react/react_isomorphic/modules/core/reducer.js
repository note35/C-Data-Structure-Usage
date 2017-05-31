import * as t from './actionTypes';

const initStatus = {
  loginStat: false,
};

export default function reducer(state=initStatus, action) {

  switch(action.type) {
    case t.CHANGE_LOGIN_STAT: {
      return {
        ...state,
        loginStat: action.payload
      }
    }

  }
  return state;
}
