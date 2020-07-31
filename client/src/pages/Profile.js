import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';
import UserInfo from '../components/UserInfo/UserInfo';
import StoreInfo from '../components/StoreInfo/StoreInfo';
import PurchaseInfo from '../components/PurchaseInfo/PurchaseInfo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Profile extends Component {
  state = {
    user: {
      name: 'bobby',
      email: 'stuff.com'
    },
    stores: [],
    purchases: [],
    inputSearch: ''
  };

  render() {
    return (
      <>
        <Nav />
        <Container>
          <Row> 
            <Col>         
              <UserInfo user={this.state.user} />
            </Col> 
          </Row>  
          <Row>
            <Col>
              <StoreInfo />
            </Col>
          </Row>  
          <Row>
            <Col>
              <PurchaseInfo />
            </Col>
          </Row>  
          
        </Container>
      </>
    );
  }
}
