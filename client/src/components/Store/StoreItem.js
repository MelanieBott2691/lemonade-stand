import React from 'react'
// import './StoreInfo.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import StoreInfo from '../StoreInfo/StoreInfo'
import { Container, Row, Col, CardGroup } from 'react-bootstrap'
import './StoreItem.css'

export default function StoreItem () {
  return (
    <Container>
      <Row>
        <h1 className='my-4'>Item</h1>
      </Row>
      {/* image card */}
      <CardGroup>
        <Card style={{ width: '24rem' }}>
          <Card.Img src='holder.js/171x180' fluid />

          <Card.Body>
            <Card.Title>Product Name</Card.Title>
            <Card.Text>$24.99</Card.Text>
            <Button variant='primary'>Add to Cart</Button>
            <hr></hr>
            <Card.Text>
              <h5>Description</h5>
              <p className='card-text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta.
                Totam id dolores, sint aperiam sequi pariatur praesentium animi
                perspiciatis molestias iure, ducimus!
              </p>
            </Card.Text>
            <span className='text-warning'>
              &#9733; &#9733; &#9733; &#9733; &#9734;
            </span>
            4.0 stars
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>Product Reviews</Card.Header>
          <Card.Body>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et
              enim aperiam inventore, similique necessitatibus neque non!
              Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi
              mollitia, necessitatibus quae sint natus.
            </p>
            <div className='text-muted'>Posted by Anonymous on 3/1/17</div>
            <hr></hr>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et
              enim aperiam inventore, similique necessitatibus neque non!
              Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi
              mollitia, necessitatibus quae sint natus.
            </p>
            <div className='text-muted'>Posted by Anonymous on 3/1/17</div>
            <hr></hr>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et
              enim aperiam inventore, similique necessitatibus neque non!
              Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi
              mollitia, necessitatibus quae sint natus.
            </p>
            <div className='text-muted'>Posted by Anonymous on 3/1/17</div>
            <hr></hr>
            <Button>Leave a Review</Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  )
}
