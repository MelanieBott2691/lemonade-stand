import React from 'react';
import { Modal, Button, Row, Col, Container } from 'react-bootstrap';
import './AddToCartModal.css';

class AddToCartModal extends React.Component {
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
          className="btn btn-primary"
          id="add-to-cart-modal"
          block
          style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onClick={() => this.handleModalShowHide()}>
          Add to Cart
        </Button>
        <br />

        <Modal id="modal" show={this.state.showHide} className="modal-checkout">
          <Modal.Header
            className="center"
            closeButton
            onClick={() => this.handleModalShowHide()}>
            <Container>
              <div className="center">
                <img
                  className="img-cart"
                  src="https://t3.ftcdn.net/jpg/01/71/40/02/240_F_171400203_h7QIY4UC3r3AHi7Svp5wasjmkVWCRSQy.jpg"></img>

                <Modal.Title className="make">Added to Cart!</Modal.Title>
              </div>
            </Container>
          </Modal.Header>

          <Modal.Footer>
            {/* <Button
              className="cancel-btn"
              variant="secondary"
              onClick={() => this.handleModalShowHide()}>
              Exit
            </Button> */}
            <Button
              href="/shoppingcart"
              className="primary-btn"
              variant="primary"
              onClick={() => this.handleModalShowHide()}>
              <i class="fas fa-shopping-cart"></i>
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddToCartModal;
