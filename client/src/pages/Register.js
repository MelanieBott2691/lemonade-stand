import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../actions/authActions';
import classnames from 'classnames';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import { Card, Container } from 'react-bootstrap';
import './Register.css';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/profile');
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      userName: this.state.userName,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <Nav />
        <br></br>
        <div className="justify-content-center container">
          <div className="justify-content-center card">
            <div className="contact-container">
              <form className="justify-content-center">
                <div className="container-center">
                  <br></br>
                  <div className="center">
                    <h4 className="">
                      <b>Register</b> below
                    </h4>
                  </div>
                  <div className="card.body">
                    <div className="card.text">
                      <form className="" noValidate onSubmit={this.onSubmit}>
                        <div className="form-group">
                          <label htmlFor="userName">User Name</label>
                          <input
                            onChange={this.onChange}
                            value={this.state.userName}
                            error={errors.userName}
                            id="userName"
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="firstName">First Name</label>
                          <input
                            onChange={this.onChange}
                            value={this.state.firstName}
                            error={errors.firstName}
                            id="firstName"
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="lastName">Last Name</label>
                          <input
                            onChange={this.onChange}
                            value={this.state.lastName}
                            error={errors.lastName}
                            id="lastName"
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div>
                          <span className="red-text">{errors.name}</span>
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                            id="email"
                            type="email"
                            className="form-control"
                          />
                          <span className="red-text">{errors.email}</span>
                        </div>
                        <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <input
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                            id="password"
                            type="password"
                            className="form-control"
                          />
                          <span className="red-text">{errors.password}</span>
                        </div>
                        <div className="form-group">
                          <label htmlFor="password2">Confirm Password</label>
                          <input
                            onChange={this.onChange}
                            value={this.state.password2}
                            error={errors.password2}
                            id="password2"
                            type="password"
                            className="form-control"
                          />
                          <span className="red-text">{errors.password2}</span>
                        </div>
                        <div className="center align-content-center">
                          <p className="grey-text text-darken-1 center">
                            Already have an account?{' '}
                            <Link to="/login">Log in</Link>
                          </p>
                        </div>
                        <div className="center">
                          <button
                            style={{
                              width: '150px',
                              borderRadius: '3px',
                              letterSpacing: '1.5px',
                              marginTop: '1rem'
                            }}
                            type="submit"
                            className="btn btn-large btn-primary waves-effect waves-light">
                            Sign up
                          </button>
                          <br></br>
                        </div>
                      </form>
                      <br></br>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <br></br>
        <Footer />
      </div>
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
