import React from 'react'
// import styled from 'styled-components'
// import { ProductConsumer } from '../context'
// import { ButtonContainer } from './Button'
// import { Link } from 'react-router-dom'
// import { Modal } from 'react-bootstrap'
import { Modal, Button, Container, Row, Col } from 'react-bootstrap'
import './CheckoutModal.css'

// import React, { Component } from 'react'

class CheckoutModal extends React.Component {
  constructor () {
    super()
    this.state = {
      showHide: false
    }
  }
  handleModalShowHide () {
    this.setState({ showHide: !this.state.showHide })
  }
  render () {
    return (
      <div>
        <Button variant='primary' onClick={() => this.handleModalShowHide()}>
          Checkout
        </Button>

        <Modal show={this.state.showHide}>
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>Checkout</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modal-container'>
            {/* <div className='row'>
              <div id='modal' className='col-2 text-left text-capitalize p-5'>
                <Form> */}
            <Container>
              Checkout
              <Row>
                <Col>PRODUCTS</Col>
                <Col>NAME OF PRODUCTS</Col>
                <Col>PRICE</Col>
                <Col>QUANTITY</Col>
                <Col>TOTAL</Col>
                <Col>REMOVE</Col>
              </Row>
              <Row>
                <Col>
                  <h5>Products{}</h5>
                </Col>
                <Col>
                  <h5>Products{}</h5>
                </Col>
                <Col>
                  <h5>Products{}</h5>
                </Col>
                <Col>
                  <h5>Products{}</h5>
                </Col>
                <Col>
                  <h5>Products{}</h5>
                </Col>
                <Col>
                  <h5>Products{}</h5>
                </Col>
              </Row>
            </Container>
            {/* </Form> */}
            {/* </div>
            </div> */}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant='secondary'
              onClick={() => this.handleModalShowHide()}
            >
              Close
            </Button>
            <Button
              variant='primary'
              onClick={() => this.handleModalShowHide()}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

//       <Modal.Dialog>
//         {value => {
//           const { modalOpen, closeModal } = value
//           const { img, title, price } = value.modalProduct
//           if (!modalOpen) {
//             return null
//           } else {
//             return (
//               <Modal.Body>
//                 <div className='container'>
//                   <div className='row'>
//                     <div
//                       id='modal'
//                       className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5'
//                     >
//                       <h5>Item added to the cart</h5>
//                       <img src={img} className='img-fluid' alt='product' />
//                       <h5>{title}</h5>
//                       <h5 className='text-muted'>price : $ {price}</h5>
//                       <Link to='/'>
//                         <Button onClick={() => closeModal()}>
//                           continue shopping
//                         </Button>
//                       </Link>
//                       <Link to='/cart'>
//                         <Button cart onClick={() => closeModal()}>
//                           go to cart
//                         </Button>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </Modal.Body>
//             )
//           }
//         }}
//       </Modal.Dialog>
//     )
//   }
// }

export default CheckoutModal

// import { Modal, Button, Form } from 'react-bootstrap'
// import React, { Component } from 'react'

// class CheckoutModal extends Component {
//   render() {
//     return (
//     <Modal.Dialog>
//       <Modal.Header closeButton>
//         <Modal.Title>Checkout</Modal.Title>
//       </Modal.Header>
// <ProductConsumer>
//   {value => {
//     const { modalOpen, closeModal } = value;
//     const { img, title, price } = value.modalProduct;
//     if (!modalOpen) {
//       return null;
//     }else {
//       return (
//       <Modal.Body>
//         <p>Checkout Form HERE....</p>
//         <div className="conatiner">
//         <Form>
//           <Form.Group controlId='exampleForm.ControlInput1'>
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type='email' placeholder='name@example.com' />
//           </Form.Group>
//           <Form.Group controlId='exampleForm.ControlSelect1'>
//             <Form.Label>Example select</Form.Label>
//             <Form.Control as='select'>
//               <option>1</option>
//               <option>2</option>
//               <option>3</option>
//               <option>4</option>
//               <option>5</option>
//             </Form.Control>
//           </Form.Group>
//           <Form.Group controlId='exampleForm.ControlSelect2'>
//             <Form.Label>Example multiple select</Form.Label>
//             <Form.Control as='select' multiple>
//               <option>1</option>
//               <option>2</option>
//               <option>3</option>
//               <option>4</option>
//               <option>5</option>
//             </Form.Control>
//           </Form.Group>
//           <Form.Group controlId='exampleForm.ControlTextarea1'>
//             <Form.Label>Example textarea</Form.Label>
//             <Form.Control as='textarea' rows='3' />
//           </Form.Group>
//         </Form>
//       </Modal.Body>
//       </div>

//       // <Modal.Footer>
//       <Link to="/">
//         <Button onClick={() =>
//         closeModal()}>

//         </Button>
//       </Link>

//       <Link to="/cart">
//         <Button cart onClick={() =>
//         closeModal()} >
//           Cancel
//         </Button>
//         </Link>
//         </div>

//     </Modal.Dialog>
//       )
//       }
//   }}
// </ProductConsumer>
// )
// }
// }
// export default CheckoutModal
