import React from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import AddToCartModal from './AddToCartModal.js';
export default class Item extends React.Component {
  render() {
    return (
      <Card>
        <Card.Img
          variant="top"
          src="https://cdn.shopify.com/s/files/1/2012/3849/files/wwtfobxfl9vlqhios0zm_2048x_206929a3-95cc-485b-9304-3d3bf6b80530_2048x.jpg?v=1583182272"
        />
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Title>Price:${this.props.price}</Card.Title>
          {/* <Button block href="#"> */}
          <AddToCartModal />
          {/* </Button> */}
        </Card.Body>
      </Card>
    );
  }
}
