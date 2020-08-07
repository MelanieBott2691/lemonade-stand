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

        <br />
        <br />

        <Container>
          <Row>
            <br />
            <h3 className="our-story-container">What We "Stand" For!</h3>
          </Row>
          <br />
          <CardDeck>
            <Card>
              <Card.Img className="about-image" src={about} />
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Inspire Others, Lead!</Card.Title>
                <Card.Text>
                  "If your actions inspire others to dream more, learn more, do
                  more and become more, you are a leader."
                  <div className="text-muted">– John Quincy Adams</div>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
          <br />
          <CardDeck>
            <Card className="our-platform-container">
              <Card.Body className="platform-container">
                <p>
                  Online shoppings brings to its users the accessibility and
                  convenience of online shopping with the ability to search
                  massive online retail catalogs at the tap of the key. While
                  the online shopping experience is convenient it continues to
                  pad the pockets of large corporations and their CEO's without
                  the emotional or personal experience that users expect or
                  deserve.
                </p>
                <div className="text-muted">
                  "Success is making those who believed in you look brilliant."
                </div>
                <hr />
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
                <hr />
                <p>
                  With the Lemonade Stand we saw an opportunity to create an
                  online space for kids where they can not only take their
                  creations to market but also learn about business ethic, and
                  raise money for a cause, charity or loved ones in the process.
                </p>
                <div className="text-muted">
                  "Action is the fundamental key to success"
                </div>
                <hr />
              </Card.Body>
            </Card>
          </CardDeck>
          <br />
          <CardDeck>
            <Card className="bottom-container">
              <Card.Body>
                <h4>Introducing Lemonade Stand</h4>
                <p>
                  At lemonade-stand, we saw an opportunity to create an online
                  space for kids where they can not only take their creations to
                  market but also learn about business ethics, and raise money
                  for a cause, charity, or loved one in the process. All in an
                  attempt to recapture the essence of business. Community. Using
                  a simple to use, yet visually appealing UI, and the latest
                  industry technologies and practices, your kids will have the
                  opportunity to create their very own online virtual lemonade
                  stand from where they can add and sell their products. And
                  through lemonade-stand, taking their potential customer reach
                  from your typical neighborhood or street to the nation and
                  beyond. The profits from those sales will return to the local
                  communities and charities where you and your children live.
                  This not only benefits your kids and brings cash flow and
                  empowerment back to the community in which they've been
                  raised. It does so by enabling them with the sense of doing
                  something good for the world through business. Hopefully,
                  instilling a better business world and future.
                </p>
                <hr />
                <p className="card-text">
                  “The more we increase the active participation and partnership
                  with young people, the better we serve them. … And the more
                  comprehensively we work with them as service partners, the
                  more we increase our public value to the entire community.
                </p>
                <div className="text-muted">-Carmen Martinez</div>
                <hr />
                <p className="card-text">
                  "Rather than standing or speaking for children, we need to
                  stand with children speaking for themselves. We don't need a
                  political movement for children...[we need to] build
                  environments and policies for our collective future."
                </p>
                <div className="text-muted">-Sandra Meucci</div>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
        <br />
        <Footer />
      </>
    );
  }
}
