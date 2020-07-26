import React from 'react';
import './Carousel.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Carouselbanner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='d-block w-100' src='https://i.pinimg.com/originals/f9/45/c8/f945c8f2d72a538a8165f3b1be0ce1af.jpg' alt='First slide' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          alt='Third slide'
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://images.pexels.com/photos/3913426/pexels-photo-3913426.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
          alt='Third slide'
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
