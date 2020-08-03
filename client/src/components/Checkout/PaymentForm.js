import React from 'react';
// import styles from 'react-native';
import './PaymentForm.css';

class PaymentForm extends React.Component {
  render() {
    return (
      <div className="container">
        <div id="form-container">
          <div id="sq-walletbox">
            <button
              //   style={{ display: this.state.applePay ? 'inherit' : 'none' }}
              className="wallet-button"
              id="sq-apple-pay"></button>
            <button
              //   style={{ display: this.state.masterpass ? 'block' : 'none' }}
              className="wallet-button"
              id="sq-masterpass"></button>
            <button
              //   style={{ display: this.state.googlePay ? 'inherit' : 'none' }}
              className="wallet-button"
              id="sq-google-pay"></button>
            <hr />
          </div>

          <div id="sq-ccbox">
            <p>
              <a>Enter Card Info Below </a>
              {/* <span style={styles.leftCenter}>Enter Card Info Below </span> */}
              {/* <span style={styles.blockRight}> */}
              {/* {this.state.cardBrand.toUpperCase()} */}
              {/* </span> */}
            </p>
            <div id="cc-field-wrapper">
              <div id="sq-card-number"></div>
              <input type="hidden" id="card-nonce" name="nonce" />
              <div id="sq-expiration-date"></div>
              <div id="sq-cvv"></div>
            </div>
            <input
              id="name"
              //   style={styles.name}
              type="text"
              placeholder="Name"
            />
            <div id="sq-postal-code"></div>
          </div>
          <button
            className="button-credit-card"
            onClick={this.requestCardNonce}>
            Pay
          </button>
        </div>
        {/* <p style={styles.center} id="error"></p> */}
      </div>
    );
  }
}
export default PaymentForm;
