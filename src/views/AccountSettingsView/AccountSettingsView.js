import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Input, ButtonInput } from 'react-bootstrap'
import CSSModules from 'react-css-modules'

import { actions as accountSettingsActions } from 'redux/modules/accountSettings'

import styles from './AccountSettingsView.scss'

const mapStateToProps = (state) => ({
  email: state.get('accountSettings').get('email')
})

export class AccountSettingsView extends React.Component {

  static propTypes = {
    email: PropTypes.string.isRequired,
    setEmail: PropTypes.func.isRequired
  };

  constructor (props) {
    super(props)
    this.state = { email: props.email }
  }

  render () {
    return (
      <div className='container'>
        <h1>Account Settings</h1>
        <div styleName='email-form'>
          <form>
            <Input
              label='Email Address'
              placeholder='Enter email'
              type='text'
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })} />
            <ButtonInput
              type='submit'
              value='Save'
              onClick={() => this.props.setEmail(this.state.email)} />
          </form>
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, accountSettingsActions)(CSSModules(AccountSettingsView, styles))
