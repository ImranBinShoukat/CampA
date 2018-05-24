import * as ActionTypes from '../constants/constants'
import callApi from '../../utility/api.caller.service'
import auth from '../../utility/auth.service'
export const API_URL = '/api'

export function uploadFile (filedata, handleFunction) {
  console.log(filedata)
  return (dispatch) => {
    // eslint-disable-next-line no-undef
    fetch(`${API_URL}/posts/uploadFile`, {
      method: 'post',
      body: filedata,
      // eslint-disable-next-line no-undef
      headers: new Headers({
        'Authorization': `Bearer ${auth.getToken()}`
      })
    }).then((res) => res.json()).then((res) => res).then(res => {
      if (res.description) {
        console.log('error', res.description)
      }
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

export function deleteUniversity (data) {
  return (dispatch) => {
    callApi('universities/delete', 'delete', data).then(res => {
      dispatch(getUniversities())
    })
  }
}

export function addUniversity (data) {
  return (dispatch) => {
    callApi('universities/add', 'post', data).then(res => {
      dispatch(getUniversities())
    })
  }
}

export function editUniversity (data) {
  return (dispatch) => {
    callApi('universities/update', 'post', data).then(res => {
      dispatch(getUniversities())
    })
  }
}
