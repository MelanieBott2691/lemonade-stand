import React, { Component } from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import Navbar from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer.js';
import '../assets/css/style.css';
import '../assets/css/Contact.css';

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
        <Navbar />
        <div className="contact-container">
          <form>
            <CardDeck>
              <Card style={{ width: '24rem' }}>
                <div className="container">
                  <Card.Body>
                    <div className="form-group">
                      <label for="exampleFormControlInput1">First Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter First Name"></input>
                    </div>

                    <div className="form-group">
                      <label for="exampleFormControlInput1">Last Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter Last Name"></input>
                    </div>

                    <div className="form-group">
                      <label for="exampleFormControlInput1">
                        Email address:
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"></input>
                    </div>

                    <div className="form-group">
                      <label for="exampleFormControlTextarea1">Message:</label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"></textarea>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" class="btn">
                          Submit
                        </button>
                      </div>
                    </div>
                  </Card.Body>
                </div>
              </Card>
            </CardDeck>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
