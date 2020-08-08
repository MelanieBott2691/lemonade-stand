import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import API from '../utils/API';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Nav from '../components/Nav/Nav';
import UserInfo from '../components/Profile/UserInfo';
import UserItems from '../components/Profile/UserItems';
import PurchaseInfo from '../components/Profile/PurchaseInfo';
import Footer from '../components/Footer/Footer';

class Profile extends Component {
  state = {
    userId: this.props.auth.user.id,
    items: []
  };

  grabItems = () => {
    API.getUser(this.state.userId)
      .then((res) => {
        this.setState({ items: res.data.items });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.grabItems();
  }

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
              <UserItems
                user={user}
                grabItems={this.grabItems}
                items={this.state.items}
                onChange={this.onChange}
              />
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col xl={12}>
              <PurchaseInfo />
            </Col>
          </Row>
        </Container>
        <br />
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
