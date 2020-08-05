import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './ShoppingCart.css';

import CheckoutModal from '../Checkout/CheckoutModal';
import { Form, Row, Col, Card, Table } from 'react-bootstrap';
import CharitySelector from './CharitySelector';

export default class ShoppingCart extends Component {
  render() {
    return (
      <>
        <Nav />
        <br />
        <Card variant="outlined" className="shoppingCart-container">
          <Card.Header>My Shopping Cart</Card.Header>
          <Table striped bordered hover size="sm" className="center">
            <thead>
              <tr className="table-row">
                <th>Product</th>
                <th>Price</th>
                <th>Qauntity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row">
                <td>{}</td>
                <td>{}</td>
                <td>
                  {
                    <Form.Control
                      as="select"
                      className="mr-sm-2"
                      id="inlineFormCustomSelect"
                      custom>
                      <option value="0">Qty...</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="other">Other (add in notes)</option>
                    </Form.Control>
                  }
                </td>
                <td>{}</td>
              </tr>
              <tr className="table-row">
                <td>{}</td>
                <td>{}</td>
                <td>
                  {
                    <Form.Control
                      as="select"
                      className="mr-sm-2"
                      id="inlineFormCustomSelect"
                      custom>
                      <option value="0">Qty...</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="other">Other (add in notes)</option>
                    </Form.Control>
                  }
                </td>
                <td>{}</td>
              </tr>
              <tr className="table-row">
                <td>{}</td>
                <td>{}</td>
                <td>
                  {
                    <Form.Control
                      as="select"
                      className="mr-sm-2"
                      id="inlineFormCustomSelect"
                      custom>
                      <option value="0">Qty...</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="other">Other (add in notes)</option>
                    </Form.Control>
                  }
                </td>
                <td>{}</td>
              </tr>
              <tr className="table-row">
                <td>{}</td>
                <td>{}</td>
                <td>
                  {
                    <Form.Control
                      as="select"
                      className="mr-sm-2"
                      id="inlineFormCustomSelect"
                      custom>
                      <option value="0">Qty...</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="other">Other (add in notes)</option>
                    </Form.Control>
                  }
                </td>
                <td>{}</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        <br />
        <Card>
          <Form>
            <Form.Row className="align-items-center">
              <Col xs="auto" className="my-1">
                <Form.Control
                  as="select"
                  className="mr-sm-2"
                  id="inlineFormCustomSelect"
                  custom>
                  <CharitySelector />

                  <div className="testing-container">
                    <button type="button" onClick={() => this.handleClick('/')}>
                      Red Cross
                    </button>
                    <div className="test">Test</div>
                  </div>
                </Form.Control>
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
                  <Form.Label></Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Add a note or request quantity (optional)..."
                    rows="3"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
          <CheckoutModal />
        </Card>
      </>
    );
  }
}
