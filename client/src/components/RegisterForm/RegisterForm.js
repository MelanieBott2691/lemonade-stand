import React from 'react';
import './RegisterForm.css';

export default function RegisterForm() {
  return (
    <div className="wrapper">
      <form className="form-register">
        <h2 className="form-register-heading">Please register</h2>
        <input
          type="text"
          className="form-control"
          name="firstname"
          placeholder="First Name"
          required=""
          autofocus=""></input>
        <input
          type="text"
          className="form-control"
          name="lastname"
          placeholder="Last Name"
          required=""
          autofocus=""></input>
        <input
          type="text"
          className="form-control"
          name="username"
          placeholder="Username"
          required=""
          autofocus=""></input>
        <input
          type="text"
          className="form-control"
          name="email"
          placeholder="Email Address"
          required=""
          autofocus=""></input>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          required=""></input>

        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
