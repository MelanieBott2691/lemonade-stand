import React, { Component } from 'react';
import API from '../utils/API';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../actions/authActions';
import Nav from '../components/Nav/Nav';
import RegisterForm from '../components/RegisterForm/RegisterForm';

class Register extends Component {
  state = {
    firstName: '',
    lastName: '',
    userName: '',
    imageUrl: '',
    email: '',
    password: '',
    password2: '',
    errors: {}
  };

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  getDerivedStateFromProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userName: this.state.userName,
      imageUrl: this.state.imageUrl,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <>
        <Nav />
        <RegisterForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          data={this.state}
          errors={errors}
        />
      </>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
