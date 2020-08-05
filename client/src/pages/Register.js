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
    password: '',
    password2: '',
    errors: {}
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleRegistration = (event) => {
    event.preventDefault();
    const newUser = {
      userName: this.state.userName,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      imageUrl: this.state.imageUrl,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    API.register(newUser)
      .then((res) => {
        this.setState({ data: res.data });
        this.alert(res);
      })
      .catch((err) => console.log(this.state.errors));
  };

  alert = (response) => {
    console.log(response);
  };

  render() {
    const { errors } = this.state;

    return (
      <>
        <Nav />
        <RegisterForm
          handleRegistration={this.handleRegistration}
          handleInputChange={this.handleInputChange}
          data={this.state}
          errors={errors}
        />
      </>
    );
  }
}
