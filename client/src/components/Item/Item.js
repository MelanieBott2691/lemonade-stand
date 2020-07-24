import React from 'react';

export default class Item extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.id}</p>
        <p>{this.props.name}</p>
        <p>{this.props.price}</p>
      </div>
    );
  }
}
