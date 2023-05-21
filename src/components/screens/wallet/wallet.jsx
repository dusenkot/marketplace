import React from 'react';
import App from '../home/form-send/forms-sends';

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
    // Place your payment processing logic here
    console.log('Payment submitted!');
    console.log('Amount:', this.state.paymentAmount);
    console.log('Method:', this.state.paymentMethod);
  };

  render() {
    return (
      <div style={styles.main}>
        <App />
        <h2 style={styles.heading}>Payment System</h2>
        <form onSubmit={this.handleSubmit}>
          <label style={styles.label}>
            Payment Amount:
            <input
              type="number"
              value={this.state.paymentAmount}
              onChange={this.handleAmountChange}
              style={styles.input}
            />
          </label>
          <br />
          <label style={styles.label}>
            Payment Method:
            <select
              value={this.state.paymentMethod}
              onChange={this.handleMethodChange}
              style={styles.select}
            >
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bankTransfer">Bank Transfer</option>
            </select>
          </label>
          <br />
          <button type="submit" style={styles.button}>Submit Payment</button>
        </form>
      </div>
    );
  }
}

const styles = {
  main: {
    textAlign: 'center',
    background: '#4040ff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: '#fff',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  label: {
    color: '#fff',
    fontSize: '18px',
    marginBottom: '10px',
  },
  input: {
    padding: '5px',
    borderRadius: '4px',
    border: 'none',
    marginBottom: '10px',
  },
  select: {
    padding: '5px',
    borderRadius: '4px',
    border: 'none',
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    background: '#00ff00',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginBottom: '10px',
  },
};

export default PaymentWrapper;
