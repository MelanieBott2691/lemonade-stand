import React from 'react'
// import './StoreInfo.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import StoreInfo from '../StoreInfo/StoreInfo'
import { Container, Row, Col } from 'react-bootstrap'
import './StoreItem.css'

export default function StoreItem () {
  return (
    <Container>
      <Row>
        <h1 className='my-4'>Items</h1>
      </Row>
      <Col>
        <Row className='card-row'>
          <Card>
            <Card.Img
              className='logo'
              variant='top'
              src='nothingfornow'
              alt=''
            />
            <Card.Body>
              <img
                class='card-img-top img-fluid'
                src='http://placehold.it/900x400'
                alt=''
              ></img>
              <Card.Title>Product Name</Card.Title>
              <h4>$24.99</h4>
              <p className='card-text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta.
                Totam id dolores, sint aperiam sequi pariatur praesentium animi
                perspiciatis molestias iure, ducimus!
              </p>
              <span className='text-warning'>
                &#9733; &#9733; &#9733; &#9733; &#9734;
              </span>
              4.0 stars
            </Card.Body>
          </Card>
        </Row>
        <br></br>
        <br></br>

        <Row className='card-row'>
          <Card>
            <Card.Header>Product Reviews</Card.Header>
            <Card.Body>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                et enim aperiam inventore, similique necessitatibus neque non!
                Doloribus, modi sapiente laboriosam aperiam fugiat laborum.
                Sequi mollitia, necessitatibus quae sint natus.
              </p>
              <div className='text-muted'>Posted by Anonymous on 3/1/17</div>
              <hr></hr>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                et enim aperiam inventore, similique necessitatibus neque non!
                Doloribus, modi sapiente laboriosam aperiam fugiat laborum.
                Sequi mollitia, necessitatibus quae sint natus.
              </p>
              <div className='text-muted'>Posted by Anonymous on 3/1/17</div>
              <hr></hr>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                et enim aperiam inventore, similique necessitatibus neque non!
                Doloribus, modi sapiente laboriosam aperiam fugiat laborum.
                Sequi mollitia, necessitatibus quae sint natus.
              </p>
              <div className='text-muted'>Posted by Anonymous on 3/1/17</div>
              <hr></hr>
              <button onclick='' className='btn'>
                Leave a Review
              </button>
            </Card.Body>
          </Card>
        </Row>
      </Col>
    </Container>
  )
}
