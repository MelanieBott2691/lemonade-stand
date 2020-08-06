import React from 'react';
import RadioButton from '../Checkout/RadioButton';
import {
  Modal,
  Button,
  Form,
  Card,
  Row,
  Col,
  Container
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import charity from '../../assets/images/charity.png';
import './CharityModal.css';

class CharityModal extends React.Component {
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
          id="charityModal"
          style={{
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center'
          }}
          onClick={() => this.handleModalShowHide()}>
          Select a Charity
        </Button>
        <br />

        <Modal id="modal" show={this.state.showHide} className="modal-checkout">
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Container>
              <Col>
                <Row>
                  <img
                    src={charity}
                    alt="header image"
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
                  <Modal.Title></Modal.Title>
                </Row>
              </Col>
            </Container>
          </Modal.Header>

          <Modal.Body className="modal-container">
            <Card.Body>
              <Card.Title>Choose a Charity To Donate To:</Card.Title>
              <br />
              <Row>
                {/* test */}
                <Col>
                  <a href="https//www.google.com">Charity</a>
                </Col>

                {/* test end */}
                <Col>
                  <Form>
                    {['radio'].map((type) => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                          className="charity-label"
                          type={type}
                          id={`default-${type}`}
                          label={`Red Cross`}
                        />
                      </div>
                    ))}
                  </Form>
                </Col>
                <Col>
                  <Form>
                    {['radio'].map((type) => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                          className="charity-label"
                          type={type}
                          id={`default-${type}`}
                          label={`Local Charity`}
                        />
                      </div>
                    ))}
                  </Form>
                </Col>
                <Col>
                  <Form>
                    {['radio'].map((type) => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                          className="charity-label"
                          type={type}
                          id={`default-${type}`}
                          label={`Make A Wish`}
                        />
                      </div>
                    ))}
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form>
                    {['radio'].map((type) => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                          className="charity-label"
                          type={type}
                          id={`default-${type}`}
                          label={`Habitat for Humanity`}
                        />
                      </div>
                    ))}
                  </Form>
                </Col>
                {/* <Col>
                  <Form>
                    {['radio'].map((type) => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                          type={type}
                          id={`default-${type}`}
                          label={`Local Charity`}
                        />
                      </div>
                    ))}
                  </Form>
                </Col> */}
                <Col>
                  <Form>
                    {['radio'].map((type) => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                          type={type}
                          id={`default-${type}`}
                          label={`Best Friends Animal Society`}
                        />
                      </div>
                    ))}
                  </Form>
                </Col>
              </Row>
            </Card.Body>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button
              className="cancel-btn"
              variant="secondary"
              onClick={() => this.handleModalShowHide()}>
              Cancel
            </Button> */}
            <Button
              className="checkout-btn"
              variant="primary"
              onClick={() => this.handleModalShowHide()}>
              Return to Complete Checkout
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CharityModal;
