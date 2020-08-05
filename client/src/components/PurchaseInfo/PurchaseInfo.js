import React from 'react';
import './PurchaseInfo.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function PurchaseInfo(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Recent Purchases</Card.Title>
        <ListGroup>
          <ListGroup.Item>
            <Card.Img variant="top" src="holder.js/100px180" /> Price: $50
            Status: Shipped{' '}
          </ListGroup.Item>
          <ListGroup.Item>
            <Card.Img variant="top" src="holder.js/100px180" /> Price: $40
            Status: Delivered{' '}
          </ListGroup.Item>
          <ListGroup.Item>
            <Card.Img variant="top" src="holder.js/100px180" /> Price: $30
            Status: Order Processing
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
