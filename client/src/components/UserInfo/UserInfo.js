import React from 'react'
import './UserInfo.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'

export default function UserInfo (props) {
  //   return (
  //     <div className="card mb-5">
  //         <h3 className="card-header">User Information</h3>
  //         <ul className="list-group">
  //             <li className="list-group-item">username: {props.user.name}</li>
  //             <li className="list-group-item">email: {props.user.email}</li>
  //             <li className="list-group-item">
  //                 {/* {role === 1 ? "Admin" : "Registered User"} */}
  //             </li>
  //         </ul>
  //     </div>
  // );

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src='holder.js/100px180?text=Image cap' />
      <Card.Body>
        <Card.Title>{props.user.name}</Card.Title>
        <Card.Text>Bobby is a solid dude.</Card.Text>
      </Card.Body>
      <ListGroup className='list-group-flush'>
        <ListGroupItem>username: {props.user.name}</ListGroupItem>
        <ListGroupItem>email: {props.user.email}</ListGroupItem>
        <ListGroupItem>something else here</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Button href='#'>Edit User Info</Button>
      </Card.Body>
    </Card>
  )

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src='holder.js/100px180?text=Image cap' />
      <Card.Body>
        <Card.Title>{props.user.name}</Card.Title>
        <Card.Text>Bobby is a solid dude.</Card.Text>
      </Card.Body>
      <ListGroup className='list-group-flush'>
        <ListGroupItem>username: {props.user.name}</ListGroupItem>
        <ListGroupItem>email: {props.user.email}</ListGroupItem>
        <ListGroupItem>something else here</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Button href='#'>Edit User Info</Button>
      </Card.Body>
    </Card>
  )
}
