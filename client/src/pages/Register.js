import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';
import RegisterForm from '../components/RegisterForm/RegisterForm';

export default class Register extends Component {
  render() {
    return (
      <>
        <Nav />
        <RegisterForm />
      </>
    );
  }
}
