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
          src="https://www.happinessishomemade.net/wp-content/uploads/2018/04/Tissue-Paper-Snail-9.jpg"
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
