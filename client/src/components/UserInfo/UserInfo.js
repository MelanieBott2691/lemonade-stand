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
    // <Card>
    //   <Card.Img
    //     style={{ width: '10rem' }}
    //     variant="top"
    //     src={props.user.imageUrl}
    //     roundedCircle
    //   />
    //   <Card.Body>
    //     <Card.Title>{props.user.userName}</Card.Title>
    //     <Card.Text>Bobby is a solid dude.</Card.Text>
    //   </Card.Body>
    //   <ListGroup className="list-group-flush">
    //     <label for="un">Username</label>
    //     <input id="un" value={props.user.userName} />
    //     <br></br>
    //     <label for="em">Email</label>
    //     <input id="em" value={props.user.email} />
    //   </ListGroup>
    //   <Card.Body>
    //     <EditUserModal user={props.user} onChange={props.onChange} />
    //   </Card.Body>
    // </Card>
    <div className="card">
      <div className="text-center img-circle">
        <img
          className="img-circle"
          style={{ width: '10rem' }}
          variant="top"
          src={props.user.imageUrl}
        />
      </div>
      <div className="card-body ">
        <h5 className="card-title">{props.user.userName}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <label for="un">Username:</label>
          <input id="un" value={props.user.userName} />
        </li>
        <li className="list-group-item">
          <label for="em">Email:</label>
          <input id="em" value={props.user.email} />
        </li>
      </ul>
      <div className="card-body">
        <EditUserModal user={props.user} onChange={props.onChange} />
      </div>
    </div>
  );
}
