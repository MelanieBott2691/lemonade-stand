import React from 'react';
// import './StoreInfo.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import FormLabel from 'react-bootstrap/FormLabel';
// import FormControl from 'react-bootstrap/FormControl';


export default function StoreInfo() {
  return (
    <Card>
      <Card.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Stand Name</Form.Label>
            <Form.Control type="name" placeholder="Name of your Stand." />
          </Form.Group>
          <Form.Group>
            <Form.File id="exampleFormControlFile1" label="Upload an Image for your Stand" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Example select</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Example multiple select</Form.Label>
            <Form.Control as="select" multiple>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Stand Description</Form.Label>
            <Form.Control as="textarea" rows="4" placeholder="What do you STAND for? What is it you're trying to achieve with your stand? Whether it's trying to make the world a better place through charity, raising funds for a cause, or loved one, your customers want to know!" />
          </Form.Group>
        </Form>
        <Button href="#">
          Save Stand
        </Button> 
      </Card.Body>
    </Card>
  );
}