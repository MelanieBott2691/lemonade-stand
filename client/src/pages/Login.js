import React, { Component } from 'react';
import API from '../utils/API';
import Nav from '../components/Nav/Nav';
import LoginForm from '../components/LoginForm/LoginForm';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  };

  handleLogin = (event) => {
    event.preventDefault();
    const loginUser = {
      email: this.state.email,
      password: this.state.password
    };
    API.login(loginUser)
      .then((res) => {
        console.log(res);
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
        <LoginForm
          handleLogin={this.handleLogin}
          handleInputChange={this.handleInputChange}
          data={this.state}
          errors={errors}
        />
      </>
    );
  }
}
