import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';
import UserInfo from '../components/UserInfo/UserInfo';
import StoreInfo from '../components/StoreInfo/StoreInfo';
import PurchaseInfo from '../components/PurchaseInfo/PurchaseInfo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../components/Footer/Footer';
import NewStore from '../components/NewStore/NewStore';

export default class Profile extends Component {
  state = {
    user: {
      userName: 'bobby',
      email: 'stuff.com',
      imageUrl:
        'https://www.happinessishomemade.net/wp-content/uploads/2018/04/Tissue-Paper-Snail-9.jpg'
    },
    stores: [
      {
        _id: 12345,
        name: 'Fun Store',
        description: 'stuff'
      },
      {
        _id: 12346,
        name: 'Kids Store',
        description: 'stuff2'
      },
      {
        _id: 12347,
        name: 'Best Store',
        description: 'stuff2'
      },
      {
        _id: 12348,
        name: 'Fun Store',
        description: 'stuff'
      },
      {
        _id: 12349,
        name: 'Kids Store',
        description: 'stuff2'
      },
      {
        _id: 12341,
        name: 'Best Store',
        description: 'stuff2'
      }
    ],
    purchases: [],
    inputSearch: '',
    loggedIn: false
  };

  onChange = (e) => {
    this.setState({ user: { [e.target.id]: e.target.value } });
  };

  render() {
    return (
      <>
        <Nav />
        <Container>
          <Row>
            <Col xl={true} lg={true} md={12} sm={true}>
              <UserInfo user={this.state.user} onChange={this.onChange} />
            </Col>
            <Col md={1} xl={1}></Col>
            <br></br>
            <Col xl={true} lg={true} md={12} sm={true}>
              <StoreInfo stores={this.state.stores} />
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col xl={12}>
              <PurchaseInfo />
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}
