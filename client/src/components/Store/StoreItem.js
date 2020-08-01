import React from 'react'
// import './StoreInfo.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import StoreInfo from '../StoreInfo/StoreInfo'
import { Container, Row, Col } from 'react-bootstrap'

export default function StoreItem () {
  return (
    <Container>
      <Row>
        <h1 className='my-4'>Shop Name</h1>
        <div className='list-group'>
          <a href='#' className='list-group-item active'>
            Category 1
          </a>
          <a href='#' className='list-group-item'>
            Category 2
          </a>
          <a href='#' className='list-group-item'>
            Category 3
          </a>
        </div>
      </Row>
      <Col>
        <Row>
          <Card>
            <Card.Img
              className='logo'
              variant='top'
              src='nothingfornow'
              alt=''
            />
            <Card.Body>
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
              <Button href='/createstore'>Create New Stand</Button>{' '}
              <Button href='#'>Edit Stand</Button>{' '}
            </Card.Body>
          </Card>
        </Row>
      </Col>
    </Container>
  )
}
