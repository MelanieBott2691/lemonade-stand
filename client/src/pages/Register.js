import React, { Component } from 'react';
import API from '../utils/API';
import Nav from '../components/Nav/Nav';
import RegisterForm from '../components/RegisterForm/RegisterForm';

export default class Register extends Component {
  state = {
    firstName: '',
    lastName: '',
    userName: '',
    imageUrl: '',
    email: '',
    password: ''
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleRegistration = (event) => {
    event.preventDefault();
    API.createUser(this.state)
      .then((res) => this.setState({ data: res.data }))
      .catch((err) => console.log(err));
    console.log(this.state.data);
  };

  render() {
    return (
      <>
        <Nav />
        <RegisterForm
          handleRegistration={this.handleRegistration}
          handleInputChange={this.handleInputChange}
          data={this.state}
        />
      </>
    );
  }
}
