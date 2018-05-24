import * as ActionTypes from '../constants/constants'
import callApi from '../../utility/api.caller.service'
import auth from '../../utility/auth.service'
export const API_URL = '/api'

export function addPost (data) {
  return (dispatch) => {
    callApi('posts/create', 'post', data).then(res => {
    })
  }
}
