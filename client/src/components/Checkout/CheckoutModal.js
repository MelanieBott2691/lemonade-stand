import React from 'react';
import PayPalButton from './PayPalButton';
import {
  Modal,
  Button,
  ListGroup,
  Card,
  Row,
  Col,
  Container,
  Form,
} from 'react-bootstrap';
import header from '../../assets/images/purpleLGstand.png';
import './CheckoutModal.css';

class CheckoutModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showHide: false,
    };
  }
  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }
  render() {
    return (
      <div>
        <Button
          id="checkoutModal"
          style={{
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
          }}
          onClick={() => this.handleModalShowHide()}>
          Review for Checkout
        </Button>
        <br />

        <Modal id="modal" show={this.state.showHide} className="modal-checkout">
          <Modal.Header
            className="center"
            closeButton
            onClick={() => this.handleModalShowHide()}>
            <Container>
              <Col>
                <Row className="center">
                  <img
                    src={header}
                    alt="header"
                    variant="top"
                    height={200}
                    width={400}
                    className="card-image"
                  />
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <hr />
                  <Modal.Title className="make">How You'll Pay</Modal.Title>
                </Row>
              </Col>

              <Col>
                <div id="paypal-button-container">
                  <PayPalButton />
                </div>
              </Col>
            </Container>
          </Modal.Header>
          <Modal.Body className="modal-container">
            <Card.Body>
              <Card.Title></Card.Title>
              <ListGroup>
                <Row>Item(s) total: ${} </Row>
                <Row>Quantity total: {} </Row>
                <hr />
                <Row>
                  Total ({}item(s)) ${}
                </Row>
              </ListGroup>
              <Form>
                <Row>
                  <Col>
                    {/* Shipping Options */}
                    <Form.Group controlId="mobile">
                      <Form.Label style={{ fontWeight: 'bold' }}>
                        Shipping
                      </Form.Label>
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
                    <Form.Group controlId="mobile">
                      <Form.Label style={{ fontWeight: 'bold' }}>
                        Add a Note
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        placeholder="Add a note or request quantity (optional)..."
                        rows="3"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="cancel-btn"
              variant="secondary"
              onClick={() => this.handleModalShowHide()}>
              Cancel
            </Button>
            <Button
              className="primary-btn"
              variant="primary"
              onClick={() => this.handleModalShowHide()}>
              Place Order
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CheckoutModal;
