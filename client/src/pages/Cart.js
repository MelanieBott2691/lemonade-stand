import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';
import CartResults from '../components/CartResults/CartResults';

export default class Cart extends Component {
  state = {
    data: [
      {
        id: 1,
        name: 'test1',
        price: 47.0
      },
      {
        id: 2,
        name: 'test2',
        price: 54.0
      },
      {
        id: 3,
        name: 'test3',
        price: 24.0
      },
      {
        id: 4,
        name: 'test4',
        price: 14.0
      },
      {
        id: 5,
        name: 'test5',
        price: 53.0
      }
    ],
    inputSearch: ''
  };

  render() {
    return (
      <>
        <Nav />
        <CartResults data={this.state.data} />
      </>
    );
  }
}
