import { Modal, Form } from 'react-bootstrap'

import { React, Button, useState } from 'react'
import Cart from '../../../src/pages/Cart'

function PayModal () {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Modal.Dialog>
      <Cart />
      <Button variant='primary' onClick={handleShow}>
        Pay
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='exampleForm.ControlInput1'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='name@example.com' />
            </Form.Group>
            <Form.Group controlId='exampleForm.ControlSelect1'>
              <Form.Label>Example select</Form.Label>
              <Form.Control as='select'>
                <option>Mailing Address</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId='exampleForm.ControlSelect2'>
              <Form.Label>Example multiple select</Form.Label>
              <Form.Control as='select' multiple>
                <option>Comments:</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as='textarea' rows='3' />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Modal.Dialog>
  )
}

export default PayModal
