import { Modal } from 'react-bootstrap'

import React, { Component } from 'react'
import PayModal from '../Checkout/Modal'
// import TriggerButton from '../TriggerButton'

export class CheckoutSteps extends Component {
  state = { isShown: false }
  showModal = () => {
    this.setState({ isShown: true }, () => {
      this.closeButton.focus()
    })
    this.toggleScrollLock()
  }
  closeModal = () => {
    this.setState({ isShown: false })
    this.focus()
    this.toggleScrollLock()
  }
  onKeyDown = event => {
    if (event.keyCode === 27) {
      this.closeModal()
    }
  }
  onClickOutside = event => {
    if (this.modal && this.modal.contains(event.target)) return
    this.closeModal()
  }
  toggleScrollLock = () => {
    document.querySelector('html').classList.toggle('scroll-lock')
  }
  render () {
    return (
      <React.Fragment>
        {/* <TriggerButton */}
        <button onClick={PayModal}>
          Pay
          {/* showModal={this.showModal}
          buttonRef={n => (this.TriggerButton = n)}
          triggerText={this.props.triggerText} */}
        </button>
        {this.state.isShown ? (
          <Modal
            onSubmit={this.props.onSubmit}
            modalRef={n => (this.modal = n)}
            buttonRef={n => (this.closeButton = n)}
            closeModal={this.closeModal}
            onKeyDown={this.onKeyDown}
            onClickOutside={this.onClickOutside}
          />
        ) : null}
      </React.Fragment>
    )
  }
}
export default CheckoutSteps
