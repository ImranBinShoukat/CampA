import * as ActionTypes from '../constants/constants';
import callApi from '../../utility/api.caller.service'

export function setBrowserName(data) {
  return {
    type: ActionTypes.LOAD_BROWSER_NAME,
    data
  };
}

export function setBrowserVersion(data) {
  return {
    type: ActionTypes.LOAD_BROWSER_VERSION,
    data
  };
}

export function showUserdetails(data) {
  return {
    type: ActionTypes.SHOW_USER_DETAILS,
    data
  };
}

export function getuserdetails () {
  return (dispatch) => {
    callApi('users').then(res => {
      dispatch(showUserdetails(res.payload))
    })
  }
}
