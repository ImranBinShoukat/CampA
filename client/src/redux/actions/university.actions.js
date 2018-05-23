import * as ActionTypes from '../constants/constants'
import callApi from '../../utility/api.caller.service'
import auth from '../../utility/auth.service'
export const API_URL = '/api'

export function uploadFile (filedata, handleFunction) {
  return (dispatch) => {
    // eslint-disable-next-line no-undef
    fetch(`${API_URL}/post/uploadFile`, {
      method: 'post',
      body: filedata,
      // eslint-disable-next-line no-undef
      headers: new Headers({
        'Authorization': `Bearer ${auth.getToken()}`
      })
    }).then((res) => res.json()).then((res) => res).then(res => {
      handleFunction(res.payload)
    })
  }
}

export function showUniversities(data) {
  return {
    type: ActionTypes.SHOW_UNIVERSITIES,
    data
  };
}

export function getUniversities () {
  return (dispatch) => {
    callApi('universities').then(res => {
      dispatch(showUniversities(res.payload))
    })
  }
}
