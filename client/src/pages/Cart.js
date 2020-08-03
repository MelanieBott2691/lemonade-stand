import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';
import CartResults from '../components/CartResults/CartResults';
import CheckoutModal from '../components/Checkout/CheckoutModal';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
// import { Button } from 'react-bootstrap'

export default class Cart extends Component {
  state = {
    data: [
      {
        id: 1,
        name: 'test1',
        price: 47.0
      },
      {
        id: 2,
        name: 'test2',
        price: 54.0
      },
      {
        id: 3,
        name: 'test3',
        price: 24.0
      },
      {
        id: 4,
        name: 'test4',
        price: 14.0
      },
      {
        id: 5,
        name: 'test5',
        price: 53.0
      }
    ],
    inputSearch: ''
  };

  render() {
    return (
      <>
        <Nav />
        <Card>
          <Form>
            <Form.Row className="align-items-center">
              <Col xs="auto" className="my-1">
                <Form.Label
                  className="mr-sm-2"
                  htmlFor="inlineFormCustomSelect"
                  srOnly>
                  Preference
                </Form.Label>
                <Form.Control
                  as="select"
                  className="mr-sm-2"
                  id="inlineFormCustomSelect"
                  custom>
                  <option value="0">Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Control>
              </Col>
              <Col xs="auto" className="my-1">
                <Form.Check
                  type="checkbox"
                  id="customControlAutosizing"
                  label="Remember my preference"
                  custom
                />
              </Col>
              <Col xs="auto" className="my-1">
                <Button type="submit">Submit</Button>
              </Col>
            </Form.Row>
          </Form>
        </Card>
        <Card>
          <Form>
            <Row>
              <Col>
                {/* Shipping Options */}
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Label>Shipping</Form.Label>
                  <Form.Control as="select" custom>
                    <option>Standard Shipping $4.99</option>
                    <option>FedEx Ground $12.98</option>
                    <option>FedEx 2-Day $15.99</option>
                    <option>FedEx Overnight $40.99</option>
                    <option>Local Pickup</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            {/* Leave a Message Box */}
            <Row>
              <Col>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Add a note (optional)...</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Card>
        <CheckoutModal />
        <CartResults data={this.state.data} />
      </>
    );
  }
}
