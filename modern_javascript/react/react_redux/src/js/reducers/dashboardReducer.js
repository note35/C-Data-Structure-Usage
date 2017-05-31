import * as t from '../actionTypes';

const initStatus = {
  info: "",
};

export default function reducer(state=initStatus, action) {

  switch(action.type) {

    case t.SET_INFO: {
      return {
        ...state,
        info: action.payload,
      }
    }

  }
  return state;
}
