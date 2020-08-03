import React from 'react';
import { Row, Form, Col, Button } from 'react-bootstrap';
import PaymentForm from './PaymentForm';
import './RadioButton.css';

const RadioButton = (props) => {
  return (
    <Form>
      <fieldset>
        <Form.Group as={Row}>
          <Col>
            <Row>
              <i className="fas fa-credit-card" />
              <Form.Check
                type="radio"
                label="Credit Card"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Row>
            <Row>
              <i className="fab fa-cc-paypal" />
              <Form.Check
                type="radio"
                label="PayPal"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
            </Row>
          </Col>
        </Form.Group>
      </fieldset>
    </Form>
  );
};
export default RadioButton;
