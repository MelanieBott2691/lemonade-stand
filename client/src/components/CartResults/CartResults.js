import React from 'react'
import CartItem from '../CartItem/CartItem.js'
// import CheckoutSteps from '../Checkout/CheckoutSteps'

export default class CartResults extends React.Component {
  render () {
    return (
      <div>
        {this.props.data.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
    )
  }
}
