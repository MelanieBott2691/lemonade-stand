import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './ShoppingCart.css';

import CheckoutModal from '../Checkout/CheckoutModal';
import { Form, Row, Col, Card, Table, Container } from 'react-bootstrap';
import CharityModal from '../ShoppingCart/CharityModal';
// import CurrencyInput from 'react-currency-input-field';
import Footer from '../Footer/Footer';

export default class ShoppingCart extends Component {
  render() {
    return (
      <>
        <Nav />
        <br />
        <Container>
          <Card variant="outlined" className="shoppingCart-container">
            <Card.Header>Review Order</Card.Header>
            <br />
            <Card.Title>My Shopping Cart</Card.Title>
            <div className="table-responsive">
              <Table striped bordered hover size="sm" className="center">
                <thead>
                  <tr className="table-row">
                    <th>Item</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qauntity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-row">
                    <td className="paddingtd">
                      <img
                        alt="stuff"
                        className="img-size"
                        variant="top"
                        src="https://cdn3.volusion.com/65wgp.sm6ue/v/vspfiles/photos/GT66AA-2.jpg?v-cache=1569508703"
                      />
                    </td>
                    <td className="vertical-align-middle">Some name</td>

                    <td className="paddingtd vertical-align-middle">$12.50</td>

                    <td>
                      {
                        <Form.Control
                          as="select"
                          className="mr-sm-2"
                          id="inlineFormCustomSelect"
                          custom>
                          {/* <option value="0">Qty...</option>
                      <option value="1">1</option> */}
                          <option value="2">2</option>
                          {/* <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="other">Other (add in notes)</option> */}
                        </Form.Control>
                      }
                    </td>
                    <td>${25.67}</td>
                  </tr>

                  <tr className="table-row">
                    <td className="paddingtd">
                      <img
                        alt="stuff"
                        className="img-size"
                        variant="top"
                        src="https://cdn3.volusion.com/65wgp.sm6ue/v/vspfiles/photos/GT66AA-2.jpg?v-cache=1569508703"
                      />
                    </td>
                    <td className="vertical-align-middle">Some name</td>
                    <td>
                      <input
                        id="input-price"
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
                    <td>${12.5}</td>
                  </tr>
                  <tr className="table-row">
                    <td className="paddingtd">
                      <img
                        alt="stuff"
                        className="img-size"
                        variant="top"
                        src="https://cdn3.volusion.com/65wgp.sm6ue/v/vspfiles/photos/GT66AA-2.jpg?v-cache=1569508703"
                      />
                    </td>
                    <td className="vertical-align-middle">Some name</td>
                    <td>
                      <input
                        id="input-price"
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
                    <td>${12.5}</td>
                  </tr>
                  <tr className="table-row">
                    <td className="paddingtd">
                      <img
                        alt="stuff"
                        className="img-size"
                        variant="top"
                        src="https://cdn3.volusion.com/65wgp.sm6ue/v/vspfiles/photos/GT66AA-2.jpg?v-cache=1569508703"
                      />
                    </td>
                    <td className="vertical-align-middle">Some name</td>
                    <td>
                      <input
                        id="input-price"
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
                    <td>${12.5}</td>
                  </tr>
                </tbody>
              </Table>
              <CheckoutModal />
            </div>
          </Card>
        </Container>
        <br />
        <Footer />
      </>
    );
  }
}
