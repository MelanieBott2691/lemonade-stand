import React from 'react';
import Item from '../Item/Item.js';

export default class Results extends React.Component {
  render() {
    return this.props.data.map((item) => <Item key={item.id} {...item} />);
  }
}
