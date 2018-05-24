import * as ActionTypes from '../constants/constants'
import callApi from '../../utility/api.caller.service'
import auth from '../../utility/auth.service'
export const API_URL = '/api'

export function showUsers(data) {
  return {
    type: ActionTypes.SHOW_USERS,
    data
  };
}

export function getUsers () {
  return (dispatch) => {
    callApi('users/getAllUsers').then(res => {
      console.log('users', res.payload)
      dispatch(showUsers(res.payload))
    })
  }
}

export function deleteUser (data) {
  return (dispatch) => {
    callApi('users/delete', 'delete', data).then(res => {
      dispatch(getUsers())
    })
  }
}

export function addUser (data) {
  return (dispatch) => {
    callApi('users/add', 'post', data).then(res => {
      dispatch(getUsers())
    })
  }
}

export function editUser (data) {
  return (dispatch) => {
    callApi('users/update', 'post', data).then(res => {
      dispatch(getUsers())
    })
  }
}
