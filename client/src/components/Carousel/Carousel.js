import React from 'react';
import './Carousel.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Carouselbanner() {
  return (
    <Carousel>
      <Carousel.Item className="carouselSize" fluid rounded >
        <img className='d-block w-100' src='https://images.pexels.com/photos/159644/art-supplies-brushes-rulers-scissors-159644.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='First slide' fluid rounded />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselSize">
        <img
          className='d-block w-100'
          src='https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          alt='Third slide'
          fluid
          rounded
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselSize">
        <img
          className='d-block w-100'
          src='https://images.pexels.com/photos/1153895/pexels-photo-1153895.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          alt='Third slide'
          fluid
          rounded
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
