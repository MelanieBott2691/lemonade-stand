import React from 'react';
import './RegisterForm.css';

export default function RegisterForm(props) {
  return (
    <div className="wrapper">
      <form className="form-register">
        <h2 className="form-register-heading">Please register</h2>
        <input
          type="text"
          className="form-control"
          placeholder="First Name"
          required=""
          autofocus=""
          name="firstName"
          value={props.firstName}
          onChange={props.handleInputChange}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Last Name"
          required=""
          autofocus=""
          name="lastName"
          value={props.lastName}
          onChange={props.handleInputChange}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          required=""
          autofocus=""
          name="userName"
          value={props.userName}
          onChange={props.handleInputChange}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Image URL"
          required=""
          autofocus=""
          name="imageUrl"
          value={props.imageUrl}
          onChange={props.handleInputChange}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Email Address"
          required=""
          autofocus=""
          name="email"
          value={props.email}
          onChange={props.handleInputChange}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          required=""
          name="password"
          value={props.password}
          onChange={props.handleInputChange}
        />

        <button
          onClick={props.handleRegistration}
          className="btn btn-lg btn-primary btn-block"
          type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
