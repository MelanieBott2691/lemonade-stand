import React from 'react';
import './StoreInfo.css';
import StoreListItem from '../StoreListItem/StoreListItem.js';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardColumns from 'react-bootstrap/CardColumns';
// import logo from '../StoreInfo/logo.png'

export default class StoreInfo extends React.Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>My Stands</Card.Title>
          <CardColumns>
            {this.props.stores.map((store) => (
              <StoreListItem key={store._id} {...store} />
            ))}
          </CardColumns>
          <Button href="/createstore">Create New Stand</Button>{' '}
        </Card.Body>
      </Card>
    );
  }
}
