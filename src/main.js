import React from 'react'
import ReactDOM from 'react-dom'
import { useRouterHistory } from 'react-router'
import { createHistory } from 'history'
import Immutable from 'immutable'

import makeRoutes from './routes'
import Root from './containers/Root'
import configureStore from './redux/configureStore'

const historyConfig = { basename: __BASENAME__ }
const history = useRouterHistory(createHistory)(historyConfig)

const initialState = Immutable.Map()
const store = configureStore({ initialState, history })

const routes = makeRoutes(store)

// Render the React application to the DOM
ReactDOM.render(
  <Root history={history} routes={routes} store={store} />,
  document.getElementById('root')
)
