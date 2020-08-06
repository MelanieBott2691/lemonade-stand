import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import Nav from '../components/Nav/Nav';
import UserInfo from '../components/UserInfo/UserInfo';
import StoreInfo from '../components/StoreInfo/StoreInfo';
import PurchaseInfo from '../components/PurchaseInfo/PurchaseInfo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../components/Footer/Footer';
// import NewStore from '../components/NewStore/NewStore';

class Profile extends Component {
  state = {
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
    purchases: []
  };

  onChange = (e) => {
    this.setState({ user: { [e.target.id]: e.target.value } });
  };

  render() {
    const { user } = this.props.auth;

    return (
      <>
        <Nav />
        <Container>
          <Row>
            <Col xl={true} lg={true} md={12} sm={true}>
              <UserInfo user={user} onChange={this.onChange} />
            </Col>
            <Col md={1} xl={1}></Col>
            <br></br>
            <Col xl={true} lg={true} md={12} sm={true}>
              <StoreInfo stores={this.state.stores} onChange={this.onChange} />
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

Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Profile);
