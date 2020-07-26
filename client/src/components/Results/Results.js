import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Item from '../Item/Item.js';

export default class Results extends React.Component {
  render() {
    return (
      <CardColumns>
        {this.props.data.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </CardColumns>
    );
  }
}
