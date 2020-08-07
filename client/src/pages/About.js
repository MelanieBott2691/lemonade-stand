import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import '../assets/css/style.css';
import { about } from '../assets/images/img7.jpg';
import { Container, Row, CardDeck, Card } from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
      <>
        <Nav />

        <Container>
          <Row>
            <h1 className="our-story-container">Our Story</h1>
          </Row>
          {/* image card */}
          <CardDeck>
            <Card style={{ width: '24rem' }}>
              <Card.Img className="about-image" src={about} fluid />
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>MERN Students.....</Card.Title>
                <Card.Text>All about us!!</Card.Text>
                <hr></hr>
                <Card.Text>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente dicta fugit fugiat hic aliquam itaque facere,
                    soluta. Totam id dolores, sint aperiam sequi pariatur
                    praesentium animi perspiciatis molestias iure, ducimus!
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
          <br></br>
          <Card className="our-platform-container">
            {/* <Card.Header>Our Platform</Card.Header> */}

            <Card.Body className="platform-container">
              <h1>Our Platform</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                et enim aperiam inventore, similique necessitatibus neque non!
                Doloribus, modi sapiente laboriosam aperiam fugiat laborum.
                Sequi mollitia, necessitatibus quae sint natus.
              </p>
              <div className="text-muted">
                "Success is making those who believed in you look brilliant."
              </div>
              <hr></hr>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                et enim aperiam inventore, similique necessitatibus neque non!
                Doloribus, modi sapiente laboriosam aperiam fugiat laborum.
                Sequi mollitia, necessitatibus quae sint natus.
              </p>
              <div className="text-muted">
                "Happiness doesn't result from what we get, but from what we
                give."
              </div>
              <hr></hr>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                et enim aperiam inventore, similique necessitatibus neque non!
                Doloribus, modi sapiente laboriosam aperiam fugiat laborum.
                Sequi mollitia, necessitatibus quae sint natus.
              </p>
              <div className="text-muted">
                "Action is the fundamental key to success"
              </div>
              <hr></hr>
            </Card.Body>
          </Card>
          <br></br>
          <Card className="bottom-container">
            <Card.Body>
              <Card.Title>More stuff....</Card.Title>
              <Card.Text>What to say here....</Card.Text>
              <hr></hr>
              <Card.Text>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta.
                  Totam id dolores, sint aperiam sequi pariatur praesentium
                  animi perspiciatis molestias iure, ducimus!
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
        <Footer />
      </>
    );
  }
}
