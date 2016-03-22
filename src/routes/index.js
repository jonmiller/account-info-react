import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import SidebarLayout from 'layouts/SidebarLayout/SidebarLayout'
import AccountSettingsView from 'views/AccountSettingsView/AccountSettingsView'
import PaymentOptionsView from 'views/PaymentOptionsView/PaymentOptionsView'
import NotFoundView from 'views/NotFoundView/NotFoundView'

export default (store) => (
  <Route path='/' component={SidebarLayout}>
    <IndexRoute component={AccountSettingsView} />
    <Route path='/accountSettings' component={AccountSettingsView} />
    <Route path='/paymentOptions' component={PaymentOptionsView} />
    <Route path='/subscriptions' component={NotFoundView} />
    <Route path='/404' component={NotFoundView} />
    <Redirect from='*' to='/404' />
  </Route>
)
