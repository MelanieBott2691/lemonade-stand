import React from 'react';
import './EditStandModal.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import { Modal, Button, Col, Form, Container } from 'react-bootstrap';

class EditStandModal extends React.Component {
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
          Edit Stand
        </Button>

        <Modal
          show={this.state.showHide}
          style={{ display: 'flex', justifyContent: 'center' }}>
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title className="modal-title">Edit Your Stand!</Modal.Title>
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
                        placeholder="Change Stand name."
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.File
                        id="exampleFormControlFile1"
                        label="Upload an Image for your Stand"
                      />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Change Stand Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows="5"
                        placeholder="What do you STAND for? What is it you're trying to achieve with your stand? Whether it's trying to make the world a better place through charity, raising funds for a cause, or loved one, your customers want to know!"
                      />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Add New Stand Item</Form.Label>
                      <div>
                        <InputGroup className="mb-3">
                          <FormControl placeholder="Item Name" />
                          <FormControl placeholder="Item Price: $0.00" />
                          <FormControl placeholder="Img URL" />
                          <InputGroup.Append></InputGroup.Append>
                          <Button variant="outline-secondary">+</Button>
                          {/* <Button variant="outline-secondary">-</Button> */}
                        </InputGroup>
                      </div>
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

export default EditStandModal;

// <div class="form-row">
//           <div class="form-group col-md-6">
//             <label for="item-name"></label>
//             <input type="text" class="block" id="item-name" class="form-control" aria-describedby="item-name"
//             placeholder="Add item">
//           </div>
//           <div class="form-group col-md-6">
//             <label for="item-price"></label>
//             <input type="text" class="block" id="item-price" class="form-control" aria-describedby="item-price"
//             placeholder="Add price per">
//           </div>
//         </div>
//         <button id="submit" class="btn btn-secondary float-center">Add</button>
