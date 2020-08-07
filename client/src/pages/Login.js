import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';
import classnames from 'classnames';
import Nav from '../components/Nav/Nav.js';
import Footer from '../components/Footer/Footer';
import { Card, Container } from 'react-bootstrap';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/profile');
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/profile');
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <Nav />
        <Container className="justify-content-center align-self-center">
          <Card>
            <div className="contact-container">
              <form>
                <div className="container">
                  {/* <Card.Header>Send us a Message</Card.Header> */}
                  <Card.Body>
                    <div className="form-group">
                      <h4>
                        <b>Login</b> below
                      </h4>
                    </div>
                    <Card.Text>
                      <form noValidate onSubmit={this.onSubmit}>
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
                          <span className="red-text">
                            {errors.email}
                            {errors.emailnotfound}
                          </span>
                        </div>
                        <div className="input-field form-group">
                          <label htmlFor="password">Password</label>
                          <input
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                            id="password"
                            type="password"
                            className="form-control"
                          />
                          <span className="red-text">
                            {errors.password}
                            {errors.passwordincorrect}
                          </span>
                        </div>
                        <div>
                          <p className="grey-text text-darken-1 form-group">
                            Don't have an account?{' '}
                            <Link to="/register">Register</Link>
                          </p>
                        </div>
                        <div className="form-group">
                          <button
                            style={{
                              width: '150px',
                              borderRadius: '3px',
                              letterSpacing: '1.5px',
                              marginTop: '1rem',
                            }}
                            type="submit"
                            className="btn btn-large btn-primary waves-effect waves-light hoverable blue accent-3">
                            Login
                          </button>
                        </div>
                      </form>
                    </Card.Text>
                  </Card.Body>
                </div>
              </form>
            </div>
          </Card>
        </Container>
        <br></br>
        <Footer />
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
