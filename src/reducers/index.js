import { combineReducers } from 'redux';

const uid = (state = 0, { type, uid }) => {
  switch (type) {
    case 'SET_USER_ID':
      return uid;

    default:
      return state;
  }
};

const reducer = {
  uid
};

export default combineReducers(reducer);
