import React from 'react';
import './LoginForm.css';

export default function LoginForm(props) {
  return (
    <div className="wrapper">
      <form className="form-signin">
        <h2 className="form-signin-heading">Please login</h2>
        <input
          type="text"
          className="form-control"
          name="email"
          placeholder="Email Address"
          required=""
          error={props.errors.email}
          value={props.email}
          onChange={props.handleInputChange}
          autofocus=""
        />
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          error={props.errors.password}
          value={props.password}
          onChange={props.handleInputChange}
          required=""
        />

        <button
          onClick={props.handleLogin}
          className="btn btn-lg btn-primary btn-block"
          type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
