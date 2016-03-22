import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'

import styles from './SidebarLayout.scss'
import 'styles/core.scss'

function SidebarLayout ({ children }) {
  return (
    <div styleName='page-container'>
      <div styleName='sidebar-container'>
        <ul styleName='sidebar-nav'>
          <li>
            <Link to='/accountSettings'>Account Settings</Link>
          </li>
          <li>
            <Link to='/paymentOptions'>Payment Options</Link>
          </li>
          <li>
            <Link to='/subscriptions'>Subscriptions</Link>
          </li>
        </ul>
      </div>
      <div styleName='view-container'>
        {children}
      </div>
    </div>
  )
}

SidebarLayout.propTypes = {
  children: PropTypes.element
}

export default CSSModules(SidebarLayout, styles)
