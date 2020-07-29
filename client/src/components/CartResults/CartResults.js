import React from 'react';
import CartItem from '../CartItem/CartItem.js';

export default class CartResults extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
    );
  }
}
