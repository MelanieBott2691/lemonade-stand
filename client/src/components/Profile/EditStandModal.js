import React from 'react';
import './EditStandModal.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import { Modal, Button, Col, Form, Container } from 'react-bootstrap';

class EditStandModal extends React.Component {
  state = {
    showHide: false,
    storeId: this.props.store._id,
    itemName: '',
    itemPrice: '',
    itemImg: '',
    storeItems: []
  };
  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  addItem() {
    console.log(this.state.showHide);
  }
  render() {
    return (
      <>
        <Button
          className="btn-sm btn-block"
          variant="primary"
          onClick={() => this.handleModalShowHide()}>
          Edit
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

                      <Form.Control type="name" value={this.props.store.name} />
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
                          <Button
                            onClick={this.addItem}
                            variant="outline-secondary">
                            +
                          </Button>
                        </InputGroup>
                      </div>
                    </Form.Group>
                  </Col>
                </Form.Row>
              </Form>
              <table class="table">
                <thead>
                  <th>Item Name</th>
                  <th>Item Price</th>
                  <th>Img</th>
                </thead>
                <tbody>
                  <tr>
                    <td>4 Sheet</td>
                    <td>60X60 Inches</td>
                    <td>R500 - R10,000</td>
                  </tr>
                  <tr>
                    <td>4 Sheet</td>
                    <td>60X60 Inches</td>
                    <td>R500 - R10,000</td>
                  </tr>
                  <tr>
                    <td>4 Sheet</td>
                    <td>60X60 Inches</td>
                    <td>R500 - R10,000</td>
                  </tr>
                  <tr>
                    <td>4 Sheet</td>
                    <td>60X60 Inches</td>
                    <td>R500 - R10,000</td>
                  </tr>
                  <tr>
                    <td>4 Sheet</td>
                    <td>60X60 Inches</td>
                    <td>R500 - R10,000</td>
                  </tr>
                </tbody>
              </table>
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
      </>
    );
  }
}

export default EditStandModal;
