import * as ActionTypes from '../constants/constants'
const initialState = {
}
export function societyInfo (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SHOW_SOCIETIES:
      return Object.assign({}, state, {
        societies: action.data
      })

    default:
      return state
  }
}
