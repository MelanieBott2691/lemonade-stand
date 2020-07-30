import React from 'react'
import CheckoutSteps from '../Checkout/CheckoutSteps'

export default class CartItem extends React.Component {
  render () {
    return (
      <div>
        <p>Name:{this.props.name}</p>
        <p>Price:{this.props.price}</p>
        <p>id:{this.props.id}</p>
      </div>
    )
  }
}
