import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import EditStandModal from '../StoreInfo/EditStandModal';

export default class StoreListItem extends React.Component {
  render() {
    return (
      <Card>
        <Card.Img
          variant="top"
          src="https://www.happinessishomemade.net/wp-content/uploads/2018/04/Tissue-Paper-Snail-9.jpg"
        />
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <EditStandModal />
          {/* <Button
            className="btn-sm btn-block"
            variant="primary"
            onClick={() => this.handleModalShowHide()}>
            Go To
          </Button> */}
          <Button
            className="btn btn-primary btn-sm btn-block"
            variant="primary"
            href="#"
            role="button">
            Go To
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
