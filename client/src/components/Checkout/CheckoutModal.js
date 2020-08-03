import React from 'react';
import RadioButton from './RadioButton';
import {
  Modal,
  Button,
  ListGroup,
  Card,
  Row,
  Col,
  Container
} from 'react-bootstrap';
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

        <Modal show={this.state.showHide}>
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Container>
              <Col>
                <Row>
                  <Card.Img
                    variant="top"
                    className="card-image"
                    src="../../assets/images/purpleLGstand.png"></Card.Img>
                  <br></br>
                  <Modal.Title>How You'll Pay</Modal.Title>
                </Row>
              </Col>

              <Col>
                <RadioButton />
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
              Proceed to checkout
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CheckoutModal;
