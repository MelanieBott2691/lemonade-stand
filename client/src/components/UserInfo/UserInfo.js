import React from 'react';
import './UserInfo.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import EditUserModal from './EditUserModal';

export default function UserInfo(props) {
  return (
    <Card>
      <Card.Img
        style={{ width: '10rem' }}
        variant="top"
        src={props.user.imageUrl}
        roundedCircle
      />
      <Card.Body>
        <Card.Title>{props.user.userName}</Card.Title>
        <Card.Text>Bobby is a solid dude.</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <input value={props.user.userName} />
        <input value={props.user.email} />
      </ListGroup>
      <Card.Body>
        <EditUserModal user={props.user} onChange={props.onChange} />
      </Card.Body>
    </Card>
  );
}
