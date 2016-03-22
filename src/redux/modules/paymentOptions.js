import Immutable from 'immutable'

// ------------------------------------
// Constants
// ------------------------------------
export const SET_FULL_NAME = 'SET_FULL_NAME'
export const SET_CARD_NUMBER = 'SET_CARD_NUMBER'
export const SET_EXPIRATION_DATE = 'SET_EXPIRATION_DATE'
export const SET_CCV = 'SET_CCV'

// ------------------------------------
// Actions
// ------------------------------------
export const setFullName = (fullName) => ({
  type: SET_FULL_NAME,
  payload: fullName
})

export const setCardNumber = (cardNumber) => ({
  type: SET_CARD_NUMBER,
  payload: cardNumber
})

export const setExpirationDate = (expirationDate) => ({
  type: SET_EXPIRATION_DATE,
  payload: expirationDate
})

export const setCCV = (ccv) => ({
  type: SET_CCV,
  payload: ccv
})

export const actions = {
  setFullName,
  setCardNumber,
  setExpirationDate,
  setCCV
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_FULL_NAME]: (state, action) => state.merge({ fullName: action.payload }),
  [SET_CARD_NUMBER]: (state, action) => state.merge({ cardNumber: action.payload }),
  [SET_EXPIRATION_DATE]: (state, action) => state.merge({ expirationDate: action.payload }),
  [SET_CCV]: (state, action) => state.merge({ ccv: action.payload }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.fromJS({
  fullName: '',
  cardNumber: '',
  expirationDate: '',
  ccv: '',
})

export default function accountInfoReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
