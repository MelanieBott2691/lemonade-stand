// import React from 'react';
// import { Row, Form, Col } from 'react-bootstrap';
// // import PaymentForm from './PaymentForm';
// import './RadioButton.css';

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
function PaypalButton(props) {
  const [sdkReady, setSdkReady] = useState(false);

  const addPaypalSdk = async () => {
    const result = await axios.get('/api/config/paypal');
    const clientID = result.data;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.paypal.com/sdk/js?client-id=' + clientID;
    script.async = true;
    script.onload = () => {
      setSdkReady(true);
    };
    document.body.appendChild(script);
  };

  const createOrder = (data, actions) =>
    actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: props.amount
          }
        }
      ]
    });

  const onApprove = (data, actions) =>
    actions.order
      .capture()
      .then((details) => props.onSuccess(data, details))
      .catch((err) => console.log(err));

  useEffect(() => {
    if (!window.paypal) {
      addPaypalSdk();
    }
    return () => {
      //
    };
  }, []);

  if (!sdkReady) {
    return <div>Loading...</div>;
  }

  const Button = window.paypal.Buttons.driver('react', { React, ReactDOM });

  return (
    <Button
      {...props}
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
  );
}

export default PaypalButton;
//   return (
//     <Form>
//       <fieldset>
//         <Form.Group as={Row}>
//           <Col>
//             <Row>
//               <i className="fas fa-credit-card" />
//               <Form.Check
//                 type="radio"
//                 label="Credit Card"
//                 name="formHorizontalRadios"
//                 id="formHorizontalRadios1"
//               />
//             </Row>
//             <Row>
//               <i className="fab fa-cc-paypal" />
//               <Form.Check
//                 type="radio"
//                 label="PayPal"
//                 name="formHorizontalRadios"
//                 id="formHorizontalRadios2"
//               />
//             </Row>
//           </Col>
//         </Form.Group>
//       </fieldset>
//     </Form>
//   );
// };
// export default addPaypal;

// const RadioButton = (props) => {
//   return (
//     <Form>
//       <fieldset>
//         <Form.Group as={Row}>
//           <Col>
//             <Row>
//               <i className="fas fa-credit-card" />
//               <Form.Check
//                 type="radio"
//                 label="Credit Card"
//                 name="formHorizontalRadios"
//                 id="formHorizontalRadios1"
//               />
//             </Row>
//             <Row>
//               <i className="fab fa-cc-paypal" />
//               <Form.Check
//                 type="radio"
//                 label="PayPal"
//                 name="formHorizontalRadios"
//                 id="formHorizontalRadios2"
//               />
//             </Row>
//           </Col>
//         </Form.Group>
//       </fieldset>
//     </Form>
//   );
// };
// export default RadioButton;
