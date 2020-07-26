import React from 'react';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

export default class Item extends React.Component {
  render() {
    return (
  //     <Card style={{ width: '18rem' }}>
  //   <Card.Img variant="top" src="https://www.happinessishomemade.net/wp-content/uploads/2018/04/Tissue-Paper-Snail-9.jpg" />
  //   <Card.Body>
  //     <Card.Title>Name:{this.props.name}</Card.Title>
  //     <Card.Title>Price:{this.props.price}</Card.Title>
  //     <Card.Title>id:{this.props.id}</Card.Title>
  //     {/* <Card.Text>
  //       Some quick example text to build on the card title and make up the bulk of
  //       the card's content.
  //     </Card.Text> */}
  //   </Card.Body>
  //   {/* <ListGroup className="list-group-flush">
  //     <ListGroupItem>{this.props.id}</ListGroupItem>
  //     <ListGroupItem>{this.props.name}</ListGroupItem>
  //     <ListGroupItem>{this.props.price}</ListGroupItem>
  //   </ListGroup> */}
  //   <Card.Body>
  //     <Card.Link href="#">Add to Cart</Card.Link>
  //     <Card.Link href="#">Store</Card.Link>
  //   </Card.Body>
  // </Card>

  <CardColumns>
  <Card>
    <Card.Img variant="top" src="https://www.happinessishomemade.net/wp-content/uploads/2018/04/Tissue-Paper-Snail-9.jpg" />
    <Card.Body>
      <Card.Title>{this.props.name}</Card.Title>
      <Card.Title>Price:{this.props.price}</Card.Title>
      <Card.Title>id:{this.props.id}</Card.Title>
      <Button href="#">Add to Cart</Button> <Button href="#">Store</Button>{' '}
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.happinessishomemade.net/wp-content/uploads/2018/04/Tissue-Paper-Snail-9.jpg" />
    <Card.Body>
      <Card.Title>{this.props.name}</Card.Title>
      <Card.Title>Price:{this.props.price}</Card.Title>
      <Card.Title>id:{this.props.id}</Card.Title>
      <Button href="#">Add to Cart</Button> <Button href="#">Store</Button>{' '}
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.happinessishomemade.net/wp-content/uploads/2018/04/Tissue-Paper-Snail-9.jpg" />
    <Card.Body>
      <Card.Title>{this.props.name}</Card.Title>
      <Card.Title>Price:{this.props.price}</Card.Title>
      <Card.Title>id:{this.props.id}</Card.Title>
      <Button href="#">Add to Cart</Button> <Button href="#">Store</Button>{' '}
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.happinessishomemade.net/wp-content/uploads/2018/04/Tissue-Paper-Snail-9.jpg" />
    <Card.Body>
      <Card.Title>{this.props.name}</Card.Title>
      <Card.Title>Price:{this.props.price}</Card.Title>
      <Card.Title>id:{this.props.id}</Card.Title>
      <Button href="#">Add to Cart</Button> <Button href="#">Store</Button>{' '}
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.happinessishomemade.net/wp-content/uploads/2018/04/Tissue-Paper-Snail-9.jpg" />
    <Card.Body>
      <Card.Title>{this.props.name}</Card.Title>
      <Card.Title>Price:{this.props.price}</Card.Title>
      <Card.Title>id:{this.props.id}</Card.Title>
      <Button href="#">Add to Cart</Button> <Button href="#">Store</Button>{' '}
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.happinessishomemade.net/wp-content/uploads/2018/04/Tissue-Paper-Snail-9.jpg" />
    <Card.Body>
      <Card.Title>{this.props.name}</Card.Title>
      <Card.Title>Price:{this.props.price}</Card.Title>
      <Card.Title>id:{this.props.id}</Card.Title>
        <Button href="#">Add to Cart</Button> <Button href="#">Store</Button>{' '}
    </Card.Body>
  </Card>
</CardColumns>
    );
  }
}
