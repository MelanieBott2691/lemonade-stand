import React from 'react';
import './Carousel.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Carouselbanner() {
  return (
    <Carousel>
      <Carousel.Item className="carouselSize">
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/2842734/pexels-photo-2842734.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="First slide"
          // fluid
          // rounded
        />
        <Carousel.Caption>
          <h2>CREATIVITY</h2>
          <blockquote className="blockquote mb-0 card-body">
            <small className="font-size">
              "To know is nothing at all; To imagine is everything." 
              <p>                     </p>
            </small>
            <footer>
              <small>
                - Anatole France <cite title="Source Title"></cite>
              </small>
            </footer>
          </blockquote>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselSize">
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="Third slide"
          // fluid
          // rounded
        />
        <Carousel.Caption>
          <h2>CHARITY</h2>
          <blockquote className="blockquote mb-0 card-body">
            <small className="font-size">
              “No one has ever become poor by giving.”
              <p>                     </p>
            </small>
            <footer>
              <small>
                - Anne Frank <cite title="Source Title"></cite>
              </small>
            </footer>
          </blockquote>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselSize">
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1150626/pexels-photo-1150626.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="Third slide"
          // fluid
          // rounded
        />
        <Carousel.Caption>
          <h2>COMMUNITY</h2>
          <blockquote className="blockquote mb-0 card-body">
            <small className="font-size">
              “Alone, we can do so little; together, we can do so much”
            </small>
            <footer>
              <small>
                - Helen Keller <cite title="Source Title"></cite>
              </small>
            </footer>
          </blockquote>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
