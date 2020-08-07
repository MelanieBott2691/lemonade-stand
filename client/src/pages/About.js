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
          {/* image card */}
          <CardDeck>
            <Card style={{ width: '24rem' }}>
              <Card.Img className="about-image" src={about} fluid />
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>
                  “If your actions inspire others to dream more, learn more, do
                  more and become more, you are a leader.”
                </Card.Title>
                <div className="text-muted">
                  <Card.Text>– John Quincy Adams</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </CardDeck>
          <br></br>
          <Card className="our-platform-container">
            {/* <Card.Header>Our Platform</Card.Header> */}

            <Card.Body className="platform-container">
              {/* <h1>Our Platform</h1> */}
              <p>
                Today I'd like to present a new vision of the American dream and
                how that vision pertains to eCommerce specifically. A dream
                that, in recent times, can seem more and more challenging to
                achieve. So, e-commerce. Everyone loves the accessibility and
                convenience of online shopping. The ability to search a massive
                online retail catalog at the tap of a key, purchasing a product
                at the click of a mouse and having it shipped to your doorstep
                within a few short days all within the safety and comfort of
                your home is a pretty spectacular feat.
              </p>
              <div className="text-muted">
                "Success is making those who believed in you look brilliant."
              </div>
              <hr></hr>
              <p>
                Small businesses are the lifeblood of the economy, and cash flow
                is the lifeblood of business. And due to the inability to
                compete with online retail, an ever-increasing amount of small
                businesses are being wiped out daily. Thereby decimating the
                local economies and communities in which those businesses
                reside. When businesses close, jobs are lost, and when jobs are
                lost, cash flow dwindles. Without that heartbeat of small and
                local businesses, our communities begin to suffer and fade.
              </p>
              <div className="text-muted">
                "Happiness doesn't result from what we get, but from what we
                give."
              </div>
              <hr></hr>
              <p>
                So what can be done? Why is that these corporations seem to have
                forgotten the most crucial element of business? That is, of
                course, the humans who purchase, manufacture, and make up the
                society in which their business has flourished. We believe this
                idea that the pursuit of exponential growth at all costs at the
                expense of all good is a behavior that can be curtailed. Today,
                without further a due, I'd like to introduce the next evolution
                of the American dream to you. Lemonade-Stand! An e-commerce
                platform catered toward society's most precious commodity. Kids.
                A platform for America's future entrepreneurs, where we hope to
                inspire, nurture, and plant the seeds of ethics. A platform that
                views business through the lens of community, connectedness,
                charity, compassion, humanity, and love. I think we could all
                use pair of those lenses, don't you think? Oh, hey (Put on
                heart-shaped sunglasses. (a nice, memorable visual aid that will
                help us stand out in our presentation I think ha))
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
              <Card.Title>Introducing Lemonade Stand</Card.Title>
              <Card.Text>
                At lemonade-stand, we saw an opportunity to create an online
                space for kids where they can not only take their creations to
                market but also learn about business ethics, and raise money for
                a cause, charity, or loved one in the process. All in an attempt
                to recapture the essence of business. Community. Using a simple
                to use, yet visually appealing UI, and the latest industry
                technologies and practices, your kids will have the opportunity
                to create their very own online virtual lemonade stand from
                where they can add and sell their products. And through
                lemonade-stand, taking their potential customer reach from your
                typical neighborhood or street to the nation and beyond. The
                profits from those sales will return to the local communities
                and charities where you and your children live. This not only
                benefits your kids and brings cash flow and empowerment back to
                the community in which they've been raised. It does so by
                enabling them with the sense of doing something good for the
                world through business. Hopefully, instilling a better business
                world and future.{' '}
              </Card.Text>
              <hr></hr>
              <Card.Text>
                <p className="card-text">
                  “The more we increase the active participation and partnership
                  with young people, the better we serve them. … And the more
                  comprehensively we work with them as service partners, the
                  more we increase our public value to the entire community.”
                </p>
                <div className="text-muted">— Carmen Martinez</div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
        <Footer />
      </>
    );
  }
}
