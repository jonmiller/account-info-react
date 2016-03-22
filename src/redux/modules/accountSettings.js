import Immutable from 'immutable'

// ------------------------------------
// Constants
// ------------------------------------
export const SET_EMAIL = 'SET_EMAIL'

// ------------------------------------
// Actions
// ------------------------------------
export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email
})

export const actions = {
  setEmail
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_EMAIL]: (state, action) => state.merge({ email: action.payload })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.fromJS({
  email: 'test.email@example.com'
})

export default function accountInfoReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
