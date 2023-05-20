// paymentWrapper.jsx

import React from 'react';

class PaymentWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentAmount: 0,
      paymentMethod: 'creditCard',
    };
  }

  handleAmountChange = (event) => {
    this.setState({ paymentAmount: event.target.value });
  };

  handleMethodChange = (event) => {
    this.setState({ paymentMethod: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Місце для логіки обробки платежу
    console.log('Payment submitted!');
    console.log('Amount:', this.state.paymentAmount);
    console.log('Method:', this.state.paymentMethod);
  };

  render() {
    return (
      <div>
        <h2>Payment System</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Payment Amount:
            <input
              type="number"
              value={this.state.paymentAmount}
              onChange={this.handleAmountChange}
            />
          </label>
          <br />
          <label>
            Payment Method:
            <select value={this.state.paymentMethod} onChange={this.handleMethodChange}>
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bankTransfer">Bank Transfer</option>
            </select>
          </label>
          <br />
          <button type="submit">Submit Payment</button>
        </form>
      </div>
    );
  }
}

export default PaymentWrapper;
