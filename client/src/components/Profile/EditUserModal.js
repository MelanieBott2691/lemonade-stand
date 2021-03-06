import React from 'react';
import './EditUserModal.css';

import { Modal, Button, Col, Form, Container } from 'react-bootstrap';

class EditUserModal extends React.Component {
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
        <Button variant="primary" onClick={() => this.handleModalShowHide()}>
          Edit Profile
        </Button>

        <Modal
          show={this.state.showHide}
          style={{ display: 'flex', justifyContent: 'center' }}>
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title className="modal-title">
              Edit Your Profile!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-container">
            <Container>
              <Form>
                <Form.Row className="align-items-center">
                  <Col xs="auto">
                    <Form.Group className="form-group" controlId="userName">
                      <Form.Label>Username</Form.Label>

                      <Form.Control
                        type="name"
                        placeholder=""
                        onChange={this.props.onChange}
                        value={this.props.user.userName}
                      />
                    </Form.Group>
                    <Form.Group className="form-group" controlId="email">
                      <Form.Label>E-mail</Form.Label>

                      <Form.Control
                        type="email"
                        placeholder=""
                        onChange={this.props.onChange}
                        value={this.props.user.email}
                      />
                    </Form.Group>

                    <Form.Group className="form-group" controlId="imageUrl">
                      <Form.Label>Image URL</Form.Label>

                      <Form.Control
                        type="text"
                        placeholder=""
                        onChange={this.props.onChange}
                        value={this.props.user.imageUrl}
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>
              </Form>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => this.handleModalShowHide()}>
              Save Profile
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default EditUserModal;
