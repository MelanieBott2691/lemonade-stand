import React from 'react';
import './StoreInfo.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import logo from '../StoreInfo/logo.png';

export default function StoreInfo() {
  return (
    <Card>
      <Card.Img className="logo"
        variant="top"
        src={logo}
      />
      <Card.Body>
        <Card.Title>My Stands</Card.Title>
        <Button href="#">
          Create New Stand
        </Button> <Button href="#">Edit Stand</Button>{' '}
      </Card.Body>
    </Card>
  );
}

