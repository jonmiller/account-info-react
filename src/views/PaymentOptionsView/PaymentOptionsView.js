import React, { PropTypes } from 'react'
// import { connect } from 'react-redux'
// import { Input, Button } from 'react-bootstrap'
import Card from 'react-credit-card'
import {reduxForm} from 'redux-form'

// import { actions as paymentOptionsActions } from 'redux/modules/paymentOptions'

// const mapStateToProps = (state) => ({
//   email: state.get('paymentOptions').get('email')
// })

export class PaymentOptionsView extends React.Component {

  static propTypes = {
    fields: PropTypes.object
  };

  // constructor (props) {
  //   super(props)
  // }

  render () {
    const { fields: { fullName, cardNumber, expirationDate, ccv } } = this.props
    return (
      <div className='container'>
        <h1>Payment Options</h1>
        <Card name='' />
        <form>
          <div>
            <label>Full Name</label>
            <input type='text' placeholder='Full Name' {...fullName} />
          </div>
          <div>
            <label>Card Number</label>
            <input type='text' placeholder='Card Number' {...cardNumber} />
          </div>
          <div>
            <label>Expiration Date</label>
            <input type='text' placeholder='00/00' {...expirationDate} />
          </div>
          <div>
            <label>CCV</label>
            <input type='text' placeholder='CCV' {...ccv} />
          </div>
        </form>
      </div>
    )
  }

}

PaymentOptionsView = reduxForm({
  form: 'paymentOption',
  fields: ['fullName', 'cardNumber', 'expirationDate', 'ccv'],
  getFormState: (state, reduxMountPoint) => state.get(reduxMountPoint).toJS()
})(PaymentOptionsView)

export default PaymentOptionsView
