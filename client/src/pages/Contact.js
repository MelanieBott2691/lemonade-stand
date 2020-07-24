import React, { Component } from 'react';
import API from '../utils/API';
import Nav from '../components/Nav/Nav.js';
import Results from '../components/Results/Results.js';
import Footer from '../components/Footer/Footer.js';

export default class Contact extends Component {
  state = {
    errors: 0,
    submitting: 0
  };

  handleSubmit = () => {
    console.log('stuff');
  };

  render() {
    return (
      <div>
        <Nav />
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"></input>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
        <Footer />
      </div>
    );
  }
}
