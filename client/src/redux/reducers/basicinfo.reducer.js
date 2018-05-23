import * as ActionTypes from '../constants/constants';

const initialState = {
  browserName: '',
  browserVersion: ''
};

export function basicInfo(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOAD_BROWSER_NAME:
      return Object.assign({}, state, {
        browserName: action.data
      });

    case ActionTypes.LOAD_BROWSER_VERSION:
      return Object.assign({}, state, {
        browserVersion: action.data
      });

    case ActionTypes.SHOW_USER_DETAILS:
      return Object.assign({}, state, {
        userdetails: action.data
      });

    default:
      return state;
  }
}
