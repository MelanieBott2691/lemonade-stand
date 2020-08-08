import React from 'react';
import './UserItems.css';
import Item from './Item.js';
import './NewStore.css';
import NewItem from './NewItem.js';

import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

export default class UserItems extends React.Component {
  render() {
    return (
      <>
        <NewItem user={this.props.user} grabItems={this.props.grabItems} />
        <div className="">
          {this.props.items.map((item) => (
            <Item key={item._id} {...item} />
          ))}
        </div>
      </>
    );
  }
}
