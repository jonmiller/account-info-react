import React from 'react'
import { Route, IndexRoute } from 'react-router'

import SidebarLayout from 'layouts/SidebarLayout/SidebarLayout'
import AccountSettingsView from 'views/AccountSettingsView/AccountSettingsView'
import PaymentOptionsView from 'views/PaymentOptionsView/PaymentOptionsView'

export default (store) => (
  <Route path='/' component={SidebarLayout}>
    <IndexRoute component={AccountSettingsView} />
    <Route path='/accountSettings' component={AccountSettingsView} />
    <Route path='/paymentOptions' component={PaymentOptionsView} />
    <Route path='/subscriptions' component={PaymentOptionsView} />
  </Route>
)
