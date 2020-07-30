import { Modal, Button, Form } from 'react-bootstrap'
import React from 'react'

function CheckoutModal () {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Checkout</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Checkout Form HERE....</p>
        <Form>
          <Form.Group controlId='exampleForm.ControlInput1'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='name@example.com' />
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlSelect1'>
            <Form.Label>Example select</Form.Label>
            <Form.Control as='select'>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlSelect2'>
            <Form.Label>Example multiple select</Form.Label>
            <Form.Control as='select' multiple>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as='textarea' rows='3' />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={'/cart'} variant='secondary' href='/cart'>
          Cancel
        </Button>
        <Button variant='primary'>Pay</Button>
      </Modal.Footer>
    </Modal.Dialog>
  )
}
export default CheckoutModal
