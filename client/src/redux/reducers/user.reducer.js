import * as ActionTypes from '../constants/constants'
const initialState = {
}
export function userInfo (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SHOW_USERS:
      return Object.assign({}, state, {
        users: action.data
      })

    default:
      return state
  }
}
