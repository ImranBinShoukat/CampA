import * as ActionTypes from '../constants/constants'
const initialState = {
}
export function universityInfo (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SHOW_UNIVERSITIES:
      return Object.assign({}, state, {
        universities: action.data
      })

    default:
      return state
  }
}
