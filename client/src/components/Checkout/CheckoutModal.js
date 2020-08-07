import React from 'react';
import PayPalButton from './PayPalButton';
import {
  Modal,
  Button,
  ListGroup,
  Card,
  Row,
  Col,
  Container
} from 'react-bootstrap';
import header from '../../assets/images/purpleLGstand.png';
import './CheckoutModal.css';

class CheckoutModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showHide: false
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
            alignItems: 'center'
          }}
          onClick={() => this.handleModalShowHide()}>
          Review for Checkout
        </Button>
        <br />

        <Modal id="modal" show={this.state.showHide} className="modal-checkout">
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Container>
              <Col>
                <Row>
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
                  <Modal.Title>How You'll Pay</Modal.Title>
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
              className="checkout-btn"
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
