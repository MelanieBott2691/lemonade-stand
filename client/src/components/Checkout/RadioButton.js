import React from 'react';
import { Row } from 'react-bootstrap';
import PaymentForm from './PaymentForm';
import './RadioButton.css';

const RadioButton = (props) => {
  return (
    <div className="button-container">
      <div className="RadioButton">
        <Row>
          <i class="fas fa-credit-card"></i>
          Credit Card
          <div className="creditcard-payment">
            <input
              id={props.id}
              onChange={props.changed}
              value={props.value}
              type="radio"
              checked={props.isSelected}
            />
            <PaymentForm />
          </div>
        </Row>
        <Row>
          {' '}
          <i class="fab fa-cc-paypal"></i>
          PayPal
          <div className="paypal-payment">
            <input
              id={props.id}
              onChange={props.changed}
              value={props.value}
              type="radio"
              checked={props.isSelected}
            />
          </div>
        </Row>
        <label htmlFor={props.id}>{props.label}</label>
      </div>
    </div>
  );
};
export default RadioButton;
