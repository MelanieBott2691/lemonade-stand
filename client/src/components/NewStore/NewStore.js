import React from 'react';
import API from '../../utils/API';
import './NewStore.css';

import { Modal, Button, Col, Form, Container } from 'react-bootstrap';
import { object } from 'prop-types';

class NewStore extends React.Component {
  state = {
    showHide: false,
    userId: this.props.user.id,
    name: '',
    description: '',
    imageUrl: ''
  };
  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = () => {
    const newStore = {
      userId: this.props.user.id,
      name: this.state.name,
      description: this.state.description,
      imageUrl: this.state.imageUrl
    };
    API.createStore(newStore).then((req, res) => {
      this.props.grabStores();
    });

    this.handleModalShowHide();
  };

  render() {
    return (
      <div>
        <Button
          className="float-right"
          variant="primary"
          onClick={() => this.handleModalShowHide()}>
          Create New Stand
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
                  <label htmlFor="exampleFormControlInput1">Stand Name</label>
                  <input
                    onChange={this.onChange}
                    value={this.state.name}
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name of your stand"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput2">
                    Link to Image
                  </label>
                  <input
                    onChange={this.onChange}
                    value={this.state.imageUrl}
                    type="text"
                    className="form-control"
                    id="imageUrl"
                    placeholder="Link to image of your stand"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Tell us about your stand!
                  </label>
                  <textarea
                    onChange={this.onChange}
                    value={this.state.description}
                    className="form-control"
                    id="description"
                    rows="4"></textarea>
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

export default NewStore;
