import React from 'react';
import './NewStore.css';

import {
  Modal,
  Button,
  Card,
  Row,
  Col,
  Form,
  Container,
} from 'react-bootstrap';

class NewStore extends React.Component {
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
        <Button variant="primary" onClick={() => this.handleModalShowHide()}>
          Create New Stand
        </Button>

        <Modal
          show={this.state.showHide}
          style={{ display: 'flex', justifyContent: 'center' }}>
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>Create Your Stand!</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-container">
            <Container>
              <Form>
                <Form.Row className="align-items-center">
                  <Col xs="auto">
                    <Form.Group
                      className="form-group"
                      controlId="exampleForm.ControlInput1">
                      <Form.Label>Stand Name</Form.Label>

                      <Form.Control
                        type="name"
                        placeholder="Name of your Stand."
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.File
                        id="exampleFormControlFile1"
                        label="Upload an Image for your Stand"
                      />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Example select</Form.Label>
                      <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect2">
                      <Form.Label>Example multiple select</Form.Label>
                      <Form.Control as="select" multiple>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Stand Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows="4"
                        placeholder="What do you STAND for? What is it you're trying to achieve with your stand? Whether it's trying to make the world a better place through charity, raising funds for a cause, or loved one, your customers want to know!"
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>
              </Form>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="checkout-btn"
              variant="primary"
              onClick={() => this.handleModalShowHide()}>
              Save Stand
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default NewStore;
