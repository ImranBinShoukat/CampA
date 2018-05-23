import * as ActionTypes from '../constants/constants'
const initialState = {
  universities: []
}
export function universityInfo (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_FAILURE:
      return Object.assign({}, state, {
        errorMessage: action.errorMessage
      })
    case ActionTypes.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        successMessage: action.successMessage
      })
    case ActionTypes.FORGOT_FAILURE:
      return Object.assign({}, state, {
        errorForgot: action.errorMessage
      })
    case ActionTypes.FORGOT_SUCCESS:
      return Object.assign({}, state, {
        successForgot: action.successMessage
      })
    default:
      return state
  }
}
