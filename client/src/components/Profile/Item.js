import React from 'react';
import Img from 'react-image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import EditStandModal from './EditStandModal';

export default class Item extends React.Component {
  render() {
    return (
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src="https://cdn.shopify.com/s/files/1/2012/3849/files/wwtfobxfl9vlqhios0zm_2048x_206929a3-95cc-485b-9304-3d3bf6b80530_2048x.jpg?v=1583182272"
              className="card-img"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{this.props.name}</h5>
              <p className="card-text">{this.props.description}</p>
              <p className="card-text">
                <small className="text-muted">
                  Price: ${this.props.price} |{' '}
                </small>
                <small className="text-muted">
                  Quantity: {this.props.quantity}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
