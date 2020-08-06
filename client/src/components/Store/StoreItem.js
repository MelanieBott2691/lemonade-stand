import React from 'react';
// import './StoreInfo.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import StoreInfo from '../StoreInfo/StoreInfo'
import { Container, Row, CardDeck } from 'react-bootstrap';
import Nav from '../Nav/Nav';
import './StoreItem.css';

class StoreItem extends React.Component {
  constructor() {
    super();
    this.state = {
      showHide: false
    };
  }
  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }
  // const product = data.products.find((x) => x._id === props.match.params.id);
  render() {
    return (
      <div>
        <Nav />
        <div>
          <Container>
            {/* <button> */}
            <a
              href="/cart"
              onclick="close_window();return false;"
              id="exit-btn">
              X
            </a>
            {/* </button> */}

            <Row>
              <h1 className="my-4">Item</h1>
            </Row>
            {/* image card */}
            <CardDeck>
              <Card style={{ width: '24rem' }}>
                <Card.Img src={''} fluid />
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Product Name</Card.Title>
                  <Card.Text>${''}</Card.Text>
                  <Button
                    className="add-to-cart-btn"
                    variant="primary"
                    onClick={() => this.handleModalShowHide()}>
                    Add to Cart
                  </Button>
                  <hr></hr>
                  <Card.Text>
                    <h5>Description</h5>
                    <p className="card-text">{''}</p>
                  </Card.Text>
                  {/* <span className="text-warning">
                    &#9733; &#9733; &#9733; &#9733; &#9734;
                  </span>
                  4.0 reached goal */}
                </Card.Body>
              </Card>
            </CardDeck>
            <br></br>
            <Card className="reviews-card">
              <Card.Header>
                Charitable Contribution Comments
                <a className="text-muted">
                  (You can leave a comment about the charity of your choosing
                  and why you chose to donate)
                </a>
              </Card.Header>
              <Card.Body>
                <p>
                  "I love animals and try to donate to Best Friends for the
                  shelters but being able to donate and purchase crafted items
                  is so much fun. Can't wait to share this site with my
                  friends."
                </p>
                <div className="text-muted">
                  Posted by Anonymous on 8/1/2020
                </div>
                <hr></hr>
                <p>
                  "What a fun way to buy gifts that are specially made and
                  donate to charity. I purchased this cute item for a friend who
                  is at Primary Children's and donated to Make A Wish at the
                  same time. Such a fun experience"
                </p>
                <div className="text-muted">
                  Posted by Anonymous on 8/4/2020
                </div>
                <hr></hr>
                <p>
                  "Such a great idea! I love supporting young entrepreneurs"
                </p>
                <div className="text-muted">
                  Posted by Anonymous on 8/4/2020
                </div>
                <hr></hr>
                <Button>Leave a Comment</Button>
              </Card.Body>
            </Card>
          </Container>
        </div>
      </div>
    );
  }
}
export default StoreItem;
