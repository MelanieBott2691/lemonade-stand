import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './ShoppingCart.css';

import CheckoutModal from '../Checkout/CheckoutModal';
import { Form, Row, Col, Card, Table } from 'react-bootstrap';
import CharityModal from '../ShoppingCart/CharityModal';
// import CurrencyInput from 'react-currency-input-field';

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
                <td>Charity (Select Below)</td>

                <td>
                  <input
                    id="input-example"
                    name="input-name"
                    placeholder="$ 00.00"
                    // defaultValue={1.0}
                    allowDecimals={true}
                    decimalsLimit={2}
                    onChange={(value, name) => console.log(value, name)}
                  />
                </td>

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
                <td>${}</td>
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
          <br></br>
          <Form>
            <Row>
              <Col>
                <CharityModal />
                {/* <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Label>Select Charity</Form.Label>
                  <Form.Control as="select" custom>
                    <option>
                      Red Cross<a href="redcross.org"></a>
                    </option>
                    <option>Best Friends Animal Society</option>
                    <option>Make A Wish</option>
                    <option>Habitat for Humanity</option>
                    <option>Local Charity</option>

                    <div className="testing-container">
                      <button
                        type="button"
                        onClick={() => this.handleClick('/')}>
                        Red Cross
                      </button>
                      <div className="test">Test</div>
                    </div>
                  </Form.Control>
                </Form.Group> */}
              </Col>
            </Row>
          </Form>

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
