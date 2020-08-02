import React from 'react';
import { Row, Form, Col, Button } from 'react-bootstrap';
import PaymentForm from './PaymentForm';
import './RadioButton.css';

const RadioButton = (props) => {
  return (
    <Form>
      {/* <Form.Group as={Row} controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group> */}
      <fieldset>
        <Form.Group as={Row}>
          {/* <Form.Label as="legend" column sm={2}>
            Radios
          </Form.Label> */}
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
//     <div className="button-container">
//       <div className="RadioButton">
//         <Row>
//           <i class="fas fa-credit-card"></i>
//           Credit Card
//           <div className="creditcard-payment">
//             <input
//               id={props.id}
//               onChange={props.changed}
//               value={props.value}
//               type="radio"
//               checked={props.isSelected}
//             />
//             <PaymentForm />
//           </div>
//         </Row>
//         <Row>
//           {' '}
//           <i class="fab fa-cc-paypal"></i>
//           PayPal
//           <div className="paypal-payment">
//             <input
//               id={props.id}
//               onChange={props.changed}
//               value={props.value}
//               type="radio"
//               checked={props.isSelected}
//             />
//           </div>
//         </Row>
//         <label htmlFor={props.id}>{props.label}</label>
//       </div>
//     </div>
//   );
// };
