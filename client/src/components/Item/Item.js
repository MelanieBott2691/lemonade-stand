import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
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
          <Card.Title>Price:{this.props.price}</Card.Title>
          <Button href="#">
            Add to Cart
          </Button> <Button href="#">Store</Button>{' '}
        </Card.Body>
      </Card>
    );
  }
}
