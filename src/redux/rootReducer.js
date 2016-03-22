import { combineReducers } from 'redux-immutablejs'
import { reducer as formReducer } from 'redux-form'
import Immutable from 'immutable'

import router from 'redux/modules/router'
import accountSettings from 'redux/modules/accountSettings'
import paymentOptions from 'redux/modules/paymentOptions'

export default combineReducers({
  router,
  accountSettings,
  paymentOptions,
  form: (state = Immutable.fromJS({}), action) => Immutable.fromJS(formReducer(state.toJS(), action))
})
