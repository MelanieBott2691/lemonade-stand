import React from 'react';
import './StoreInfo.css';
import StoreListItem from '../StoreListItem/StoreListItem.js';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardColumns from 'react-bootstrap/CardColumns';
import '../NewStore/NewStore.js';
import NewStore from '../NewStore/NewStore.js';
import EditStandModal from '../StoreInfo/EditStandModal';
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
          {/* <Button href="#">Create New Stand</Button>{' '} */}
          <NewStore />
        </Card.Body>
      </Card>
    );
  }
}
