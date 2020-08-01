import React, { Component } from 'react'
import Nav from '../components/Nav/Nav'
import StoreItem from '../components/Store/StoreItem'
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Card
} from 'react-bootstrap'
import Footer from '../components/Footer/Footer'
import Form from 'react-bootstrap/Form'

export default class Store extends Component {
  render () {
    return (
      <>
        <Nav />
        {/* <StoreItem /> */}

        <Container>
          <Row>
            <Col xs={6} md={4}>
              <h1 class='my-4'>Stand Name</h1>
              <ListGroup>
                <ListGroupItem href='#'>Category 1</ListGroupItem>
                <ListGroupItem href='#'>Category 2</ListGroupItem>
                <ListGroupItem href='#'>Category 3</ListGroupItem>
              </ListGroup>
            </Col>

            <Col xs={12} md={8}>
              <h1 class='my-4'>What we STAND for!</h1>
              <ListGroup>
                <ListGroupItem href='#'>Stand Description</ListGroupItem>
              </ListGroup>
            </Col>

            <Col md='auto'>
              {/* <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div> */}

              <Row>
                <Col lg={4} md={6} mb={4}>
                  <Card>
                    <Card.Img
                      variant='top'
                      src='https://www.happinessishomemade.net/wp-content/uploads/2018/04/Tissue-Paper-Snail-9.jpg'
                    />
                    <Card.Body>
                      <Card.Title>
                        <a href='#'>Item One</a>
                      </Card.Title>
                      <h5>$24.99</h5>
                      <p class='card-text'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Amet numquam aspernatur!
                      </p>
                    </Card.Body>
                    <div class='card-footer'>
                      <small class='text-muted'>
                        &#9733; &#9733; &#9733; &#9733; &#9734;
                      </small>
                    </div>
                  </Card>
                </Col>

                <Col lg={4} md={6} mb={4}>
                  <Card>
                    <Card.Img
                      variant='top'
                      src='https://www.happinessishomemade.net/wp-content/uploads/2018/04/Tissue-Paper-Snail-9.jpg'
                    />
                    <Card.Body>
                      <Card.Title>
                        <a href='#'>Item One</a>
                      </Card.Title>
                      <h5>$24.99</h5>
                      <p class='card-text'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Amet numquam aspernatur!
                      </p>
                    </Card.Body>
                    <div class='card-footer'>
                      <small class='text-muted'>
                        &#9733; &#9733; &#9733; &#9733; &#9734;
                      </small>
                    </div>
                  </Card>
                </Col>

                <Col lg={4} md={6} mb={4}>
                  <Card>
                    <Card.Img
                      variant='top'
                      src='https://www.happinessishomemade.net/wp-content/uploads/2018/04/Tissue-Paper-Snail-9.jpg'
                    />
                    <Card.Body>
                      <Card.Title>
                        <a href='#'>Item One</a>
                      </Card.Title>
                      <h5>$24.99</h5>
                      <p class='card-text'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Amet numquam aspernatur!
                      </p>
                    </Card.Body>
                    <div class='card-footer'>
                      <small class='text-muted'>
                        &#9733; &#9733; &#9733; &#9733; &#9734;
                      </small>
                    </div>
                  </Card>
                </Col>

                <Col lg={4} md={6} mb={4}>
                  <Card>
                    <Card.Img
                      variant='top'
                      src='https://www.happinessishomemade.net/wp-content/uploads/2018/04/Tissue-Paper-Snail-9.jpg'
                    />
                    <Card.Body>
                      <Card.Title>
                        <a href='#'>Item One</a>
                      </Card.Title>
                      <h5>$24.99</h5>
                      <p class='card-text'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Amet numquam aspernatur!
                      </p>
                    </Card.Body>
                    <div class='card-footer'>
                      <small class='text-muted'>
                        &#9733; &#9733; &#9733; &#9733; &#9734;
                      </small>
                    </div>
                  </Card>
                </Col>

                <Col lg={4} md={6} mb={4}>
                  <Card>
                    <Card.Img
                      variant='top'
                      src='https://www.happinessishomemade.net/wp-content/uploads/2018/04/Tissue-Paper-Snail-9.jpg'
                    />
                    <Card.Body>
                      <Card.Title>
                        <a href='#'>Item One</a>
                      </Card.Title>
                      <h5>$24.99</h5>
                      <p class='card-text'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Amet numquam aspernatur!
                      </p>
                    </Card.Body>
                    <div class='card-footer'>
                      <small class='text-muted'>
                        &#9733; &#9733; &#9733; &#9733; &#9734;
                      </small>
                    </div>
                  </Card>
                </Col>

                <Col lg={4} md={6} mb={4}>
                  <Card>
                    <Card.Img
                      variant='top'
                      src='https://www.happinessishomemade.net/wp-content/uploads/2018/04/Tissue-Paper-Snail-9.jpg'
                    />
                    <Card.Body>
                      <Card.Title>
                        <a href='#'>Item One</a>
                      </Card.Title>
                      <h5>$24.99</h5>
                      <p class='card-text'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Amet numquam aspernatur!
                      </p>
                    </Card.Body>
                    <div class='card-footer'>
                      <small class='text-muted'>
                        &#9733; &#9733; &#9733; &#9733; &#9734;
                      </small>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Footer />
      </>
    )
  }
}
