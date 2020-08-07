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
            <h3 className="our-story-container">What We "Stand" For!</h3>
          </Row>
          {/* image card */}
          <CardDeck>
            <Card style={{ width: '24rem' }}>
              <Card.Img className="about-image" src={about} fluid />
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Inspire Others, Lead!</Card.Title>
                <Card.Text>
                  “If your actions inspire others to dream more, learn more, do
                  more and become more, you are a leader.”
                  <div className="text-muted">– John Quincy Adams</div>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
          <br></br>
          <Card className="our-platform-container">
            {/* <Card.Header>Our Platform</Card.Header> */}

            <Card.Body className="platform-container">
              {/* <div>What We "Stand" For</div> */}
              <p>
                Online shoppings brings to its users the accessibility and
                convenience of online shopping with the ability to search
                massive online retail catalogs at the tap of the key. While the
                online shopping experience is convenient it continues to pad the
                pockets of large corporations and their CEO's without the
                emotional or personal experience that users expect or deserve.
              </p>
              <div className="text-muted">
                "Success is making those who believed in you look brilliant."
              </div>
              <hr></hr>
              <p>
                The Lemonade Stand is not your typical e-commerce site. It is
                the next evolution of the American Dream. We cater toward
                society's most precious commodity, kids! Lemonade Stand is a
                platform for America's future entrepreneurs, where we hope to
                inspire, nurture, and plant the seeds of ethics.
              </p>
              <div className="text-muted">
                "Happiness doesn't result from what we get, but from what we
                give."
              </div>
              <hr></hr>
              <p>
                With the Lemonade Stand we saw an opportunity to create an
                online space for kids where they can not only take their
                creations to market but also learn about business ethic, and
                raise money for a cause, charity or loved ones in the process.
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
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>

              <Card.Text>
                <p className="card-text">
                  "Rather than standing or speaking for children, we need to
                  stand with children speaking for themselves. We don't need a
                  political movement for children...[we need to] build
                  environments and policies for our collective future."
                  <div className="text-muted">-Sandra Meucci</div>
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
