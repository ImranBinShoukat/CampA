import * as ActionTypes from '../constants/constants'
import callApi from '../../utility/api.caller.service'
import auth from '../../utility/auth.service'
export const API_URL = '/api'

export function showSocities(data) {
  return {
    type: ActionTypes.SHOW_SOCIETIES,
    data
  };
}

export function getSocieties (universityId) {
  return (dispatch) => {
    callApi(`societies/${universityId}`).then(res => {
      console.log('societies', res.payload)
      dispatch(showSocities(res.payload))
    })
  }
}

export function deleteSociety (data, universityId) {
  return (dispatch) => {
    callApi('societies/delete', 'delete', data).then(res => {
      dispatch(getSocieties(universityId))
    })
  }
}

export function makeOfficeBearer (data) {
  return (dispatch) => {
    callApi('users/makeOfficeBearer', 'post', data).then(res => {})
  }
}

export function editSociety (data) {
  return (dispatch) => {
    callApi('societies/update', 'post', data).then(res => {
      dispatch(getSocieties(data.universityId))
    })
  }
}

export function addSociety (data) {
  return (dispatch) => {
    callApi('societies/add', 'post', data).then(res => {
      dispatch(getSocieties(data.universityId))
      dispatch(makeOfficeBearer({userId: data.officeBearers[0]}))
    })
  }
}
