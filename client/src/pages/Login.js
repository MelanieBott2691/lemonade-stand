import React, { Component } from 'react'
import Nav from '../components/Nav/Nav'
import LoginForm from '../components/LoginForm/LoginForm'

export default class Login extends Component {
  render () {
    return (
      <>
        <Nav />
        <LoginForm />
      </>
    )
  }
}
