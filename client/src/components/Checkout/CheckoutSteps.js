import { Modal, Button } from 'react-bootstrap'

import React from 'react'
// import PayModal from '../Checkout/Modal'
// import TriggerButton from '../TriggerButton'

function CheckoutSteps () {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Checkout</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Checkout Form HERE....</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant='secondary'>Cancel</Button>
        <Button variant='primary'>Pay</Button>
      </Modal.Footer>
    </Modal.Dialog>
  )
}
export default CheckoutSteps
