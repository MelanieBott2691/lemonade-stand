import React from 'react';
import './UserInfo.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image'

export default function UserInfo(props) {
  return (
    <Card>
      <Card.Img style={{ width: '10rem' }}  
        variant="top"
        src="https://www.happinessishomemade.net/wp-content/uploads/2018/04/Tissue-Paper-Snail-9.jpg"
        roundedCircle
      />
      <Card.Body>
        <Card.Title>{props.user.name}</Card.Title>
        <Card.Text>Bobby is a solid dude.</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>username: {props.user.name}</ListGroupItem>
        <ListGroupItem>email: {props.user.email}</ListGroupItem>
        <ListGroupItem>something else here</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Button href="#">Edit User Info</Button>
      </Card.Body>
    </Card>
  );
}
