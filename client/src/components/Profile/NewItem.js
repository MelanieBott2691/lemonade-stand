import React from 'react';
import API from '../../utils/API';
import './NewStore.css';

import { Modal, Button, Col, Form, Container } from 'react-bootstrap';
import { object } from 'prop-types';

export default class NewItem extends React.Component {
  state = {
    showHide: false,
    userId: this.props.user.id,
    name: '',
    description: '',
    price: '',
    quantity: '',
    charityName: '',
    charityDescription: '',
    charityUrl: '',
    imageUrl: ''
  };
  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = () => {
    const newItem = {
      userId: this.props.user.id,
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      quantity: this.state.quantity,
      charityName: this.state.charityName,
      charityDescription: this.state.charityDescription,
      charityUrl: this.state.charityUrl,
      imageUrl: this.state.imageUrl
    };

    API.createItem(newItem)
      .then((res) => {
        this.props.grabItems();
        this.handleModalShowHide();
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Button
          className="createItem"
          variant="primary"
          onClick={() => this.handleModalShowHide()}>
          Create New Item
        </Button>

        <Modal
          show={this.state.showHide}
          style={{ display: 'flex', justifyContent: 'center' }}>
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title className="modal-title">
              Create Your Stand!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-container">
            <Container>
              <form>
                <div className="form-group">
                  <label htmlFor="itemName">Item Name</label>
                  <input
                    onChange={this.onChange}
                    value={this.state.name}
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder=""
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="itemPrice">Item Price</label>
                  <input
                    onChange={this.onChange}
                    value={this.state.price}
                    type="text"
                    className="form-control"
                    id="price"
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="itemQuantity">Quantity</label>
                  <input
                    onChange={this.onChange}
                    value={this.state.quantity}
                    type="text"
                    className="form-control"
                    id="quantity"
                    placeholder=""
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="itemImage">Link to Image</label>
                  <input
                    onChange={this.onChange}
                    value={this.state.imageUrl}
                    type="text"
                    className="form-control"
                    id="imageUrl"
                    placeholder="Link to image of your item"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="itemDescription">Describe the item</label>
                  <textarea
                    onChange={this.onChange}
                    value={this.state.description}
                    className="form-control"
                    id="description"
                    rows="4"></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="itemCharityName">Charity Name</label>
                  <input
                    onChange={this.onChange}
                    value={this.state.charityName}
                    type="text"
                    className="form-control"
                    id="charityName"
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="itemCharityDescription">
                    Charity Description
                  </label>
                  <textarea
                    onChange={this.onChange}
                    value={this.state.charityDescription}
                    className="form-control"
                    id="charityDescription"
                    rows="4"></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="itemCharityUrl">Charity URL</label>
                  <input
                    onChange={this.onChange}
                    value={this.state.charityUrl}
                    type="text"
                    className="form-control"
                    id="charityUrl"
                    placeholder=""
                  />
                </div>
              </form>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="checkout-btn"
              variant="primary"
              onClick={this.onSubmit}>
              Save Stand
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
