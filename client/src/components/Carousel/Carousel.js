import React from 'react';
import './Carousel.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Carouselbanner() {
  return (
    <Carousel>
      <Carousel.Item className="carouselSize" fluid rounded>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/2832379/pexels-photo-2832379.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="First slide"
          fluid
          rounded
        />
        <Carousel.Caption>
          <h3>CREATIVITY</h3>
          <blockquote className="blockquote mb-0 card-body">
            <small>
              "To know is nothing at all; To imagine is everything."
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
          src="https://images.pexels.com/photos/2180803/pexels-photo-2180803.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="Third slide"
          fluid
          rounded
        />
        <Carousel.Caption>
          <h3>CHARITY</h3>
          <blockquote className="blockquote mb-0 card-body">
            <small>“No one has ever become poor by giving.”</small>
            <footer>
              <small>
                ― Anne Frank <cite title="Source Title"></cite>
              </small>
            </footer>
          </blockquote>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselSize">
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/2457278/pexels-photo-2457278.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="Third slide"
          fluid
          rounded
        />
        <Carousel.Caption>
          <h3>COMMUNITY</h3>
          <blockquote className="blockquote mb-0 card-body">
            <small>
              “Alone, we can do so little; together, we can do so much”
            </small>
            <footer>
              <small>
                ― Helen Keller <cite title="Source Title"></cite>
              </small>
            </footer>
          </blockquote>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
